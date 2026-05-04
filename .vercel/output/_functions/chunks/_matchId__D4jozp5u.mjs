import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { d as deleteMatchForTournament, u as updateMatchForTournament } from './tournaments_CxglkLdT.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const UpdateMatchSchema = z.object({
  teamAId: z.string().min(1, "Wybierz drużynę A"),
  teamBId: z.string().min(1, "Wybierz drużynę B"),
  scheduledAt: z.string().datetime("Nieprawidłowa data/godzina"),
  court: z.string().min(1).optional(),
  jerseyInfo: z.string().min(1).optional(),
  scoreA: z.number().int().min(0).optional(),
  scoreB: z.number().int().min(0).optional()
}).refine((data) => data.teamAId !== data.teamBId, {
  message: "Drużyny muszą być różne",
  path: ["teamBId"]
});
const PUT = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id, matchId } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  if (!matchId) return json({ error: "Brak id meczu" }, 400);
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Nieprawidłowy format JSON" }, 400);
  }
  const parsed = UpdateMatchSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  try {
    await updateMatchForTournament(id, matchId, parsed.data, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    if (error instanceof Error && error.message === "MATCH_NOT_FOUND") {
      return json({ error: "Nie znaleziono meczu" }, 404);
    }
    if (error instanceof Error && error.message === "TEAM_NOT_IN_TOURNAMENT") {
      return json({ error: "Wybrane drużyny nie należą do turnieju" }, 400);
    }
    if (error instanceof Error && error.message === "COURT_TIME_CONFLICT") {
      return json({ error: "Na tym boisku jest już mecz w tym czasie. Wybierz inną godzinę startu." }, 400);
    }
    return json({ error: "Nie udało się zaktualizować meczu" }, 500);
  }
};
const DELETE = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id, matchId } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  if (!matchId) return json({ error: "Brak id meczu" }, 400);
  try {
    await deleteMatchForTournament(id, matchId, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    if (error instanceof Error && error.message === "MATCH_NOT_FOUND") {
      return json({ error: "Nie znaleziono meczu" }, 404);
    }
    return json({ error: "Nie udało się usunąć meczu" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
