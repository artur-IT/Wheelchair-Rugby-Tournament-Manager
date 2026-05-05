import { CollectingResponse } from "supertokens-node/framework/custom";
import SuperTokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import { prisma } from "@/lib/prisma";
import { ensureSuperTokensInitialized } from "@/lib/supertokens/initSuperTokens";
import { requestToPreParsedRequest } from "@/lib/supertokens/requestAdapter";

export interface SessionPrismaUser {
  userId: string;
  tenantId: string;
}

async function resolvePrismaUserId(sessionUserId: string): Promise<string> {
  // Session user ID can be a SuperTokens ID. Prefer mapped external Prisma ID when available.
  const mapping = await SuperTokens.getUserIdMapping({
    userId: sessionUserId,
    userContext: {},
  }).catch(() => null);

  if (mapping?.status === "OK" && mapping.externalUserId) {
    return mapping.externalUserId;
  }
  return sessionUserId;
}

/**
 * Resolve the logged-in Prisma user from SuperTokens session cookies on the request.
 */
export async function getSessionPrismaUser(request: Request): Promise<SessionPrismaUser | null> {
  ensureSuperTokensInitialized();
  const req = requestToPreParsedRequest(request);
  const res = new CollectingResponse();
  try {
    const session = await Session.getSession(req, res, { sessionRequired: false });
    if (!session) {
      return null;
    }
    const userId = await resolvePrismaUserId(session.getUserId());
    const tenantId = session.getTenantId();
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });
    if (!user) {
      return null;
    }
    return { userId: user.id, tenantId };
  } catch {
    return null;
  }
}
