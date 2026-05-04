import SuperTokens from 'supertokens-node';
import { createRequire } from 'node:module';
import { UserRole } from '@prisma/client';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import Session from 'supertokens-node/recipe/session';
import ThirdParty from 'supertokens-node/recipe/thirdparty';
import { prisma } from './prisma_lW-FDGGq.mjs';
import argon2 from 'argon2';
import { v as validateAuthEmail, a as validateAuthPassword } from './authValidation_BT2QwBvX.mjs';
import Dashboard from 'supertokens-node/recipe/dashboard';
import UserRoles from 'supertokens-node/recipe/userroles';

async function hashPassword(plain) {
  return argon2.hash(plain, { type: argon2.argon2id });
}
async function randomUnusedPasswordHash() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const token = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return hashPassword(`oauth-placeholder:${token}`);
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_SITE_URL": "http://localhost:3000", "SITE": undefined, "SSR": true};
function readEnv(name) {
  const fromImportMeta = typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { GOOGLE_CLIENT_ID: "210687440326-fjlg72b3i52puq5gbgqqvf0k558gpv2q.apps.googleusercontent.com", GOOGLE_CLIENT_SECRET: "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", SUPERTOKENS_CONNECTION_URI: "https://st-dev-a191b641-3b11-11f1-ace6-8d3a96da6240.aws.supertokens.io", SUPERTOKENS_API_KEY: "SGiun=PndCXPQf0bcKCvKRrYjF", NODE: "E:\\nodejs\\node.exe", NODE_ENV: "production", PUBLIC: "C:\\Users\\Public" }) && Object.assign(__vite_import_meta_env__, { GOOGLE_CLIENT_ID: "210687440326-fjlg72b3i52puq5gbgqqvf0k558gpv2q.apps.googleusercontent.com", GOOGLE_CLIENT_SECRET: "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", SUPERTOKENS_CONNECTION_URI: "https://st-dev-a191b641-3b11-11f1-ace6-8d3a96da6240.aws.supertokens.io", SUPERTOKENS_API_KEY: "SGiun=PndCXPQf0bcKCvKRrYjF", NODE: "E:\\nodejs\\node.exe", NODE_ENV: "production", PUBLIC: "C:\\Users\\Public" })[name];
  if (typeof fromImportMeta === "string" && fromImportMeta.trim()) return fromImportMeta.trim();
  const fromProcess = typeof process !== "undefined" ? process.env[name] : void 0;
  if (typeof fromProcess === "string" && fromProcess.trim()) return fromProcess.trim();
  return void 0;
}
function getSuperTokensConnectionUri() {
  const v = readEnv("SUPERTOKENS_CONNECTION_URI");
  if (!v) throw new Error("SUPERTOKENS_CONNECTION_URI is not set");
  return v;
}
function getSuperTokensApiKey() {
  return readEnv("SUPERTOKENS_API_KEY");
}
function getPublicSiteUrl() {
  return readEnv("PUBLIC_SITE_URL") ?? "http://localhost:3000";
}
function getGoogleClientId() {
  const v = readEnv("GOOGLE_CLIENT_ID");
  if (!v) throw new Error("GOOGLE_CLIENT_ID is not set");
  return v;
}
function getGoogleClientSecret() {
  const v = readEnv("GOOGLE_CLIENT_SECRET");
  if (!v) throw new Error("GOOGLE_CLIENT_SECRET is not set");
  return v;
}
function isProductionBuild() {
  if (typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { GOOGLE_CLIENT_ID: "210687440326-fjlg72b3i52puq5gbgqqvf0k558gpv2q.apps.googleusercontent.com", GOOGLE_CLIENT_SECRET: "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", SUPERTOKENS_CONNECTION_URI: "https://st-dev-a191b641-3b11-11f1-ace6-8d3a96da6240.aws.supertokens.io", SUPERTOKENS_API_KEY: "SGiun=PndCXPQf0bcKCvKRrYjF", NODE: "E:\\nodejs\\node.exe", NODE_ENV: "production", PUBLIC: "C:\\Users\\Public" })) {
    return Boolean(Object.assign(__vite_import_meta_env__, { GOOGLE_CLIENT_ID: "210687440326-fjlg72b3i52puq5gbgqqvf0k558gpv2q.apps.googleusercontent.com", GOOGLE_CLIENT_SECRET: "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", SUPERTOKENS_CONNECTION_URI: "https://st-dev-a191b641-3b11-11f1-ace6-8d3a96da6240.aws.supertokens.io", SUPERTOKENS_API_KEY: "SGiun=PndCXPQf0bcKCvKRrYjF", NODE: "E:\\nodejs\\node.exe", NODE_ENV: "production", PUBLIC: "C:\\Users\\Public" }).PROD);
  }
  return process.env.NODE_ENV === "production";
}

