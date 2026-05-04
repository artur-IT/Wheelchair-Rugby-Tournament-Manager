import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import './zodPl_AymT4aL4.mjs';
import { b as ClubStaffPersonSchema } from './clubSchemas_BAMK3mYC.mjs';
import { r as requiredId, e as ensureEntityAccess, p as parseRequestJson, a as parseWithSchema } from './clubApiHelpers_BLDV_q1g.mjs';
import { z } from 'zod';

const ClubStaffRoleSchema = z.object({
  role: z.enum(["VOLUNTEER", "REFEREE", "OTHER"]).default("OTHER")
});
const GET = async ({ params, request }) => {
  const idResult = requiredId(params.id, "Brak id personelu");
  if (!idResult.ok) return idResult.response;
  const id = idResult.data;
  const guard = await ensureEntityAccess(
    request,
    await prisma.clubStaff.findUnique({ where: { id } }),
    (item) => item.clubId,
    "Nie znaleziono osoby"
  );
  if (!guard.ok) return guard.response;
  return json(guard.data);
};
const PUT = async ({ params, request }) => {
  const idResult = requiredId(params.id, "Brak id personelu");
  if (!idResult.ok) return idResult.response;
  const id = idResult.data;
  const guard = await ensureEntityAccess(
    request,
    await prisma.clubStaff.findUnique({ where: { id } }),
    (item) => item.clubId,
    "Nie znaleziono osoby"
  );
  if (!guard.ok) return guard.response;
  const existing = guard.data;
  const bodyResult = await parseRequestJson(request);
  if (!bodyResult.ok) return bodyResult.response;
  const personParsed = parseWithSchema(ClubStaffPersonSchema, { ...bodyResult.data, clubId: existing.clubId });
  if (!personParsed.ok) return personParsed.response;
  const roleParsed = parseWithSchema(ClubStaffRoleSchema, bodyResult.data);
  if (!roleParsed.ok) return roleParsed.response;
  const updated = await prisma.clubStaff.update({
    where: { id },
    data: { ...personParsed.data, role: roleParsed.data.role }
  });
  return json(updated);
};
const DELETE = async ({ params, request }) => {
  const idResult = requiredId(params.id, "Brak id personelu");
  if (!idResult.ok) return idResult.response;
  const id = idResult.data;
  const guard = await ensureEntityAccess(
    request,
    await prisma.clubStaff.findUnique({ where: { id } }),
    (item) => item.clubId,
    "Nie znaleziono osoby"
  );
  if (!guard.ok) return guard.response;
  await prisma.clubStaff.delete({ where: { id } });
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
