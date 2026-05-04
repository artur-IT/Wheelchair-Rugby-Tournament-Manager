import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { Prisma } from '@prisma/client';
import { s as sanitizePhone, r as requiredPhoneSchema, t as toTitleCase } from './validateInputs_c5edMn88.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

async function createCoach(data) {
  return prisma.coach.create({ data });
}

const CreateCoachSchema = z.object({
  firstName: z.string().min(1, "Imię jest wymagane"),
  lastName: z.string().min(1, "Nazwisko jest wymagane"),
  email: z.union([z.string().email("Nieprawidłowy adres e-mail"), z.literal(""), z.null()]).optional(),
  phone: z.string().transform((v) => sanitizePhone(v)).pipe(requiredPhoneSchema),
  seasonId: z.string().min(1, "Id sezonu jest wymagane")
}).transform((o) => ({
  firstName: toTitleCase(o.firstName),
  lastName: toTitleCase(o.lastName),
  email: (typeof o.email === "string" ? o.email : "")?.trim() || void 0,
  phone: o.phone,
  seasonId: o.seasonId
}));
const GET = async ({ url, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const seasonId = url.searchParams.get("seasonId");
  try {
    const coaches = await prisma.coach.findMany({
      where: {
        season: { ownerUserId: auth.user.userId },
        ...seasonId ? { seasonId } : {}
      },
      orderBy: { createdAt: "desc" }
    });
    return json(coaches);
  } catch (error) {
    return json({ error: `Nie udało się pobrać trenerów: ${error}` }, 500);
  }
};
const POST = async ({ request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const body = await request.json().catch(() => null);
  const parsed = CreateCoachSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  const season = await prisma.season.findFirst({
    where: { id: parsed.data.seasonId, ownerUserId: auth.user.userId },
    select: { id: true }
  });
  if (!season) return json({ error: "Nie znaleziono sezonu" }, 404);
  try {
    const coach = await createCoach(parsed.data);
    return json(coach, 201);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return json({ error: "Trener już istnieje (numer telefonu jest zajęty)" }, 409);
      }
      if (error.code === "P2003") {
        return json({ error: "Nieprawidłowy identyfikator sezonu" }, 400);
      }
    }
    return json({ error: "Nie udało się utworzyć trenera" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
