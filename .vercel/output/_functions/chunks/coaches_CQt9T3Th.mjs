import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { C as ClubCoachRefereePersonSchema } from './clubSchemas_BAMK3mYC.mjs';
import { r as requiredId, b as ensureClubExists, c as ensureClubAccess, p as parseRequestJson, a as parseWithSchema } from './clubApiHelpers_BLDV_q1g.mjs';

const GET = async ({ params, request }) => {
  const clubIdResult = requiredId(params.id, "Brak id klubu");
  if (!clubIdResult.ok) return clubIdResult.response;
  const clubId = clubIdResult.data;
  const clubGuard = await ensureClubExists(clubId);
  if (!clubGuard.ok) return clubGuard.response;
  const authz = await ensureClubAccess(request, clubId);
  if (!authz.ok) return authz.response;
  const coaches = await prisma.clubCoach.findMany({
    where: { clubId },
    orderBy: { createdAt: "desc" }
  });
  return json(coaches);
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
  const parsed = parseWithSchema(ClubCoachRefereePersonSchema, { ...bodyResult.data, clubId });
  if (!parsed.ok) return parsed.response;
  const created = await prisma.clubCoach.create({ data: parsed.data });
  return json(created, 201);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
