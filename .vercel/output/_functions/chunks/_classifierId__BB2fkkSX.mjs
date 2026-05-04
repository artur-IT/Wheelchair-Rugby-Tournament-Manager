import { j as json } from './api_BSHquwC3.mjs';
import { r as removeClassifierFromTournament } from './tournaments_CxglkLdT.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';

const DELETE = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id, classifierId } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  if (!classifierId) return json({ error: "Brak id klasyfikatora" }, 400);
  try {
    await removeClassifierFromTournament(id, classifierId, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    return json({ error: "Nie udało się usunąć klasyfikatora z turnieju" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
