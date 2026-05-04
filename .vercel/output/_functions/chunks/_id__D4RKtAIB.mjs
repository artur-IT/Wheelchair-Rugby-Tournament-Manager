import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { g as getTeamByIdForOwner, u as updateTeam } from './teams_CrwPlLX0.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { Prisma } from '@prisma/client';
import { L as LOOSE_URL_REGEX, P as POSTAL_CODE_REGEX, t as toTitleCase } from './validateInputs_c5edMn88.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const UpdateTeamSchema = z.object({
  name: z.string().min(1, "Nazwa drużyny jest wymagana"),
  address: z.string().min(1, "Adres jest wymagany").optional(),
  city: z.string().min(1, "Miasto jest wymagane").optional(),
  postalCode: z.string().regex(POSTAL_CODE_REGEX, "Kod pocztowy musi być w formacie XX-XXX").optional(),
  websiteUrl: z.union([z.string().refine((v) => LOOSE_URL_REGEX.test(v), "Nieprawidłowy adres URL"), z.literal("")]).optional(),
  contactFirstName: z.string().min(1, "Imię jest wymagane").optional(),
  contactLastName: z.string().min(1, "Nazwisko jest wymagane").optional(),
  contactEmail: z.string().email("Nieprawidłowy adres e-mail").optional(),
  contactPhone: z.string().min(1, "Telefon jest wymagany").optional(),
  seasonId: z.string().optional(),
  coachId: z.string().optional(),
  refereeId: z.string().optional(),
  staff: z.array(z.object({ firstName: z.string().min(1), lastName: z.string().min(1) })).optional(),
  players: z.array(
    z.object({
      id: z.string().optional(),
      firstName: z.string().min(1, "Imię jest wymagane"),
      lastName: z.string().min(1, "Nazwisko jest wymagane"),
      classification: z.union([z.number(), z.string().transform((s) => s === "" ? void 0 : Number(s))]).optional(),
      number: z.union([z.number().int().positive(), z.string().transform((s) => s === "" ? void 0 : Number(s))]).refine((val) => val === void 0 || Number.isInteger(val) && val > 0, {
        message: "Numer musi być dodatnią liczbą całkowitą"
      }).optional()
    })
  )
}).transform((o) => ({
  ...o,
  name: toTitleCase(o.name),
  address: o.address ? toTitleCase(o.address) : void 0,
  city: o.city ? toTitleCase(o.city) : void 0,
  contactFirstName: o.contactFirstName ? toTitleCase(o.contactFirstName) : void 0,
  contactLastName: o.contactLastName ? toTitleCase(o.contactLastName) : void 0,
  websiteUrl: o.websiteUrl?.trim() || void 0,
  coachId: o.coachId?.trim() || void 0,
  refereeId: o.refereeId?.trim() || void 0,
  staff: o.staff?.map((s) => ({
    firstName: toTitleCase(s.firstName),
    lastName: toTitleCase(s.lastName)
  })),
  players: o.players.map((p) => ({
    id: p.id?.trim() || void 0,
    firstName: toTitleCase(p.firstName),
    lastName: toTitleCase(p.lastName),
    classification: typeof p.classification === "number" && !Number.isNaN(p.classification) ? p.classification : void 0,
    number: typeof p.number === "number" && !Number.isNaN(p.number) ? Math.floor(p.number) : void 0
  }))
}));
const GET = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const id = params?.id;
  if (!id) return json({ error: "Brak id drużyny" }, 400);
  const team = await getTeamByIdForOwner(id, auth.user.userId);
  if (!team) return json({ error: "Nie znaleziono drużyny" }, 404);
  return json(team);
};
const PUT = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const id = params?.id;
  if (!id) return json({ error: "Brak id drużyny" }, 400);
  const existingTeam = await getTeamByIdForOwner(id, auth.user.userId);
  if (!existingTeam) return json({ error: "Nie znaleziono drużyny" }, 404);
  const body = await request.json().catch(() => null);
  const parsed = UpdateTeamSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  try {
    const team = await updateTeam(id, auth.user.userId, parsed.data);
    return json(team);
  } catch (error) {
    if (error instanceof Error && error.message === "SEASON_NOT_ACCESSIBLE") {
      return json({ error: "Nie znaleziono sezonu" }, 404);
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const target = Array.isArray(error.meta?.target) ? error.meta.target.join(",") : String(error.meta?.target ?? "");
        if (target.includes("teamId") && target.includes("number")) {
          return json({ error: "Numer zawodnika musi być unikalny w drużynie" }, 409);
        }
        return json({ error: "Drużyna o tej nazwie już istnieje w tym sezonie" }, 409);
      }
    }
    return json({ error: "Nie udało się zaktualizować drużyny" }, 500);
  }
};
const DELETE = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const id = params?.id;
  if (!id) return json({ error: "Brak id drużyny" }, 400);
  const existingTeam = await getTeamByIdForOwner(id, auth.user.userId);
  if (!existingTeam) return json({ error: "Nie znaleziono drużyny" }, 404);
  try {
    await prisma.team.delete({ where: { id } });
    return json({ success: true });
  } catch {
    return json({ error: "Nie udało się usunąć drużyny" }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
