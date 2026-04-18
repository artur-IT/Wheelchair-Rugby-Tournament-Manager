import { prisma } from "@/lib/prisma";
import { json } from "@/lib/api";
import { getSessionPrismaUser } from "@/lib/supertokens/sessionFromRequest";

interface RequesterIdentity {
  role?: string;
  userId: string;
}

interface AuthSuccess {
  ok: true;
  identity: RequesterIdentity;
}

interface AuthFailure {
  ok: false;
  response: Response;
}

type AuthResult = AuthSuccess | AuthFailure;

const unauthorized = () => ({ ok: false as const, response: json({ error: "Brak autoryzacji" }, 401) });
const forbidden = () => ({ ok: false as const, response: json({ error: "Brak uprawnień" }, 403) });

async function getRequesterIdentity(request: Request): Promise<AuthResult> {
  const sessionUser = await getSessionPrismaUser(request);
  if (!sessionUser) {
    return unauthorized();
  }

  const role = sessionUser.role.trim().toUpperCase();
  return { ok: true, identity: { role, userId: sessionUser.userId } };
}

export async function authorizeClubAccess(request: Request, resourceClubId: string): Promise<AuthResult> {
  const auth = await getRequesterIdentity(request);
  if (!auth.ok) return auth;

  const { role, userId } = auth.identity;
  if (role === "ADMIN") return auth;

  const club = await prisma.club.findUnique({
    where: { id: resourceClubId },
    select: { ownerUserId: true },
  });
  if (club?.ownerUserId === userId) return auth;

  return forbidden();
}
