import { createRequire } from "node:module";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import ThirdParty from "supertokens-node/recipe/thirdparty";
import SuperTokens from "supertokens-node";
import type { UserContext } from "supertokens-node/lib/build/types";
import { prisma } from "@/lib/prisma";
import { hashPassword, randomUnusedPasswordHash, verifyStoredPassword } from "@/lib/supertokens/password";
import { getGoogleClientId, getGoogleClientSecret, isProductionBuild } from "@/lib/supertokens/env";

// Load via require: Vite SSR turns `import Google from ".../google.js"` into a broken default interop
// ("default is not a function"). Node's require keeps the real CJS export.
type GoogleFactory = typeof import("supertokens-node/lib/build/recipe/thirdparty/providers/google.js").default;

const require = createRequire(import.meta.url);
const Google = require("supertokens-node/lib/build/recipe/thirdparty/providers/google.js").default as GoogleFactory;

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

export function buildRecipeList() {
  return [
    Session.init({
      antiCsrf: "NONE",
      cookieSameSite: "lax",
      cookieSecure: isProductionBuild(),
    }),
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
                role: "COACH",
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
            const user = (await SuperTokens.getUser(created.user.id, userContext)) ?? created.user;
            return { status: "OK" as const, user, recipeUserId: created.recipeUserId };
          },
          signIn: async (input) => {
            const email = input.email.trim().toLowerCase();
            const { password, tenantId, userContext } = input;

            const prismaUser = await findUserByEmailInsensitive(email);
            if (!prismaUser) {
              return { status: "WRONG_CREDENTIALS_ERROR" as const };
            }
            const ok = await verifyStoredPassword(prismaUser.password, password);
            if (!ok) {
              return { status: "WRONG_CREDENTIALS_ERROR" as const };
            }

            const users = await SuperTokens.listUsersByAccountInfo(tenantId, { email }, false, userContext);
            for (const stUser of users) {
              const lm = stUser.loginMethods.find((m) => m.recipeId === "emailpassword");
              if (lm) {
                await mapSuperTokensUserToPrismaUser(stUser.id, prismaUser.id, userContext);
                return { status: "OK" as const, user: stUser, recipeUserId: lm.recipeUserId };
              }
            }

            const created = await original.createNewRecipeUser({
              email,
              password,
              tenantId,
              userContext,
            });
            if (created.status !== "OK") {
              if (import.meta.env.DEV) {
                console.error(
                  "[EmailPassword signIn] createNewRecipeUser failed (Prisma password was OK). SuperTokens status:",
                  created.status
                );
              }
              return { status: "WRONG_CREDENTIALS_ERROR" as const };
            }
            await mapSuperTokensUserToPrismaUser(created.user.id, prismaUser.id, userContext);
            const user = (await SuperTokens.getUser(created.user.id, userContext)) ?? created.user;
            return { status: "OK" as const, user, recipeUserId: created.recipeUserId };
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
                  role: "COACH",
                },
              });
            }
            await mapSuperTokensUserToPrismaUser(result.user.id, prismaUser.id, input.userContext);
            return result;
          },
        }),
      },
    }),
  ];
}
