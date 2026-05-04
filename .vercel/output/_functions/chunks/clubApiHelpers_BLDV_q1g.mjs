import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import UserRoles from 'supertokens-node/recipe/userroles';
import { getSessionPrismaUser } from './sessionFromRequest_3u4HQXzv.mjs';

const clubInclude = {
  teams: { include: { coach: true, players: { include: { player: true } } } },
  players: true,
  coaches: true,
  volunteers: true,
  referees: true,
  staffMembers: true
};
const getClubById = async (id) => prisma.club.findUnique({ where: { id }, include: clubInclude });

const forbidden$1 = () => ({ ok: false, response: json({ error: "Brak uprawnień" }, 403) });
async function hasRole(identity, role) {
  const rolesResult = await UserRoles.getRolesForUser(identity.tenantId, identity.userId);
  return rolesResult.status === "OK" && rolesResult.roles.includes(role);
}
async function requireRole(identity, role) {
  if (await hasRole(identity, role)) {
    return { ok: true, identity };
  }
  return forbidden$1();
}

const unauthorized = () => ({ ok: false, response: json({ error: "Brak autoryzacji" }, 401) });
const forbidden = () => ({ ok: false, response: json({ error: "Brak uprawnień" }, 403) });
async function getRequesterIdentity(request) {
  const sessionUser = await getSessionPrismaUser(request);
  if (!sessionUser) {
    return unauthorized();
  }
  return { ok: true, identity: { tenantId: sessionUser.tenantId, userId: sessionUser.userId } };
}
async function authorizeClubAccess(request, resourceClubId) {
  const auth = await getRequesterIdentity(request);
  if (!auth.ok) return auth;
  const { userId } = auth.identity;
  const adminAuth = await requireRole(auth.identity, "ADMIN");
  if (adminAuth.ok) return auth;
  const club = await prisma.club.findUnique({
    where: { id: resourceClubId },
    select: { ownerUserId: true }
  });
  if (club?.ownerUserId === userId) return auth;
  return forbidden();
}

const requiredId = (value, label) => value ? { ok: true, data: value } : { ok: false, response: json({ error: label }, 400) };
const parseRequestJson = async (request) => {
  try {
    const body = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return { ok: false, response: json({ error: "Nieprawidłowy format JSON" }, 400) };
    }
    return { ok: true, data: body };
  } catch {
    return { ok: false, response: json({ error: "Nieprawidłowy format JSON" }, 400) };
  }
};
const parseWithSchema = (schema, payload) => {
  const parsed = schema.safeParse(payload);
  return parsed.success ? { ok: true, data: parsed.data } : { ok: false, response: json({ error: parsed.error.flatten() }, 400) };
};
const ensureClubExists = async (clubId) => {
  const club = await getClubById(clubId);
  return club ? { ok: true, data: true } : { ok: false, response: json({ error: "Nie znaleziono klubu" }, 404) };
};
const ensureClubAccess = async (request, clubId) => {
  const authz = await authorizeClubAccess(request, clubId);
  if (authz.ok === false) {
    return { ok: false, response: authz.response };
  }
  return { ok: true, data: true };
};
const ensureEntityAccess = async (request, entity, getClubId, notFoundMessage) => {
  if (!entity) return { ok: false, response: json({ error: notFoundMessage }, 404) };
  const authz = await ensureClubAccess(request, getClubId(entity));
  if (!authz.ok) return { ok: false, response: authz.response };
  return { ok: true, data: entity };
};
const mapPrismaError = (error, map) => {
  const code = error && typeof error === "object" && "code" in error && typeof error.code === "string" ? error.code : null;
  if (!code) return null;
  const hit = map[code];
  return hit ? json({ error: hit.message }, hit.status) : null;
};

export { parseWithSchema as a, ensureClubExists as b, ensureClubAccess as c, clubInclude as d, ensureEntityAccess as e, getClubById as g, mapPrismaError as m, parseRequestJson as p, requiredId as r };
