import type { APIRoute } from "astro";
import { json } from "@/lib/api";
import { removeRefereeFromTournament } from "@/lib/tournaments";
import { getSessionUserOr401 } from "@/lib/requireSessionUser";

export const DELETE: APIRoute = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;

  const { id, refereeId } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  if (!refereeId) return json({ error: "Brak id sędziego" }, 400);

  try {
    await removeRefereeFromTournament(id, refereeId, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    return json({ error: "Nie udało się usunąć sędziego z turnieju" }, 500);
  }
};
