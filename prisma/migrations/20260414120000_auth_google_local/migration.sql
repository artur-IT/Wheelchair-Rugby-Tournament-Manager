-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('LOCAL', 'GOOGLE');

-- AlterEnum UserRole: replace COACH/ORGANIZER with ADMIN
CREATE TYPE "UserRole_new" AS ENUM ('ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole_new" USING ('ADMIN'::"UserRole_new");
DROP TYPE "UserRole";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";

-- Add new auth columns (nullable first for backfill)
ALTER TABLE "User" ADD COLUMN "authProvider" "AuthProvider";
ALTER TABLE "User" ADD COLUMN "localLogin" TEXT;
ALTER TABLE "User" ADD COLUMN "passwordHash" TEXT;
ALTER TABLE "User" ADD COLUMN "googleSub" TEXT;

-- Backfill existing users as LOCAL demo accounts
UPDATE "User"
SET
  "authProvider" = 'LOCAL',
  "localLogin" = lower(left(split_part("email", '@', 1), 6)),
  "passwordHash" = '$argon2id$v=19$m=65536,t=3,p=4$5LTu0h+P1X0cs1pjXRRFbA$nJeHZYxQRTnw6H/0UsRWepDX+W0XZexN17rLq6Gas1c';

ALTER TABLE "User" ALTER COLUMN "authProvider" SET NOT NULL;

-- Drop old password column; allow NULL email for future GOOGLE users
ALTER TABLE "User" DROP COLUMN "password";
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;

-- Unique constraints for new identifiers
CREATE UNIQUE INDEX "User_localLogin_key" ON "User"("localLogin");
CREATE UNIQUE INDEX "User_googleSub_key" ON "User"("googleSub");
