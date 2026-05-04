import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { c as ClubTeamSchema } from './clubSchemas_BAMK3mYC.mjs';
import { r as requiredId, b as ensureClubExists, c as ensureClubAccess, p as parseRequestJson, a as parseWithSchema, m as mapPrismaError } from './clubApiHelpers_BLDV_q1g.mjs';

const GET = async ({ params, request }) => {
  const clubIdResult = requiredId(params.id, "Brak id klubu");
  if (!clubIdResult.ok) return clubIdResult.response;
  const clubId = clubIdResult.data;
  const clubGuard = await ensureClubExists(clubId);
  if (!clubGuard.ok) return clubGuard.response;
  const authz = await ensureClubAccess(request, clubId);
  if (!authz.ok) return authz.response;
  const teams = await prisma.clubTeam.findMany({
    where: { clubId },
    include: { coach: true, players: { include: { player: true } } },
    orderBy: { createdAt: "desc" }
  });
  return json(teams);
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
  const parsed = parseWithSchema(ClubTeamSchema, { ...bodyResult.data, clubId });
  if (!parsed.ok) return parsed.response;
  try {
    const { playerIds, ...teamData } = parsed.data;
    const created = await prisma.$transaction(async (tx) => {
      const team = await tx.clubTeam.create({ data: teamData });
      if (playerIds && playerIds.length > 0) {
        await tx.clubTeamPlayer.createMany({
          data: playerIds.map((playerId) => ({ teamId: team.id, playerId })),
          skipDuplicates: true
        });
      }
      return tx.clubTeam.findUniqueOrThrow({
        where: { id: team.id },
        include: { coach: true, players: { include: { player: true } } }
      });
    });
    return json(created, 201);
  } catch (error) {
    const mapped = mapPrismaError(error, {
      P2002: { message: "Drużyna o tej nazwie już istnieje w klubie", status: 409 },
      P2003: { message: "Nieprawidłowy trener lub zawodnik", status: 400 }
    });
    if (mapped) return mapped;
    return json({ error: "Nie udało się utworzyć drużyny klubu" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
