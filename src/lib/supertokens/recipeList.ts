import { createRequire } from "node:module";
import { UserRole } from "@prisma/client";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import ThirdParty from "supertokens-node/recipe/thirdparty";
import SuperTokens from "supertokens-node";
import type { UserContext } from "supertokens-node/lib/build/types";
import { prisma } from "@/lib/prisma";
import { hashPassword, randomUnusedPasswordHash } from "@/lib/supertokens/password";
import { getGoogleClientId, getGoogleClientSecret, isProductionBuild } from "@/lib/supertokens/env";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";

// Load via require: Vite SSR turns `import Google from ".../google.js"` into a broken default interop
// ("default is not a function"). Node's require keeps the real CJS export.
type GoogleFactory = typeof import("supertokens-node/lib/build/recipe/thirdparty/providers/google.js").default;

const require = createRequire(import.meta.url);
const Google = require("supertokens-node/lib/build/recipe/thirdparty/providers/google.js").default as GoogleFactory;
const DEFAULT_APP_ROLE = "USER";
const ADMIN_APP_ROLE = "ADMIN";

function nameFromEmail(email: string): string {
  const local = email.split("@")[0]?.trim();
  return local && local.length > 0 ? local : "User";
}

/** Postgres: match stored email even if DB row used different casing than normalized login input. */
function findUserByEmailInsensitive(emailLower: string) {
  return prisma.user.findFirst({
    where: { email: { equals: emailLower, mode: "insensitive" } },
    select: { id: true, email: true, password: true },
  });
}

async function mapSuperTokensUserToPrismaUser(
  superTokensUserId: string,
  prismaUserId: string,
  userContext: UserContext
): Promise<void> {
  const res = await SuperTokens.createUserIdMapping({
    superTokensUserId,
    externalUserId: prismaUserId,
    userContext,
  });
  if (res.status === "USER_ID_MAPPING_ALREADY_EXISTS_ERROR") {
    return;
  }
}

async function ensureDefaultRoles(userContext: UserContext): Promise<void> {
  await UserRoles.createNewRoleOrAddPermissions(DEFAULT_APP_ROLE, [], userContext);
  await UserRoles.createNewRoleOrAddPermissions(ADMIN_APP_ROLE, [], userContext);
}

async function assignDefaultRole(tenantId: string, userId: string, userContext: UserContext): Promise<void> {
  await ensureDefaultRoles(userContext);
  const result = await UserRoles.addRoleToUser(tenantId, userId, DEFAULT_APP_ROLE, userContext);
  if (result.status === "UNKNOWN_ROLE_ERROR") {
    await UserRoles.createNewRoleOrAddPermissions(DEFAULT_APP_ROLE, [], userContext);
    await UserRoles.addRoleToUser(tenantId, userId, DEFAULT_APP_ROLE, userContext);
  }
}

export function buildRecipeList() {
  return [
    Session.init({
      antiCsrf: "NONE",
      cookieSameSite: "lax",
      cookieSecure: isProductionBuild(),
    }),
    Dashboard.init(),
    UserRoles.init(),
    EmailPassword.init({
      override: {
        functions: (original) => ({
          ...original,
          signUp: async (input) => {
            const email = input.email.trim().toLowerCase();
            const { password, tenantId, userContext } = input;

            const existing = await findUserByEmailInsensitive(email);
            if (existing) {
              return { status: "EMAIL_ALREADY_EXISTS_ERROR" as const };
            }

            const hashed = await hashPassword(password);
            const prismaUser = await prisma.user.create({
              data: {
                email,
                name: nameFromEmail(email),
                password: hashed,
                role: UserRole.USER,
              },
            });

            const created = await original.createNewRecipeUser({
              email,
              password,
              tenantId,
              userContext,
            });

            if (created.status !== "OK") {
              await prisma.user.delete({ where: { id: prismaUser.id } }).catch(() => undefined);
              return created;
            }

            await mapSuperTokensUserToPrismaUser(created.user.id, prismaUser.id, userContext);
            await assignDefaultRole(tenantId, created.user.id, userContext);
            const user = (await SuperTokens.getUser(created.user.id, userContext)) ?? created.user;
            return { status: "OK" as const, user, recipeUserId: created.recipeUserId };
          },
          signIn: async (input) => {
            const email = input.email.trim().toLowerCase();
            const { tenantId, userContext } = input;

            const superTokensResult = await original.signIn({
              ...input,
              email,
            });
            if (superTokensResult.status !== "OK") {
              return superTokensResult;
            }

            // Legacy migration: after successful SuperTokens login, backfill Prisma mapping if needed.
            const mapped = await SuperTokens.getUserIdMapping({
              userId: superTokensResult.user.id,
              userContext,
            });
            if (!mapped) {
              const prismaUser = await findUserByEmailInsensitive(email);
              if (prismaUser) {
                await mapSuperTokensUserToPrismaUser(superTokensResult.user.id, prismaUser.id, userContext);
              }
            }
            await assignDefaultRole(tenantId, superTokensResult.user.id, userContext);
            return superTokensResult;
          },
        }),
      },
    }),
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [
          Google({
            config: {
              thirdPartyId: "google",
              clients: [
                {
                  clientType: "web",
                  clientId: getGoogleClientId(),
                  clientSecret: getGoogleClientSecret(),
                },
              ],
            },
          }),
        ],
      },
      override: {
        functions: (original) => ({
          ...original,
          signInUp: async (input) => {
            const result = await original.signInUp(input);
            if (result.status !== "OK") {
              return result;
            }
            const email = input.email.trim().toLowerCase();
            if (!email) {
              return result;
            }

            let prismaUser = await findUserByEmailInsensitive(email);
            if (!prismaUser) {
              const placeholder = await randomUnusedPasswordHash();
              prismaUser = await prisma.user.create({
                data: {
                  email,
                  name: nameFromEmail(email),
                  password: placeholder,
                  role: UserRole.USER,
                },
              });
            }
            await mapSuperTokensUserToPrismaUser(result.user.id, prismaUser.id, input.userContext);
            await assignDefaultRole(input.tenantId, result.user.id, input.userContext);
            return result;
          },
        }),
      },
    }),
  ];
}
