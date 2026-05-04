import { Prisma } from "@prisma/client";
import SuperTokens from "supertokens-node";
import { prisma } from "@/lib/prisma";
import { ensureSuperTokensInitialized } from "@/lib/supertokens/initSuperTokens";

/**
 * Removes the Prisma user (cascades seasons, tournaments, club, etc.) then deletes the SuperTokens user.
 * @returns false if the Prisma row was already gone
 */
export async function deleteOwnUserAccount(userId: string): Promise<boolean> {
  try {
    await prisma.user.delete({ where: { id: userId } });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return false;
    }
    throw error;
  }

  ensureSuperTokensInitialized();
  await SuperTokens.deleteUser(userId).catch(() => undefined);
  return true;
}
