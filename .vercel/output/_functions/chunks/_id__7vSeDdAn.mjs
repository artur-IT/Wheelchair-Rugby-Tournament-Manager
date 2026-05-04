import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { C as ClubCoachRefereePersonSchema } from './clubSchemas_BAMK3mYC.mjs';
import { r as requiredId, e as ensureEntityAccess, p as parseRequestJson, a as parseWithSchema } from './clubApiHelpers_BLDV_q1g.mjs';

const GET = async ({ params, request }) => {
  const idResult = requiredId(params.id, "Brak id sędziego");
  if (!idResult.ok) return idResult.response;
  const id = idResult.data;
  const guard = await ensureEntityAccess(
    request,
    await prisma.clubReferee.findUnique({ where: { id } }),
    (item) => item.clubId,
    "Nie znaleziono sędziego"
  );
  if (!guard.ok) return guard.response;
  return json(guard.data);
};
const PUT = async ({ params, request }) => {
  const id = params.id;
  if (!id) return json({ error: "Brak id sędziego" }, 400);
  const guard = await ensureEntityAccess(
    request,
    await prisma.clubReferee.findUnique({ where: { id } }),
    (item) => item.clubId,
    "Nie znaleziono sędziego"
  );
  if (!guard.ok) return guard.response;
  const existing = guard.data;
  const bodyResult = await parseRequestJson(request);
  if (!bodyResult.ok) return bodyResult.response;
  const parsed = parseWithSchema(ClubCoachRefereePersonSchema, { ...bodyResult.data, clubId: existing.clubId });
  if (!parsed.ok) return parsed.response;
  const updated = await prisma.clubReferee.update({ where: { id }, data: parsed.data });
  return json(updated);
};
const DELETE = async ({ params, request }) => {
  const idResult = requiredId(params.id, "Brak id sędziego");
  if (!idResult.ok) return idResult.response;
  const id = idResult.data;
  const guard = await ensureEntityAccess(
    request,
    await prisma.clubReferee.findUnique({ where: { id } }),
    (item) => item.clubId,
    "Nie znaleziono sędziego"
  );
  if (!guard.ok) return guard.response;
  await prisma.clubReferee.delete({ where: { id } });
  return json({ success: true });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
