import { json } from "@/lib/api";
import { getSessionPrismaUser } from "@/lib/supertokens/sessionFromRequest";
import type { SessionPrismaUser } from "@/lib/supertokens/sessionFromRequest";

export type SessionUserResult = { ok: true; user: SessionPrismaUser } | { ok: false; response: Response };

/** Require a Prisma-backed SuperTokens user for tournament/season API routes. */
export async function getSessionUserOr401(request: Request): Promise<SessionUserResult> {
  const user = await getSessionPrismaUser(request);
  if (!user) {
    return { ok: false, response: json({ error: "Brak aktywnej sesji użytkownika" }, 401) };
  }
  return { ok: true, user };
}
