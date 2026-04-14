-- Align with auth_google_local intent: LOCAL accounts without a password must reset once.
UPDATE "User"
SET "mustResetPassword" = true
WHERE "authProvider" = 'LOCAL' AND "passwordHash" IS NULL;
