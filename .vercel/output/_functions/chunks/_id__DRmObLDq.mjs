import './zodPl_AymT4aL4.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { Prisma } from '@prisma/client';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

function isNotFound(e) {
  return typeof e === "object" && e !== null && "code" in e && e.code === "P2025";
}
const UpdateSeasonSchema = z.object({
  name: z.string().min(1).optional(),
  year: z.number().int().optional(),
  description: z.string().optional()
});
const GET = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const id = params.id;
  if (!id) return json({ error: "Brak id sezonu" }, 400);
  const season = await prisma.season.findFirst({
    where: { id, ownerUserId: auth.user.userId }
  });
  if (!season) return json({ error: "Nie znaleziono sezonu" }, 404);
  return json(season);
};
const PATCH = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const id = params.id;
  if (!id) return json({ error: "Brak id sezonu" }, 400);
  const body = await request.json().catch(() => null);
  const parsed = UpdateSeasonSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  const existing = await prisma.season.findFirst({
    where: { id, ownerUserId: auth.user.userId },
    select: { id: true }
  });
  if (!existing) return json({ error: "Nie znaleziono sezonu" }, 404);
  try {
    const season = await prisma.season.update({
      where: { id },
      data: parsed.data
    });
    return json(season);
  } catch (e) {
    if (isNotFound(e)) return json({ error: "Nie znaleziono sezonu" }, 404);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") return json({ error: "Sezon dla tego roku już istnieje na Twoim koncie" }, 409);
    }
    throw e;
  }
};
const DELETE = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const id = params.id;
  if (!id) return json({ error: "Brak id sezonu" }, 400);
  const existing = await prisma.season.findFirst({
    where: { id, ownerUserId: auth.user.userId },
    select: { id: true }
  });
  if (!existing) return json({ error: "Nie znaleziono sezonu" }, 404);
  try {
    await prisma.season.delete({ where: { id } });
    return new Response(null, { status: 204 });
  } catch (e) {
    if (isNotFound(e)) return json({ error: "Nie znaleziono sezonu" }, 404);
    throw e;
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
