import type { APIRoute } from "astro";
import { z } from "@/lib/zodPl";
import { json } from "@/lib/api";
import { addTeamsToTournament } from "@/lib/tournaments";
import { getSessionUserOr401 } from "@/lib/requireSessionUser";

const AddTeamsSchema = z.object({
  teamIds: z.array(z.string().min(1)).min(1, "Wybierz przynajmniej jedną drużynę"),
});

export const POST: APIRoute = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;

  const { id } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);

  const body = await request.json().catch(() => null);
  const parsed = AddTeamsSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);

  try {
    await addTeamsToTournament(id, parsed.data.teamIds, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    if (error instanceof Error && error.message === "TEAM_NOT_FOUND") {
      return json({ error: "Nie znaleziono jednej z drużyn" }, 404);
    }
    if (error instanceof Error && error.message === "TEAM_WRONG_SEASON") {
      return json({ error: "Wybrana drużyna jest z innego sezonu" }, 400);
    }

    return json({ error: "Nie udało się dodać drużyn do turnieju" }, 500);
  }
};
