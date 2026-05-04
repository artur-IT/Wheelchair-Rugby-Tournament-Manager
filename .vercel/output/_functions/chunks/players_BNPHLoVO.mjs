import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { a as ClubPlayerSchema } from './clubSchemas_BAMK3mYC.mjs';
import { r as requiredId, b as ensureClubExists, c as ensureClubAccess, p as parseRequestJson, a as parseWithSchema, m as mapPrismaError } from './clubApiHelpers_BLDV_q1g.mjs';

const GET = async ({ params, request }) => {
  const clubIdResult = requiredId(params.id, "Brak id klubu");
  if (!clubIdResult.ok) return clubIdResult.response;
  const clubId = clubIdResult.data;
  const clubGuard = await ensureClubExists(clubId);
  if (!clubGuard.ok) return clubGuard.response;
  const authz = await ensureClubAccess(request, clubId);
  if (!authz.ok) return authz.response;
  const players = await prisma.clubPlayer.findMany({
    where: { clubId },
    include: { teams: { include: { team: true } } },
    orderBy: { createdAt: "desc" }
  });
  return json(players);
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
  const parsed = parseWithSchema(ClubPlayerSchema, { ...bodyResult.data, clubId });
  if (!parsed.ok) return parsed.response;
  try {
    const created = await prisma.clubPlayer.create({
      data: parsed.data,
      include: { teams: { include: { team: true } } }
    });
    return json(created, 201);
  } catch (error) {
    const mapped = mapPrismaError(error, {
      P2002: { message: "Numer zawodnika musi być unikalny w klubie", status: 409 }
    });
    if (mapped) return mapped;
    return json({ error: "Nie udało się utworzyć zawodnika" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
