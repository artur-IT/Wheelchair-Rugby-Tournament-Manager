import type { APIRoute } from "astro";
import { z } from "@/lib/zodPl";
import { json } from "@/lib/api";
import { addRefereesToTournament } from "@/lib/tournaments";
import { getSessionUserOr401 } from "@/lib/requireSessionUser";

const AddRefereesSchema = z.object({
  refereeIds: z.array(z.string().min(1)).min(1, "Wybierz przynajmniej jednego sędziego"),
});

export const POST: APIRoute = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;

  const { id } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);

  const body = await request.json().catch(() => null);
  const parsed = AddRefereesSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);

  try {
    await addRefereesToTournament(id, parsed.data.refereeIds, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    if (error instanceof Error && error.message === "REFEREE_NOT_FOUND") {
      return json({ error: "Nie znaleziono jednego z sędziów" }, 404);
    }
    if (error instanceof Error && error.message === "REFEREE_WRONG_SEASON") {
      return json({ error: "Wybrany sędzia jest z innego sezonu" }, 400);
    }
    return json({ error: "Nie udało się dodać sędziów do turnieju" }, 500);
  }
};
