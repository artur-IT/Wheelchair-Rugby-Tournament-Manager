-- Add passwordResetEmail to users
ALTER TABLE "User"
ADD COLUMN "passwordResetEmail" TEXT;
