import './zodPl_AymT4aL4.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { Prisma } from '@prisma/client';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const CreateSeasonSchema = z.object({
  name: z.string().min(1),
  year: z.number().int(),
  description: z.string().optional()
});
const GET = async ({ request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const seasons = await prisma.season.findMany({
    where: { ownerUserId: auth.user.userId },
    orderBy: { createdAt: "desc" }
  });
  return json(seasons);
};
const POST = async ({ request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const body = await request.json().catch(() => null);
  const parsed = CreateSeasonSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  try {
    const season = await prisma.season.create({
      data: { ...parsed.data, ownerUserId: auth.user.userId }
    });
    return json(season, 201);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return json({ error: "Sezon dla tego roku już istnieje na Twoim koncie" }, 409);
      }
    }
    return json({ error: "Nie udało się utworzyć sezonu" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
