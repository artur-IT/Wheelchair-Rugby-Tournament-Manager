import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { l as listRefereePlanForTournament, c as createRefereePlanMatchForTournament } from './refereePlan_C-rSzYcD.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const UpsertRefereePlanMatchSchema = z.object({
  teamAId: z.string().min(1, "Wybierz drużynę A"),
  teamBId: z.string().min(1, "Wybierz drużynę B"),
  scheduledAt: z.string().datetime("Nieprawidłowa data/godzina"),
  court: z.string().min(1).optional(),
  referee1Id: z.string().min(1).optional(),
  referee2Id: z.string().min(1).optional(),
  tablePenaltyId: z.string().min(1).optional(),
  tableClockId: z.string().min(1).optional()
}).refine((data) => data.teamAId !== data.teamBId, {
  message: "Drużyny muszą być różne",
  path: ["teamBId"]
});
const GET = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  try {
    const plan = await listRefereePlanForTournament(id, auth.user.userId);
    return json(plan, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    return json({ error: "Nie udało się pobrać planu sędziów" }, 500);
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
  const parsed = UpsertRefereePlanMatchSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  try {
    await createRefereePlanMatchForTournament(id, parsed.data, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "TOURNAMENT_NOT_FOUND") return json({ error: "Nie znaleziono turnieju" }, 404);
      if (error.message === "TEAM_NOT_IN_TOURNAMENT")
        return json({ error: "Wybrane drużyny nie należą do turnieju" }, 400);
      if (error.message === "REFEREE_NOT_FOUND") return json({ error: "Nie znaleziono sędziego" }, 400);
      if (error.message === "REFEREE_NOT_IN_TOURNAMENT")
        return json({ error: "Wybrany sędzia nie należy do turnieju" }, 400);
      if (error.message === "DUPLICATE_REFEREE_IN_MATCH")
        return json({ error: "Ten sam sędzia nie może pełnić kilku ról w jednym meczu" }, 400);
    }
    return json({ error: "Nie udało się utworzyć wpisu w planie sędziów" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
