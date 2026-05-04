import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { e as ClubUpsertSchema } from './clubSchemas_BAMK3mYC.mjs';
import { r as requiredId, c as ensureClubAccess, g as getClubById, p as parseRequestJson, a as parseWithSchema, d as clubInclude, m as mapPrismaError } from './clubApiHelpers_BLDV_q1g.mjs';

const GET = async ({ params, request }) => {
  const idResult = requiredId(params.id, "Brak id klubu");
  if (!idResult.ok) return idResult.response;
  const id = idResult.data;
  const authz = await ensureClubAccess(request, id);
  if (!authz.ok) return authz.response;
  const club = await getClubById(id);
  if (!club) return json({ error: "Nie znaleziono klubu" }, 404);
  return json(club);
};
const PUT = async ({ params, request }) => {
  const idResult = requiredId(params.id, "Brak id klubu");
  if (!idResult.ok) return idResult.response;
  const id = idResult.data;
  const authz = await ensureClubAccess(request, id);
  if (!authz.ok) return authz.response;
  const existing = await getClubById(id);
  if (!existing) return json({ error: "Nie znaleziono klubu" }, 404);
  const bodyResult = await parseRequestJson(request);
  if (!bodyResult.ok) return bodyResult.response;
  const parsed = parseWithSchema(ClubUpsertSchema, { ...bodyResult.data, ownerUserId: existing.ownerUserId });
  if (!parsed.ok) return parsed.response;
  try {
    const updated = await prisma.club.update({
      where: { id },
      data: parsed.data,
      include: clubInclude
    });
    return json(updated);
  } catch (error) {
    const mapped = mapPrismaError(error, {
      P2002: { message: "Klub o tej nazwie już istnieje dla tego użytkownika", status: 409 }
    });
    if (mapped) return mapped;
    return json({ error: "Nie udało się zaktualizować klubu" }, 500);
  }
};
const DELETE = async ({ params, request }) => {
  const idResult = requiredId(params.id, "Brak id klubu");
  if (!idResult.ok) return idResult.response;
  const id = idResult.data;
  const authz = await ensureClubAccess(request, id);
  if (!authz.ok) return authz.response;
  const existing = await getClubById(id);
  if (!existing) return json({ error: "Nie znaleziono klubu" }, 404);
  try {
    await prisma.club.delete({ where: { id } });
    return json({ success: true });
  } catch {
    return json({ error: "Nie udało się usunąć klubu" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
