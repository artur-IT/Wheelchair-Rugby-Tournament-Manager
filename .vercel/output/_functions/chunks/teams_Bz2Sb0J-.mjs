import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { g as addTeamsToTournament } from './tournaments_CxglkLdT.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const AddTeamsSchema = z.object({
  teamIds: z.array(z.string().min(1)).min(1, "Wybierz przynajmniej jedną drużynę")
});
const POST = async ({ params, request }) => {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
