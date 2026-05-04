import './zodPl_AymT4aL4.mjs';
import { t as toTitleCase, n as normalizeClubPlayerStreetForDb, a as requiredLastNameSchema, b as requiredFirstNameSchema, M as MAX_SHORT_TEXT, L as LOOSE_URL_REGEX, P as POSTAL_CODE_REGEX } from './validateInputs_c5edMn88.mjs';
import { z } from 'zod';

const DATA_IMAGE_URL_REGEX = /^data:image\/(png|jpeg|jpg|webp);base64,[A-Za-z0-9+/=]+$/i;
const MAX_LOGO_DATA_URL_LENGTH = 3e6;
const optionalUrlSchema = z.union([z.literal(""), z.string().regex(LOOSE_URL_REGEX, "Nieprawidłowy adres URL")]).optional();
const optionalLogoSchema = z.union([
  z.literal(""),
  z.string().refine(
    (v) => LOOSE_URL_REGEX.test(v) || DATA_IMAGE_URL_REGEX.test(v),
    "Nieprawidłowe logo. Dozwolone: URL http(s) albo data:image/png|jpeg|jpg|webp"
  ).refine((v) => !v.startsWith("data:image/") || v.length <= MAX_LOGO_DATA_URL_LENGTH, "Logo jest za duże")
]).optional();
const optionalPostalCodeSchema = z.union([z.literal(""), z.string().regex(POSTAL_CODE_REGEX, "Kod pocztowy musi być w formacie XX-XXX")]).optional();
const MAX_LONG_TEXT_FOR_ADDRESS = 150;
const optionalTitleCaseOrNull = (value) => {
  if (value === void 0) return void 0;
  return value.trim() ? toTitleCase(value) : null;
};
const optionalTrimmedOrNull = (value) => {
  if (value === void 0) return void 0;
  return value.trim() || null;
};
const ClubUpsertSchema = z.object({
  ownerUserId: z.string().min(1, "Id użytkownika jest wymagane"),
  name: z.string().min(1, "Nazwa klubu jest wymagana"),
  contactAddress: z.string().optional(),
  contactCity: z.string().optional(),
  contactPostalCode: optionalPostalCodeSchema,
  contactEmail: z.union([z.literal(""), z.string().email("Nieprawidłowy adres e-mail")]).optional(),
  contactPhone: z.string().optional(),
  websiteUrl: optionalUrlSchema,
  logoUrl: optionalLogoSchema,
  contactFirstName: z.string().optional(),
  contactLastName: z.string().optional(),
  hallName: z.string().optional(),
  hallAddress: z.string().optional(),
  hallCity: z.string().optional(),
  hallPostalCode: optionalPostalCodeSchema,
  hallMapUrl: optionalUrlSchema
}).transform((o) => ({
  ownerUserId: o.ownerUserId,
  name: toTitleCase(o.name),
  contactAddress: optionalTitleCaseOrNull(o.contactAddress),
  contactCity: optionalTitleCaseOrNull(o.contactCity),
  contactPostalCode: optionalTrimmedOrNull(o.contactPostalCode),
  contactEmail: optionalTrimmedOrNull(o.contactEmail),
  contactPhone: optionalTrimmedOrNull(o.contactPhone),
  websiteUrl: optionalTrimmedOrNull(o.websiteUrl),
  logoUrl: optionalTrimmedOrNull(o.logoUrl),
  contactFirstName: optionalTitleCaseOrNull(o.contactFirstName),
  contactLastName: optionalTitleCaseOrNull(o.contactLastName),
  hallName: optionalTitleCaseOrNull(o.hallName),
  hallAddress: optionalTitleCaseOrNull(o.hallAddress),
  hallCity: optionalTitleCaseOrNull(o.hallCity),
  hallPostalCode: optionalTrimmedOrNull(o.hallPostalCode),
  hallMapUrl: optionalTrimmedOrNull(o.hallMapUrl)
}));
const ClubTeamSchema = z.object({
  clubId: z.string().min(1, "Id klubu jest wymagane"),
  name: z.string().min(1, "Nazwa drużyny jest wymagana"),
  formula: z.enum(["WR4", "WR5"]),
  coachId: z.string().optional(),
  playerIds: z.array(z.string().min(1)).optional()
}).transform((o) => ({
  clubId: o.clubId,
  name: toTitleCase(o.name),
  formula: o.formula,
  coachId: o.coachId?.trim() || null,
  playerIds: o.playerIds ?? []
}));
const CLUB_PLAYER_CLASSIFICATION_VALUES = [0.5, 1, 1.5, 2, 2.5, 3, 3.5];
const clubPlayerClassificationSchema = z.number({ message: "Wybierz klasyfikację" }).refine((n) => CLUB_PLAYER_CLASSIFICATION_VALUES.some((v) => Math.abs(v - n) < 1e-9), {
  message: "Klasyfikacja musi być od 0.5 do 3.5 (co 0.5)"
});
const clubPlayerJerseyNumberSchema = z.preprocess(
  (val) => {
    if (val === null || val === void 0 || val === "") return "-";
    if (typeof val === "number" && Number.isInteger(val)) return val;
    const t = String(val).trim();
    if (t === "-" || t === "–") return "-";
    if (/^\d+$/.test(t)) return Number(t);
    return val;
  },
  z.union([z.literal("-"), z.number().int().min(1, "Numer musi być od 1 do 99").max(99, "Numer musi być od 1 do 99")])
).transform((v) => v === "-" ? null : v);
const optionalBirthDateSchema = z.preprocess(
  (val) => {
    if (val === null || val === void 0 || val === "") return null;
    if (val instanceof Date) return val.toISOString().slice(0, 10);
    const s = String(val);
    const day = /^(\d{4}-\d{2}-\d{2})/.exec(s)?.[1];
    return day ?? s;
  },
  z.union([z.null(), z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data urodzenia musi być w formacie RRRR-MM-DD")])
).transform((v) => {
  if (v === null) return null;
  const d = /* @__PURE__ */ new Date(`${v}T12:00:00.000Z`);
  if (Number.isNaN(d.getTime())) throw new Error("Nieprawidłowa data");
  return d;
});
const optionalClubNineDigitPhone = z.preprocess((val) => val === null || val === void 0 ? "" : String(val), z.string()).transform((s) => s.replace(/\D/g, "").slice(0, 9)).refine((digits) => digits.length === 0 || digits.length === 9, {
  message: "Telefon musi mieć dokładnie 9 cyfr albo pozostaw puste"
}).transform((digits) => digits.length === 0 ? null : digits);
const optionalClubEmailNullable = z.preprocess((v) => v === null || v === void 0 ? "" : String(v).trim(), z.string().max(MAX_SHORT_TEXT)).refine((s) => s.length === 0 || z.string().email().safeParse(s).success, {
  message: "Nieprawidłowy adres e-mail"
}).transform((s) => s.length === 0 ? null : s);
const ClubPlayerFieldsSchema = z.object({
  clubId: z.string().min(1, "Id klubu jest wymagane"),
  firstName: requiredFirstNameSchema,
  lastName: requiredLastNameSchema,
  classification: clubPlayerClassificationSchema,
  number: clubPlayerJerseyNumberSchema,
  status: z.enum(["ACTIVE", "INACTIVE", "GUEST"]).default("ACTIVE"),
  birthDate: optionalBirthDateSchema,
  contactEmail: optionalClubEmailNullable,
  contactPhone: optionalClubNineDigitPhone,
  // Accept JSON null from clients (treated as "not provided").
  contactAddress: z.preprocess(
    (v) => v === null ? void 0 : v,
    z.string().max(MAX_LONG_TEXT_FOR_ADDRESS).optional()
  ),
  contactCity: z.preprocess((v) => v === null ? void 0 : v, z.string().max(MAX_SHORT_TEXT).optional()),
  contactPostalCode: z.preprocess((v) => v === null || v === void 0 ? void 0 : v, optionalPostalCodeSchema),
  contactMapUrl: z.preprocess((v) => v === null ? void 0 : v, optionalUrlSchema),
  playerFunction: z.enum(["DEFENSE", "ATTACK"]).optional(),
  // JSON often sends explicit null for “not set”; plain .optional() rejects null and fails every skill at once.
  speed: z.number().int().min(1).max(5).nullable().optional(),
  strength: z.number().int().min(1).max(5).nullable().optional(),
  endurance: z.number().int().min(1).max(5).nullable().optional(),
  technique: z.number().int().min(1).max(5).nullable().optional(),
  mentality: z.number().int().min(1).max(5).nullable().optional(),
  height: z.number().int().min(1).max(5).nullable().optional(),
  tactics: z.number().int().min(1).max(5).nullable().optional()
});
const ClubPlayerSchema = ClubPlayerFieldsSchema.transform((o) => ({
  ...o,
  firstName: toTitleCase(o.firstName.trim()),
  lastName: toTitleCase(o.lastName.trim()),
  contactAddress: o.contactAddress?.trim() ? normalizeClubPlayerStreetForDb(o.contactAddress.trim()) : null,
  contactCity: o.contactCity?.trim() ? toTitleCase(o.contactCity.trim()) : null,
  contactPostalCode: o.contactPostalCode?.trim() ? o.contactPostalCode.trim() : null,
  contactMapUrl: o.contactMapUrl?.trim() ? o.contactMapUrl.trim() : null
}));
const ClubCoachRefereeFieldsSchema = z.object({
  clubId: z.string().min(1, "Id klubu jest wymagane"),
  firstName: requiredFirstNameSchema,
  lastName: requiredLastNameSchema,
  email: optionalClubEmailNullable,
  phone: optionalClubNineDigitPhone
});
const ClubCoachRefereePersonSchema = ClubCoachRefereeFieldsSchema.transform((o) => ({
  clubId: o.clubId,
  firstName: toTitleCase(o.firstName.trim()),
  lastName: toTitleCase(o.lastName.trim()),
  email: o.email,
  phone: o.phone
}));
const ClubVolunteerFieldsSchema = z.object({
  clubId: z.string().min(1, "Id klubu jest wymagane"),
  firstName: requiredFirstNameSchema,
  lastName: z.preprocess((v) => v === null || v === void 0 ? "" : String(v), z.string().max(MAX_SHORT_TEXT)),
  email: optionalClubEmailNullable,
  phone: optionalClubNineDigitPhone
});
const ClubVolunteerPersonSchema = ClubVolunteerFieldsSchema.transform((o) => ({
  clubId: o.clubId,
  firstName: toTitleCase(o.firstName.trim()),
  lastName: o.lastName.trim() ? toTitleCase(o.lastName.trim()) : "",
  email: o.email,
  phone: o.phone
}));
const ClubStaffFieldsSchema = z.object({
  clubId: z.string().min(1, "Id klubu jest wymagane"),
  firstName: requiredFirstNameSchema,
  lastName: z.preprocess((v) => v === null || v === void 0 ? "" : String(v), z.string().max(MAX_SHORT_TEXT)),
  email: optionalClubEmailNullable,
  phone: optionalClubNineDigitPhone,
  notes: z.preprocess((v) => v === null || v === void 0 ? "" : String(v), z.string().max(500)).optional()
});
const ClubStaffPersonSchema = ClubStaffFieldsSchema.transform((o) => ({
  clubId: o.clubId,
  firstName: toTitleCase(o.firstName.trim()),
  lastName: o.lastName.trim() ? toTitleCase(o.lastName.trim()) : "",
  email: o.email,
  phone: o.phone,
  notes: o.notes || null
}));

export { ClubCoachRefereePersonSchema as C, ClubPlayerSchema as a, ClubStaffPersonSchema as b, ClubTeamSchema as c, ClubVolunteerPersonSchema as d, ClubUpsertSchema as e, ClubPlayerFieldsSchema as f, ClubCoachRefereeFieldsSchema as g, ClubVolunteerFieldsSchema as h, ClubStaffFieldsSchema as i, CLUB_PLAYER_CLASSIFICATION_VALUES as j };
