import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { Prisma } from '@prisma/client';
import { t as toTitleCase, o as optionalMapLinkSchema, c as requiredAddressSchema, d as requiredPostalCodeSchema, e as requiredCitySchema, f as requiredHallNameSchema, g as optionalParkingSchema, h as requiredCateringSchema, i as requiredHotelNameSchema, j as requiredTournamentNameSchema } from './validateInputs_c5edMn88.mjs';
import { h as deleteTournament, i as getTournamentWithDetailsForOwner, j as updateTournamentWithDetails } from './tournaments_CxglkLdT.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

const TournamentPayloadSchema = z.object({
  name: requiredTournamentNameSchema,
  startDate: z.string().datetime(),
  endDate: z.string().datetime().optional().nullable(),
  hotel: requiredHotelNameSchema,
  hotelCity: requiredCitySchema,
  hotelZipCode: requiredPostalCodeSchema,
  hotelStreet: requiredAddressSchema,
  mapLink: optionalMapLinkSchema,
  catering: requiredCateringSchema,
  breakfastServingTime: z.string(),
  breakfastLocation: z.enum(["hotel", "hala"]),
  lunchServingTime: z.string(),
  lunchLocation: z.enum(["hotel", "hala"]),
  dinnerServingTime: z.string(),
  dinnerLocation: z.enum(["hotel", "hala"]),
  cateringNotes: z.string(),
  parking: optionalParkingSchema,
  hallName: requiredHallNameSchema,
  city: requiredCitySchema,
  zipCode: requiredPostalCodeSchema,
  street: requiredAddressSchema,
  hallMapLink: optionalMapLinkSchema
}).refine(
  (data) => {
    if (!data.endDate) return true;
    return new Date(data.endDate) > new Date(data.startDate);
  },
  {
    message: "Data zakończenia musi być później niż data rozpoczęcia",
    path: ["endDate"]
  }
);
const GET = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  const tournament = await getTournamentWithDetailsForOwner(id, auth.user.userId);
  if (!tournament) {
    return json({ error: "Nie znaleziono turnieju" }, 404);
  }
  return json(tournament);
};
const PUT = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Nieprawidłowy format JSON" }, 400);
  }
  const parsed = TournamentPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return json({ error: parsed.error.flatten() }, 400);
  }
  const payload = parsed.data;
  try {
    await updateTournamentWithDetails(
      id,
      {
        name: payload.name,
        startDate: new Date(payload.startDate),
        endDate: payload.endDate ? new Date(payload.endDate) : void 0,
        hotel: toTitleCase(payload.hotel),
        hotelCity: toTitleCase(payload.hotelCity),
        hotelZipCode: payload.hotelZipCode,
        hotelStreet: toTitleCase(payload.hotelStreet),
        mapLink: payload.mapLink ?? "",
        catering: payload.catering,
        breakfastServingTime: payload.breakfastServingTime,
        breakfastLocation: payload.breakfastLocation,
        lunchServingTime: payload.lunchServingTime,
        lunchLocation: payload.lunchLocation,
        dinnerServingTime: payload.dinnerServingTime,
        dinnerLocation: payload.dinnerLocation,
        cateringNotes: payload.cateringNotes,
        parking: payload.parking ?? "",
        hallName: payload.hallName,
        city: payload.city,
        zipCode: payload.zipCode,
        street: payload.street,
        hallMapLink: payload.hallMapLink ?? ""
      },
      auth.user.userId
    );
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return json({ error: "Turniej o tej nazwie już istnieje w tym sezonie" }, 409);
      }
    }
    return json({ error: "Nie udało się zapisać turnieju" }, 500);
  }
};
const DELETE = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const { id } = params;
  if (!id) return json({ error: "Brak id turnieju" }, 400);
  try {
    await deleteTournament(id, auth.user.userId);
    return json({ ok: true }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === "TOURNAMENT_NOT_FOUND") {
      return json({ error: "Nie znaleziono turnieju" }, 404);
    }
    return json({ error: "Nie udało się usunąć turnieju" }, 500);
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
