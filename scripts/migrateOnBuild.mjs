/* eslint-env node */
import { execSync } from "node:child_process";

function shouldRunMigrations() {
  // Vercel sets VERCEL_ENV to "production" / "preview" / "development"
  return process.env.VERCEL_ENV === "production";
}

if (!shouldRunMigrations()) {
  console.log("[prisma] Skip migrate deploy (not production build).");
} else {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set (required for prisma migrate deploy).");
  }

  console.log("[prisma] Running prisma migrate deploy...");
  execSync("pnpm prisma migrate deploy", {
    stdio: "inherit",
    env: process.env,
  });
  console.log("[prisma] prisma migrate deploy done.");
}