const MAX_FAILED_LOGIN_ATTEMPTS = 5;
const LOGIN_LOCK_WINDOW_MS = 5 * 60 * 1e3;
function isTemporarilyLocked(lockUntil, now = /* @__PURE__ */ new Date()) {
  return lockUntil !== null && lockUntil > now;
}
function computeFailedLoginState(failedLoginAttempts, now = /* @__PURE__ */ new Date()) {
  const nextFailedAttempts = failedLoginAttempts + 1;
  if (nextFailedAttempts < MAX_FAILED_LOGIN_ATTEMPTS) {
    return {
      failedLoginAttempts: nextFailedAttempts,
      lockUntil: null
    };
  }
  return {
    failedLoginAttempts: nextFailedAttempts,
    lockUntil: new Date(now.getTime() + LOGIN_LOCK_WINDOW_MS)
  };
}
function computeRemainingLoginAttempts(failedLoginAttempts) {
  const remainingAttempts = MAX_FAILED_LOGIN_ATTEMPTS - failedLoginAttempts;
  if (remainingAttempts <= 0) {
    return 0;
  }
  return remainingAttempts;
}

const require$1 = createRequire(import.meta.url);
const Google = require$1("supertokens-node/lib/build/recipe/thirdparty/providers/google.js").default;
const DEFAULT_APP_ROLE = "USER";
const ADMIN_APP_ROLE = "ADMIN";
function nameFromEmail(email) {
  const local = email.split("@")[0]?.trim();
  return local && local.length > 0 ? local : "User";
}
function toNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}
const toRecord = (value) => value && typeof value === "object" ? value : null;
function pickFirstNonEmpty(source, keys) {
  if (!source) {
    return null;
  }
  for (const key of keys) {
    const parsed = toNonEmptyString(source[key]);
    if (parsed) {
      return parsed;
    }
  }
  return null;
}
function parseNameParts(primary, fallback) {
  const firstName = pickFirstNonEmpty(primary, ["given_name", "givenName"]) ?? pickFirstNonEmpty(fallback, ["given_name"]);
  const lastName = pickFirstNonEmpty(primary, ["family_name", "familyName"]) ?? pickFirstNonEmpty(fallback, ["family_name"]);
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }
  return pickFirstNonEmpty(primary, ["name"]) ?? pickFirstNonEmpty(fallback, ["name"]);
}
function parseGoogleProfileName(rawUserInfoFromProvider) {
  const provider = toRecord(rawUserInfoFromProvider);
  if (!provider) {
    return null;
  }
  const fromUserInfoAPI = toRecord(provider.fromUserInfoAPI);
  const userInfoApiPayload = toRecord(fromUserInfoAPI?.userInfo) ?? fromUserInfoAPI;
  const idTokenPayload = toRecord(provider.fromIdTokenPayload);
  return parseNameParts(userInfoApiPayload, idTokenPayload);
}
function parseGoogleProfileNameFromUserInfo(userInfo) {
  return parseNameParts(toRecord(userInfo), null);
}
function shouldReplaceGeneratedName(currentName, email) {
  const normalizedCurrentName = currentName.trim().toLowerCase();
  if (!normalizedCurrentName) {
    return true;
  }
  return normalizedCurrentName === nameFromEmail(email).trim().toLowerCase();
}
function getGoogleAccessToken(oAuthTokens) {
  if (!oAuthTokens || typeof oAuthTokens !== "object") {
    return null;
  }
  const tokens = oAuthTokens;
  return toNonEmptyString(tokens.access_token) ?? toNonEmptyString(tokens.accessToken);
}
async function fetchGoogleUserInfo(accessToken) {
  try {
    const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
      signal: AbortSignal.timeout(5e3)
    });
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch {
    throw new Error("Failed to fetch Google user info");
  }
}
function findUserByEmailInsensitive(emailLower) {
  return prisma.user.findFirst({
    where: { email: { equals: emailLower, mode: "insensitive" } },
    select: {
      id: true,
      email: true,
      name: true,
      password: true,
      failedLoginAttempts: true,
      lockUntil: true,
      manualLock: true
    }
  });
}
async function mapSuperTokensUserToPrismaUser(superTokensUserId, prismaUserId, userContext) {
  const res = await SuperTokens.createUserIdMapping({
    superTokensUserId,
    externalUserId: prismaUserId,
    userContext
  });
  if (res.status === "USER_ID_MAPPING_ALREADY_EXISTS_ERROR") {
    return;
  }
}
async function ensureDefaultRoles(userContext) {
  await UserRoles.createNewRoleOrAddPermissions(DEFAULT_APP_ROLE, [], userContext);
  await UserRoles.createNewRoleOrAddPermissions(ADMIN_APP_ROLE, [], userContext);
}
async function assignDefaultRole(tenantId, userId, userContext) {
  await ensureDefaultRoles(userContext);
  const result = await UserRoles.addRoleToUser(tenantId, userId, DEFAULT_APP_ROLE, userContext);
  if (result.status === "UNKNOWN_ROLE_ERROR") {
    await UserRoles.createNewRoleOrAddPermissions(DEFAULT_APP_ROLE, [], userContext);
    await UserRoles.addRoleToUser(tenantId, userId, DEFAULT_APP_ROLE, userContext);
  }
}
function buildRecipeList() {
  return [
    Session.init({
      antiCsrf: "NONE",
      cookieSameSite: "lax",
      cookieSecure: isProductionBuild()
    }),
    Dashboard.init(),
    UserRoles.init(),
    EmailPassword.init({
      signUpFeature: {
        formFields: [
          {
            id: "email",
            validate: async (value) => validateAuthEmail(String(value ?? "")) ?? void 0
          },
          {
            id: "password",
            validate: async (value) => validateAuthPassword(String(value ?? "")) ?? void 0
          }
        ]
      },
      override: {
        functions: (original) => ({
          ...original,
          signUp: async (input) => {
            const email = input.email.trim().toLowerCase();
            const { password, tenantId, userContext } = input;
            const existing = await findUserByEmailInsensitive(email);
            if (existing) {
              return { status: "EMAIL_ALREADY_EXISTS_ERROR" };
            }
            const hashed = await hashPassword(password);
            const prismaUser = await prisma.user.create({
              data: {
                email,
                name: nameFromEmail(email),
                password: hashed,
                role: UserRole.USER
              }
            });
            const created = await original.createNewRecipeUser({
              email,
              password,
              tenantId,
              userContext
            });
            if (created.status !== "OK") {
              await prisma.user.delete({ where: { id: prismaUser.id } }).catch(() => void 0);
              return created;
            }
            await mapSuperTokensUserToPrismaUser(created.user.id, prismaUser.id, userContext);
            await assignDefaultRole(tenantId, created.user.id, userContext);
            const user = await SuperTokens.getUser(created.user.id, userContext) ?? created.user;
            return { status: "OK", user, recipeUserId: created.recipeUserId };
          },
          signIn: async (input) => {
            const email = input.email.trim().toLowerCase();
            const { tenantId, userContext } = input;
            const loginStateUser = await findUserByEmailInsensitive(email);
            const now = /* @__PURE__ */ new Date();
            if (loginStateUser?.manualLock) {
              return {
                status: "WRONG_CREDENTIALS_ERROR",
                remainingAttempts: 0,
                maxAttempts: MAX_FAILED_LOGIN_ATTEMPTS
              };
            }
            if (loginStateUser?.lockUntil && isTemporarilyLocked(loginStateUser.lockUntil, now)) {
              return {
                status: "WRONG_CREDENTIALS_ERROR",
                remainingAttempts: 0,
                maxAttempts: MAX_FAILED_LOGIN_ATTEMPTS,
                lockUntil: loginStateUser.lockUntil.toISOString()
              };
            }
            const superTokensResult = await original.signIn({
              ...input,
              email
            });
            if (superTokensResult.status !== "OK") {
              if (superTokensResult.status === "WRONG_CREDENTIALS_ERROR" && loginStateUser && !loginStateUser.manualLock) {
                const nextState = computeFailedLoginState(loginStateUser.failedLoginAttempts, now);
                await prisma.user.update({
                  where: { id: loginStateUser.id },
                  data: nextState
                }).catch(() => void 0);
                return {
                  ...superTokensResult,
                  remainingAttempts: computeRemainingLoginAttempts(nextState.failedLoginAttempts),
                  maxAttempts: MAX_FAILED_LOGIN_ATTEMPTS,
                  lockUntil: nextState.lockUntil ? nextState.lockUntil.toISOString() : null
                };
              }
              return superTokensResult;
            }
            if (loginStateUser && !loginStateUser.manualLock && (loginStateUser.failedLoginAttempts > 0 || loginStateUser.lockUntil !== null)) {
              await prisma.user.update({
                where: { id: loginStateUser.id },
                data: {
                  failedLoginAttempts: 0,
                  lockUntil: null
                }
              });
            }
            const mapped = await SuperTokens.getUserIdMapping({
              userId: superTokensResult.user.id,
              userContext
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
          consumePasswordResetToken: async (input) => {
            const result = await original.consumePasswordResetToken(input);
            if (result.status !== "OK") {
              return result;
            }
            const mapping = await SuperTokens.getUserIdMapping({
              userId: result.userId,
              userContext: input.userContext
            });
            if (mapping.status === "OK") {
              await prisma.user.updateMany({
                where: { id: mapping.externalUserId, manualLock: false },
                data: {
                  failedLoginAttempts: 0,
                  lockUntil: null
                }
              }).catch(() => void 0);
              return result;
            }
            const stUser = await SuperTokens.getUser(result.userId, input.userContext);
            const stEmail = stUser?.emails?.[0]?.trim().toLowerCase();
            if (!stEmail) {
              return result;
            }
            await prisma.user.updateMany({
              where: {
                email: { equals: stEmail, mode: "insensitive" },
                manualLock: false
              },
              data: {
                failedLoginAttempts: 0,
                lockUntil: null
              }
            }).catch(() => void 0);
            return result;
          }
        })
      }
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
                  scope: ["openid", "email", "profile"]
                }
              ]
            }
          })
        ]
      },
      override: {
        functions: (original) => ({
          ...original,
          signInUp: async (input) => {
            const email = input.email.trim().toLowerCase();
            const existingPrismaUser = await findUserByEmailInsensitive(email);
            const result = await original.signInUp(input);
            if (result.status !== "OK") {
              return result;
            }
            if (!email) {
              return result;
            }
            if (result.createdNewRecipeUser && existingPrismaUser) {
              await SuperTokens.deleteUser(result.user.id).catch(() => void 0);
              return {
                status: "SIGN_IN_UP_NOT_ALLOWED",
                reason: "Konto z tym adresem e-mail już istnieje."
              };
            }
            let prismaUser = existingPrismaUser;
            let googleProfileName = parseGoogleProfileName(input.rawUserInfoFromProvider);
            if (!googleProfileName) {
              const signInInput = input;
              const accessToken = getGoogleAccessToken(signInInput.oAuthTokens);
              const userInfo = accessToken ? await fetchGoogleUserInfo(accessToken).catch(() => null) : null;
              googleProfileName = parseGoogleProfileNameFromUserInfo(userInfo);
            }
            if (!prismaUser) {
              const placeholder = await randomUnusedPasswordHash();
              prismaUser = await prisma.user.create({
                data: {
                  email,
                  name: googleProfileName ?? nameFromEmail(email),
                  password: placeholder,
                  role: UserRole.USER
                }
              });
            } else if (googleProfileName && shouldReplaceGeneratedName(prismaUser.name, email)) {
              await prisma.user.update({
                where: { id: prismaUser.id },
                data: { name: googleProfileName }
              });
            }
            await mapSuperTokensUserToPrismaUser(result.user.id, prismaUser.id, input.userContext);
            await assignDefaultRole(input.tenantId, result.user.id, input.userContext);
            return result;
          }
        })
      }
    })
  ];
}

let initialized = false;
function ensureSuperTokensInitialized() {
  if (initialized) {
    return;
  }
  const site = new URL(getPublicSiteUrl());
  SuperTokens.init({
    framework: "custom",
    supertokens: {
      connectionURI: getSuperTokensConnectionUri(),
      apiKey: getSuperTokensApiKey()
    },
    appInfo: {
      appName: "Wheelchair Rugby Manager",
      apiDomain: site.origin,
      websiteDomain: site.origin,
      apiBasePath: "/api/auth",
      // Must match the frontend auth base path so generated links (e.g. reset password) open a public route.
      websiteBasePath: "/auth"
    },
    recipeList: buildRecipeList()
  });
  initialized = true;
}

export { ensureSuperTokensInitialized as e };
