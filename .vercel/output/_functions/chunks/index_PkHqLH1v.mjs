import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { e as ClubUpsertSchema } from './clubSchemas_BAMK3mYC.mjs';
import { d as clubInclude, p as parseRequestJson, a as parseWithSchema, m as mapPrismaError } from './clubApiHelpers_BLDV_q1g.mjs';
import { getSessionPrismaUser } from './sessionFromRequest_3u4HQXzv.mjs';

const GET = async ({ request }) => {
  const sessionUser = await getSessionPrismaUser(request);
  if (!sessionUser) return json({ error: "Brak aktywnej sesji użytkownika" }, 401);
  const clubs = await prisma.club.findMany({
    where: { ownerUserId: sessionUser.userId },
    include: clubInclude,
    orderBy: { createdAt: "desc" }
  });
  return json(clubs);
};
const POST = async ({ request }) => {
  const sessionUser = await getSessionPrismaUser(request);
  if (!sessionUser) return json({ error: "Brak aktywnej sesji użytkownika" }, 401);
  const bodyResult = await parseRequestJson(request);
  if (!bodyResult.ok) return bodyResult.response;
  const parsed = parseWithSchema(ClubUpsertSchema, { ...bodyResult.data, ownerUserId: sessionUser.userId });
  if (!parsed.ok) return parsed.response;
  try {
    const created = await prisma.club.create({
      data: parsed.data,
      include: clubInclude
    });
    return json(created, 201);
  } catch (error) {
    const mapped = mapPrismaError(error, {
      P2002: { message: "Klub o tej nazwie już istnieje dla tego użytkownika", status: 409 }
    });
    if (mapped) return mapped;
    return json({ error: "Nie udało się utworzyć klubu" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
