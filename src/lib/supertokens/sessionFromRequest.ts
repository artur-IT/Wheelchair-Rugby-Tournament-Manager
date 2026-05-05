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

/** Map SuperTokens session user id to our Prisma `User.id` (mapping, same id, or email fallback). */
async function resolvePrismaUserId(sessionUserId: string): Promise<string | null> {
  const mapping = await SuperTokens.getUserIdMapping({
    userId: sessionUserId,
    userIdType: "SUPERTOKENS",
    userContext: {},
  }).catch(() => null);

  if (mapping?.status === "OK" && mapping.externalUserId) {
    const byMapping = await prisma.user.findUnique({
      where: { id: mapping.externalUserId },
      select: { id: true },
    });
    if (byMapping) return byMapping.id;
  }

  const bySameId = await prisma.user.findUnique({
    where: { id: sessionUserId },
    select: { id: true },
  });
  if (bySameId) return bySameId.id;

  const stUser = await SuperTokens.getUser(sessionUserId, {}).catch(() => undefined);
  const email = stUser?.emails?.[0]?.trim().toLowerCase();
  if (!email) return null;

  const byEmail = await prisma.user.findFirst({
    where: { email: { equals: email, mode: "insensitive" } },
    select: { id: true },
  });
  return byEmail?.id ?? null;
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
    if (!userId) {
      return null;
    }
    const tenantId = session.getTenantId();
    return { userId, tenantId };
  } catch {
    return null;
  }
}
