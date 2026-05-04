import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { d as ClubVolunteerPersonSchema } from './clubSchemas_BAMK3mYC.mjs';
import { r as requiredId, e as ensureEntityAccess, p as parseRequestJson, a as parseWithSchema } from './clubApiHelpers_BLDV_q1g.mjs';

const GET = async ({ params, request }) => {
  const idResult = requiredId(params.id, "Brak id wolontariusza");
  if (!idResult.ok) return idResult.response;
  const id = idResult.data;
  const guard = await ensureEntityAccess(
    request,
    await prisma.clubVolunteer.findUnique({ where: { id } }),
    (item) => item.clubId,
    "Nie znaleziono wolontariusza"
  );
  if (!guard.ok) return guard.response;
  return json(guard.data);
};
const PUT = async ({ params, request }) => {
  const id = params.id;
  if (!id) return json({ error: "Brak id wolontariusza" }, 400);
  const guard = await ensureEntityAccess(
    request,
    await prisma.clubVolunteer.findUnique({ where: { id } }),
    (item) => item.clubId,
    "Nie znaleziono wolontariusza"
  );
  if (!guard.ok) return guard.response;
  const existing = guard.data;
  const bodyResult = await parseRequestJson(request);
  if (!bodyResult.ok) return bodyResult.response;
  const parsed = parseWithSchema(ClubVolunteerPersonSchema, { ...bodyResult.data, clubId: existing.clubId });
  if (!parsed.ok) return parsed.response;
  const updated = await prisma.clubVolunteer.update({ where: { id }, data: parsed.data });
  return json(updated);
};
const DELETE = async ({ params, request }) => {
  const idResult = requiredId(params.id, "Brak id wolontariusza");
  if (!idResult.ok) return idResult.response;
  const id = idResult.data;
  const guard = await ensureEntityAccess(
    request,
    await prisma.clubVolunteer.findUnique({ where: { id } }),
    (item) => item.clubId,
    "Nie znaleziono wolontariusza"
  );
  if (!guard.ok) return guard.response;
  await prisma.clubVolunteer.delete({ where: { id } });
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
