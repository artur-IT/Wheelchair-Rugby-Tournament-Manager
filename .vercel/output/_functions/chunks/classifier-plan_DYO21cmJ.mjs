import { Prisma } from '@prisma/client';
import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { l as listClassifierPlanForTournament, c as createClassifierPlanEntryForTournament } from './classifierPlan_CQJCQOt6.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const UpsertClassifierPlanSchema = z.object({
  playerId: z.string().min(1, "Wybierz zawodnika"),
  scheduledAt: z.string().datetime("Nieprawidłowa data/godzina"),
  endsAt: z.string().datetime("Nieprawidłowa data/godzina zakończenia"),
  classification: z.number().min(0, "Klasyfikacja nie może być ujemna").max(4, "Maksymalna klasyfikacja to 4").refine((v) => Number.isInteger(v * 2), "Klasyfikacja musi mieć krok 0.5").optional(),
  observation: z.boolean().optional()
});
const GET = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  try {
    const plan = await listClassifierPlanForTournament(id, auth.user.userId);
    return json(plan, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    return json({ error: "Nie udało się pobrać planu klasyfikatorów" }, 500);
  }
};
const POST = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Nieprawidłowy format JSON" }, 400);
  }
  const parsed = UpsertClassifierPlanSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  try {
    await createClassifierPlanEntryForTournament(id, parsed.data, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "TOURNAMENT_NOT_FOUND") return json({ error: "Nie znaleziono turnieju" }, 404);
      if (error.message === "PLAYER_NOT_IN_TOURNAMENT")
        return json({ error: "Wybrany zawodnik nie należy do turnieju" }, 400);
      if (error.message === "NO_CLASSIFIER_IN_TOURNAMENT")
        return json({ error: "Brak klasyfikatora w turnieju. Dodaj klasyfikatora do personelu." }, 400);
      if (error.message === "INVALID_SCHEDULED_AT") return json({ error: "Nieprawidłowa data/godzina" }, 400);
      if (error.message === "INVALID_CLASSIFICATION") return json({ error: "Nieprawidłowa klasyfikacja" }, 400);
      if (error.message === "INVALID_ENDS_AT") return json({ error: "Nieprawidłowa data/godzina zakończenia" }, 400);
      if (error.message === "TIME_CONFLICT")
        return json({ error: "W tym czasie jest już zaplanowane inne badanie" }, 400);
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
        return json(
          {
            error: "Ten zawodnik ma już badanie u tego klasyfikatora w turnieju. Zmień termin w edycji planu zamiast dodawać wpis ponownie."
          },
          409
        );
      }
    }
    return json({ error: "Nie udało się utworzyć wpisu w planie klasyfikatorów" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
