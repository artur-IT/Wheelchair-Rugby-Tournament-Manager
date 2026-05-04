import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { d as deleteClassifierPlanEntryForTournament, u as updateClassifierPlanEntryForTournament } from './classifierPlan_CQJCQOt6.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const UpsertClassifierPlanSchema = z.object({
  playerId: z.string().min(1, "Wybierz zawodnika"),
  scheduledAt: z.string().datetime("Nieprawidłowa data/godzina"),
  endsAt: z.string().datetime("Nieprawidłowa data/godzina zakończenia"),
  classification: z.number().min(0, "Klasyfikacja nie może być ujemna").max(4, "Maksymalna klasyfikacja to 4").refine((v) => Number.isInteger(v * 2), "Klasyfikacja musi mieć krok 0.5").optional(),
  observation: z.boolean().optional()
});
const PUT = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id, examId } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  if (!examId) return json({ error: "Brak id badania" }, 400);
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Nieprawidłowy format JSON" }, 400);
  }
  const parsed = UpsertClassifierPlanSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  try {
    await updateClassifierPlanEntryForTournament(id, examId, parsed.data, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "TOURNAMENT_NOT_FOUND") return json({ error: "Nie znaleziono turnieju" }, 404);
      if (error.message === "EXAM_NOT_FOUND") return json({ error: "Nie znaleziono badania" }, 404);
      if (error.message === "PLAYER_NOT_IN_TOURNAMENT")
        return json({ error: "Wybrany zawodnik nie należy do turnieju" }, 400);
      if (error.message === "INVALID_SCHEDULED_AT") return json({ error: "Nieprawidłowa data/godzina" }, 400);
      if (error.message === "INVALID_CLASSIFICATION") return json({ error: "Nieprawidłowa klasyfikacja" }, 400);
      if (error.message === "INVALID_ENDS_AT") return json({ error: "Nieprawidłowa data/godzina zakończenia" }, 400);
      if (error.message === "TIME_CONFLICT")
        return json({ error: "W tym czasie jest już zaplanowane inne badanie" }, 400);
    }
    return json({ error: "Nie udało się zaktualizować wpisu w planie klasyfikatorów" }, 500);
  }
};
const DELETE = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id, examId } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  if (!examId) return json({ error: "Brak id badania" }, 400);
  try {
    await deleteClassifierPlanEntryForTournament(id, examId, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "TOURNAMENT_NOT_FOUND") return json({ error: "Nie znaleziono turnieju" }, 404);
      if (error.message === "EXAM_NOT_FOUND") return json({ error: "Nie znaleziono badania" }, 404);
    }
    return json({ error: "Nie udało się usunąć wpisu z planu klasyfikatorów" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
