import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import './zodPl_AymT4aL4.mjs';
import { b as ClubStaffPersonSchema } from './clubSchemas_BAMK3mYC.mjs';
import { r as requiredId, b as ensureClubExists, c as ensureClubAccess, p as parseRequestJson, a as parseWithSchema } from './clubApiHelpers_BLDV_q1g.mjs';
import { z } from 'zod';

const ClubStaffRoleSchema = z.object({
  role: z.enum(["VOLUNTEER", "REFEREE", "OTHER"]).default("OTHER")
});
const GET = async ({ params, request }) => {
  const clubIdResult = requiredId(params.id, "Brak id klubu");
  if (!clubIdResult.ok) return clubIdResult.response;
  const clubId = clubIdResult.data;
  const clubGuard = await ensureClubExists(clubId);
  if (!clubGuard.ok) return clubGuard.response;
  const authz = await ensureClubAccess(request, clubId);
  if (!authz.ok) return authz.response;
  const staff = await prisma.clubStaff.findMany({
    where: { clubId },
    orderBy: { createdAt: "desc" }
  });
  return json(staff);
};
const POST = async ({ params, request }) => {
  const clubIdResult = requiredId(params.id, "Brak id klubu");
  if (!clubIdResult.ok) return clubIdResult.response;
  const clubId = clubIdResult.data;
  const clubGuard = await ensureClubExists(clubId);
  if (!clubGuard.ok) return clubGuard.response;
  const authz = await ensureClubAccess(request, clubId);
  if (!authz.ok) return authz.response;
  const bodyResult = await parseRequestJson(request);
  if (!bodyResult.ok) return bodyResult.response;
  const personParsed = parseWithSchema(ClubStaffPersonSchema, { ...bodyResult.data, clubId });
  if (!personParsed.ok) return personParsed.response;
  const roleParsed = parseWithSchema(ClubStaffRoleSchema, bodyResult.data);
  if (!roleParsed.ok) return roleParsed.response;
  const created = await prisma.clubStaff.create({
    data: { ...personParsed.data, role: roleParsed.data.role }
  });
  return json(created, 201);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
