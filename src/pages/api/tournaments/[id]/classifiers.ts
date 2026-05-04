import type { APIRoute } from "astro";
import { z } from "@/lib/zodPl";
import { json } from "@/lib/api";
import { addClassifiersToTournament } from "@/lib/tournaments";
import { getSessionUserOr401 } from "@/lib/requireSessionUser";

const AddClassifiersSchema = z.object({
  classifierIds: z.array(z.string().min(1)).min(1, "Wybierz przynajmniej jednego klasyfikatora"),
});

export const POST: APIRoute = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;

  const { id } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Nieprawidłowy format JSON" }, 400);
  }
  const parsed = AddClassifiersSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);

  try {
    await addClassifiersToTournament(id, parsed.data.classifierIds, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    if (error instanceof Error && error.message === "CLASSIFIER_NOT_FOUND") {
      return json({ error: "Nie znaleziono jednego z klasyfikatorów" }, 404);
    }
    if (error instanceof Error && error.message === "CLASSIFIER_WRONG_SEASON") {
      return json({ error: "Wybrany klasyfikator jest z innego sezonu" }, 400);
    }
    return json({ error: "Nie udało się dodać klasyfikatorów do turnieju" }, 500);
  }
};
