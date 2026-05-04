import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { a as addClassifiersToTournament } from './tournaments_CxglkLdT.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const AddClassifiersSchema = z.object({
  classifierIds: z.array(z.string().min(1)).min(1, "Wybierz przynajmniej jednego klasyfikatora")
});
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
