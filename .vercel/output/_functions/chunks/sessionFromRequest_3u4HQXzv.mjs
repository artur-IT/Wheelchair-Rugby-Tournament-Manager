import { CollectingResponse } from 'supertokens-node/framework/custom';
import Session from 'supertokens-node/recipe/session';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { e as ensureSuperTokensInitialized } from './initSuperTokens_C41LI9IU.mjs';
import { r as requestToPreParsedRequest } from './requestAdapter_BqTDm4i-.mjs';

async function getSessionPrismaUser(request) {
  ensureSuperTokensInitialized();
  const req = requestToPreParsedRequest(request);
  const res = new CollectingResponse();
  try {
    const session = await Session.getSession(req, res, { sessionRequired: false });
    if (!session) {
      return null;
    }
    const userId = session.getUserId();
    const tenantId = session.getTenantId();
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true }
    });
    if (!user) {
      return null;
    }
    return { userId: user.id, tenantId };
  } catch {
    return null;
  }
}

export { getSessionPrismaUser };
