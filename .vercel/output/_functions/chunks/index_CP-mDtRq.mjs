import './zodPl_AymT4aL4.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { c as createTeam } from './teams_CrwPlLX0.mjs';
import { Prisma } from '@prisma/client';
import { L as LOOSE_URL_REGEX, P as POSTAL_CODE_REGEX, t as toTitleCase } from './validateInputs_c5edMn88.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const CreateTeamSchema = z.object({
  name: z.string().min(1, "Nazwa drużyny jest wymagana"),
  address: z.string().min(1, "Adres jest wymagany"),
  city: z.string().min(1, "Miasto jest wymagane"),
  postalCode: z.string().regex(POSTAL_CODE_REGEX, "Kod pocztowy musi być w formacie XX-XXX"),
  websiteUrl: z.union([z.string().refine((v) => LOOSE_URL_REGEX.test(v), "Nieprawidłowy adres URL"), z.literal("")]).optional(),
  contactFirstName: z.string().min(1, "Imię jest wymagane"),
  contactLastName: z.string().min(1, "Nazwisko jest wymagane"),
  contactEmail: z.string().email("Nieprawidłowy adres e-mail"),
  contactPhone: z.string().min(1, "Telefon jest wymagany"),
  seasonId: z.string().min(1, "Id sezonu jest wymagane"),
  coachId: z.string().optional(),
  refereeId: z.string().optional(),
  staff: z.array(z.object({ firstName: z.string().min(1), lastName: z.string().min(1) })).optional(),
  players: z.array(
    z.object({
      id: z.string().optional(),
      firstName: z.string().min(1, "Imię jest wymagane"),
      lastName: z.string().min(1, "Nazwisko jest wymagane"),
      classification: z.union([z.number(), z.string().transform((s) => s === "" ? void 0 : Number(s))]).optional(),
      number: z.union([z.number().int().positive(), z.string().transform((s) => s === "" ? void 0 : Number(s))]).optional()
    })
  ).optional()
}).transform((o) => ({
  ...o,
  name: toTitleCase(o.name),
  address: toTitleCase(o.address),
  city: toTitleCase(o.city),
  contactFirstName: toTitleCase(o.contactFirstName),
  contactLastName: toTitleCase(o.contactLastName),
  websiteUrl: o.websiteUrl?.trim() || void 0,
  coachId: o.coachId?.trim() || void 0,
  refereeId: o.refereeId?.trim() || void 0,
  staff: o.staff?.map((s) => ({
    firstName: toTitleCase(s.firstName),
    lastName: toTitleCase(s.lastName)
  })),
  players: o.players?.map((p) => ({
    id: p.id?.trim() || void 0,
    firstName: toTitleCase(p.firstName),
    lastName: toTitleCase(p.lastName),
    classification: typeof p.classification === "number" && !Number.isNaN(p.classification) ? p.classification : void 0,
    number: typeof p.number === "number" && !Number.isNaN(p.number) ? Math.floor(p.number) : void 0
  }))
}));
const GET = async ({ url, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const seasonId = url.searchParams.get("seasonId");
  const teams = await prisma.team.findMany({
    where: {
      season: { ownerUserId: auth.user.userId },
      ...seasonId ? { seasonId } : {}
    },
    orderBy: { createdAt: "desc" },
    include: { players: true, staff: true, coach: true }
  });
  return json(teams);
};
const POST = async ({ request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const body = await request.json().catch(() => null);
  const parsed = CreateTeamSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  const season = await prisma.season.findFirst({
    where: { id: parsed.data.seasonId, ownerUserId: auth.user.userId },
    select: { id: true }
  });
  if (!season) return json({ error: "Nie znaleziono sezonu" }, 404);
  try {
    const team = await createTeam(parsed.data);
    return json(team, 201);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return json({ error: "Drużyna o tej nazwie już istnieje w tym sezonie" }, 409);
      }
      if (error.code === "P2003") {
        return json({ error: "Nieprawidłowy identyfikator sezonu" }, 400);
      }
    }
    return json({ error: "Nie udało się utworzyć drużyny" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
