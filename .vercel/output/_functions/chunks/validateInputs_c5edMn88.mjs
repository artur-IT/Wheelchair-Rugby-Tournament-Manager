import './zodPl_AymT4aL4.mjs';
import { z } from 'zod';

function toTitleCase(value) {
  return value.trim().toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function normalizeClubPlayerStreetForDb(raw) {
  const t = raw.trim();
  if (!t) return null;
  const withoutUl = t.replace(/^ul\.?\s*/i, "").trim();
  if (!withoutUl) return null;
  return `ul. ${toTitleCase(withoutUl)}`;
}
function sanitizePhone(value) {
  return value.replace(/\D/g, "").slice(0, 9);
}
const optionalPhoneSchema = z.string().refine((v) => !v || v.length === 9, { message: "Numer telefonu musi zawierać dokładnie 9 cyfr" }).optional();
const requiredPhoneSchema = z.string().min(1, "Telefon jest wymagany").length(9, "Numer telefonu musi zawierać dokładnie 9 cyfr");
const MAX_SHORT_TEXT = 50;
const requiredFirstNameSchema = z.string().min(1, "Imię jest wymagane").max(MAX_SHORT_TEXT, `Imię nie może przekraczać ${MAX_SHORT_TEXT} znaków`);
const requiredLastNameSchema = z.string().min(1, "Nazwisko jest wymagane").max(MAX_SHORT_TEXT, `Nazwisko nie może przekraczać ${MAX_SHORT_TEXT} znaków`);
const requiredEmailSchema = z.string().email("Nieprawidłowy adres e-mail").max(MAX_SHORT_TEXT, `E-mail nie może przekraczać ${MAX_SHORT_TEXT} znaków`);
const optionalFirstNameSchema = z.string().max(MAX_SHORT_TEXT, `Imię nie może przekraczać ${MAX_SHORT_TEXT} znaków`).optional();
const optionalLastNameSchema = z.string().max(MAX_SHORT_TEXT, `Nazwisko nie może przekraczać ${MAX_SHORT_TEXT} znaków`).optional();
const optionalEmailSchema = z.union([
  z.string().email("Nieprawidłowy adres e-mail").max(MAX_SHORT_TEXT, `E-mail nie może przekraczać ${MAX_SHORT_TEXT} znaków`),
  z.literal("")
]).optional();
const MAX_LONG_TEXT = 150;
const requiredTeamNameSchema = z.string().min(1, "Nazwa drużyny jest wymagana").max(MAX_LONG_TEXT, `Nazwa drużyny nie może przekraczać ${MAX_LONG_TEXT} znaków`);
const requiredAddressSchema = z.string().min(1, "Adres jest wymagany").max(MAX_LONG_TEXT, `Adres nie może przekraczać ${MAX_LONG_TEXT} znaków`);
const requiredCitySchema = z.string().min(1, "Miasto jest wymagane").max(MAX_LONG_TEXT, `Miasto nie może przekraczać ${MAX_LONG_TEXT} znaków`);
const POSTAL_CODE_REGEX = /^\d{2}-\d{3}$/;
const requiredPostalCodeSchema = z.string().min(1, "Kod pocztowy jest wymagany").regex(POSTAL_CODE_REGEX, "Kod pocztowy musi być w formacie XX-XXX");
const requiredSeasonNameSchema = z.string().min(1, "Nazwa sezonu jest wymagana").max(MAX_LONG_TEXT, `Nazwa sezonu nie może przekraczać ${MAX_LONG_TEXT} znaków`);
const optionalParkingSchema = z.string().max(MAX_LONG_TEXT, `Parking nie może przekraczać ${MAX_LONG_TEXT} znaków`).optional();
const playerClassificationSchema = z.number().min(0.5, "Klasyfikacja: 0.5–3.5").max(3.5, "Klasyfikacja: 0.5–3.5").refine((v) => v % 0.5 === 0, "Klasyfikacja: 0.5–3.5");
const playerNumberSchema = z.number().int("Numer musi być liczbą całkowitą").min(1, "Numer: 1–99").max(99, "Numer: 1–99");
const LOOSE_URL_REGEX = /^(https?:\/\/)?([\w-]+\.)+[\w]{2,}(\/\S*)?$/;
const optionalWebsiteUrlSchema = z.union([
  z.literal(""),
  z.string().max(MAX_LONG_TEXT, `URL nie może przekraczać ${MAX_LONG_TEXT} znaków`).refine((v) => LOOSE_URL_REGEX.test(v), "Nieprawidłowy adres URL")
]).optional();
const requiredTournamentNameSchema = z.string().min(1, "Nazwa turnieju jest wymagana").min(3, "Nazwa musi mieć co najmniej 3 znaki").max(MAX_LONG_TEXT, `Nazwa turnieju nie może przekraczać ${MAX_LONG_TEXT} znaków`);
const requiredHotelNameSchema = z.string().min(1, "Nazwa hotelu jest wymagana").min(3, "Nazwa hotelu musi mieć co najmniej 3 znaki").max(MAX_LONG_TEXT, `Nazwa hotelu nie może przekraczać ${MAX_LONG_TEXT} znaków`);
const requiredCateringSchema = z.string().min(1, "Wyżywienie jest wymagane").min(3, "Opis wyżywienia musi mieć co najmniej 3 znaki").max(MAX_LONG_TEXT, `Wyżywienie nie może przekraczać ${MAX_LONG_TEXT} znaków`);
const mealLocationSchema = z.enum(["hotel", "hala"], {
  message: "Wybierz miejsce posiłku"
});
const requiredHallNameSchema = z.string().min(1, "Nazwa hali jest wymagana").min(3, "Nazwa hali musi mieć co najmniej 3 znaki").max(MAX_LONG_TEXT, `Nazwa hali nie może przekraczać ${MAX_LONG_TEXT} znaków`);
const optionalMapLinkSchema = z.union([
  z.literal(""),
  z.string().max(MAX_LONG_TEXT, `Link do mapy nie może przekraczać ${MAX_LONG_TEXT} znaków`).refine((v) => LOOSE_URL_REGEX.test(v), "Link do mapy musi być prawidłowym URL-em")
]).optional();
z.object({
  name: requiredTournamentNameSchema,
  startDate: z.date().refine((date) => date instanceof Date && !isNaN(date.getTime()), { message: "Data rozpoczęcia jest wymagana" }),
  endDate: z.date().refine((date) => date instanceof Date && !isNaN(date.getTime()), { message: "Data zakończenia jest wymagana" }),
  hotel: requiredHotelNameSchema,
  hotelCity: requiredCitySchema,
  hotelZipCode: requiredPostalCodeSchema,
  hotelStreet: requiredAddressSchema,
  mapLink: optionalMapLinkSchema,
  city: requiredCitySchema,
  zipCode: requiredPostalCodeSchema,
  street: requiredAddressSchema,
  catering: requiredCateringSchema,
  breakfastServingTime: z.string().min(1, "Podaj przedział godzinowy").max(MAX_LONG_TEXT, `Przedział godzinowy nie może przekraczać ${MAX_LONG_TEXT} znaków`),
  breakfastLocation: mealLocationSchema,
  lunchServingTime: z.string().min(1, "Podaj przedział godzinowy").max(MAX_LONG_TEXT, `Przedział godzinowy nie może przekraczać ${MAX_LONG_TEXT} znaków`),
  lunchLocation: mealLocationSchema,
  dinnerServingTime: z.string().min(1, "Podaj przedział godzinowy").max(MAX_LONG_TEXT, `Przedział godzinowy nie może przekraczać ${MAX_LONG_TEXT} znaków`),
  dinnerLocation: mealLocationSchema,
  cateringNotes: z.string().max(MAX_LONG_TEXT, `Uwagi nie mogą przekraczać ${MAX_LONG_TEXT} znaków`),
  parking: optionalParkingSchema,
  hallName: requiredHallNameSchema,
  hallMapLink: optionalMapLinkSchema
}).refine((data) => data.endDate > data.startDate, {
  message: "Data zakończenia musi być później niż data rozpoczęcia",
  path: ["endDate"]
});

export { LOOSE_URL_REGEX as L, MAX_SHORT_TEXT as M, POSTAL_CODE_REGEX as P, requiredLastNameSchema as a, requiredFirstNameSchema as b, requiredAddressSchema as c, requiredPostalCodeSchema as d, requiredCitySchema as e, requiredHallNameSchema as f, optionalParkingSchema as g, requiredCateringSchema as h, requiredHotelNameSchema as i, requiredTournamentNameSchema as j, MAX_LONG_TEXT as k, requiredSeasonNameSchema as l, optionalLastNameSchema as m, normalizeClubPlayerStreetForDb as n, optionalMapLinkSchema as o, optionalFirstNameSchema as p, optionalPhoneSchema as q, requiredPhoneSchema as r, sanitizePhone as s, toTitleCase as t, optionalEmailSchema as u, optionalWebsiteUrlSchema as v, requiredEmailSchema as w, requiredTeamNameSchema as x, playerClassificationSchema as y, playerNumberSchema as z };
