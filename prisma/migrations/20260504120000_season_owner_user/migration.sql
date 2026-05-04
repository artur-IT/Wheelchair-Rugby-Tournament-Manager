-- Per-user seasons: assign existing seasons to oldest user, then enforce FK + composite unique on (ownerUserId, year).

ALTER TABLE "Season" ADD COLUMN "ownerUserId" TEXT;

UPDATE "Season"
SET "ownerUserId" = (SELECT "id" FROM "User" ORDER BY "createdAt" ASC LIMIT 1)
WHERE EXISTS (SELECT 1 FROM "User" LIMIT 1);

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM "Season" WHERE "ownerUserId" IS NULL) THEN
    RAISE EXCEPTION 'Migration blocked: every Season needs ownerUserId. Add at least one User before migrating.';
  END IF;
END $$;

ALTER TABLE "Season" ALTER COLUMN "ownerUserId" SET NOT NULL;

DROP INDEX IF EXISTS "Season_year_key";

CREATE UNIQUE INDEX "Season_ownerUserId_year_key" ON "Season"("ownerUserId", "year");

ALTER TABLE "Season" ADD CONSTRAINT "Season_ownerUserId_fkey" FOREIGN KEY ("ownerUserId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
