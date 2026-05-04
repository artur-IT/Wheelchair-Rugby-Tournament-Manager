import { Prisma } from '@prisma/client';
import SuperTokens from 'supertokens-node';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { e as ensureSuperTokensInitialized } from './initSuperTokens_C41LI9IU.mjs';

async function deleteOwnUserAccount(userId) {
  try {
    await prisma.user.delete({ where: { id: userId } });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return false;
    }
    throw error;
  }
  ensureSuperTokensInitialized();
  await SuperTokens.deleteUser(userId).catch(() => void 0);
  return true;
}

export { deleteOwnUserAccount };
