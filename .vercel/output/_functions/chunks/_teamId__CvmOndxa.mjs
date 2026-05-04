import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { f as removeTeamFromTournament, s as setTournamentTeamPlayers } from './tournaments_CxglkLdT.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const SetTournamentTeamPlayersSchema = z.object({
  playerIds: z.array(z.string().min(1))
});
const DELETE = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id, teamId } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  if (!teamId) return json({ error: "Brak id drużyny" }, 400);
  try {
    await removeTeamFromTournament(id, teamId, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    return json({ error: "Nie udało się usunąć drużyny z turnieju" }, 500);
  }
};
const PUT = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id, teamId } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  if (!teamId) return json({ error: "Brak id drużyny" }, 400);
  const body = await request.json().catch(() => null);
  const parsed = SetTournamentTeamPlayersSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  try {
    await setTournamentTeamPlayers(id, teamId, parsed.data.playerIds, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    if (error instanceof Error && error.message === "TEAM_NOT_IN_TOURNAMENT") {
      return json({ error: "Drużyna nie jest przypisana do turnieju" }, 400);
    }
    if (error instanceof Error && error.message === "PLAYER_NOT_IN_TEAM") {
      return json({ error: "Przynajmniej jeden zawodnik nie należy do tej drużyny" }, 400);
    }
    return json({ error: "Nie udało się zapisać składu drużyny dla turnieju" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
