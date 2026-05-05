import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './zodPl_AymT4aL4.mjs';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { T as Typography, t as Box, _ as IconButton, v as Button, w as ThemeRegistry, C as CircularProgress, n as Paper } from './ThemeRegistry_BXk5lg02.mjs';
import { A as AppShell, h as ApiValidationError, i as firstApiFieldErrorKey, D as DataLoadAlert, c as Divider } from './DataLoadAlert_CBRXbjzF.mjs';
import { G as Grid } from './Grid_DFBwRzYi.mjs';
import { T as TextField, F as FormControl, I as InputLabel, S as Select, a as FormHelperText } from './TextField_D3FSEHvc.mjs';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Q as QueryProvider } from './QueryProvider_CFYP5LAL.mjs';
import { M as MutationErrorAlert } from './MutationErrorAlert_Doc77SMJ.mjs';
import { u as updateTeamById, c as createTeam, f as fetchPersonnelBySeason, a as updatePersonnel, b as createPersonnel } from './teams_D7sUy4Yr.mjs';
import { f as focusFirstFieldError } from './focusFirstFieldError_P9eHAvSn.mjs';
import { a as fetchSeasonsList } from './seasons_BKJTH5Iw.mjs';
import { q as queryKeys } from './queryKeys_DJxV4cae.mjs';
import { b as blurActiveElement } from './blurActiveElement_iWDIUN-2.mjs';
import { m as optionalLastNameSchema, p as optionalFirstNameSchema, q as optionalPhoneSchema, u as optionalEmailSchema, v as optionalWebsiteUrlSchema, r as requiredPhoneSchema, w as requiredEmailSchema, a as requiredLastNameSchema, b as requiredFirstNameSchema, d as requiredPostalCodeSchema, e as requiredCitySchema, c as requiredAddressSchema, x as requiredTeamNameSchema, M as MAX_SHORT_TEXT, s as sanitizePhone, y as playerClassificationSchema, z as playerNumberSchema } from './validateInputs_c5edMn88.mjs';
import { M as MenuItem } from './MenuItem_BKisg9NA.mjs';
import { z } from 'zod';

function TeamCoachSection({
  register,
  errors,
  touchedFields,
  coachPhoneField,
  requiredFieldSx
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", sx: { fontWeight: "bold", mb: 2 }, children: "Trener" }),
    /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Imię",
          ...register("coachFirstName"),
          error: Boolean(touchedFields.coachFirstName && errors.coachFirstName),
          helperText: touchedFields.coachFirstName ? errors.coachFirstName?.message : void 0,
          sx: requiredFieldSx
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Nazwisko",
          ...register("coachLastName"),
          error: Boolean(touchedFields.coachLastName && errors.coachLastName),
          helperText: touchedFields.coachLastName ? errors.coachLastName?.message : void 0,
          sx: requiredFieldSx
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "E-mail",
          ...register("coachEmail"),
          error: Boolean(touchedFields.coachEmail && errors.coachEmail),
          helperText: touchedFields.coachEmail ? errors.coachEmail?.message : void 0
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Telefon",
          ...coachPhoneField,
          placeholder: "9 cyfr",
          inputProps: { inputMode: "numeric" },
          error: Boolean(touchedFields.coachPhone && errors.coachPhone),
          helperText: touchedFields.coachPhone ? errors.coachPhone?.message : void 0
        }
      ) })
    ] })
  ] });
}

function TeamContactSection({
  register,
  errors,
  touchedFields,
  contactPhoneField,
  requiredFieldSx
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", sx: { fontWeight: "bold", mb: 2 }, children: "Osoba do kontaktu" }),
    /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Imię",
          ...register("contactFirstName"),
          error: Boolean(touchedFields.contactFirstName && errors.contactFirstName),
          helperText: touchedFields.contactFirstName ? errors.contactFirstName?.message : void 0,
          sx: requiredFieldSx
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Nazwisko",
          ...register("contactLastName"),
          error: Boolean(touchedFields.contactLastName && errors.contactLastName),
          helperText: touchedFields.contactLastName ? errors.contactLastName?.message : void 0,
          sx: requiredFieldSx
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "E-mail",
          ...register("contactEmail"),
          error: Boolean(touchedFields.contactEmail && errors.contactEmail),
          helperText: touchedFields.contactEmail ? errors.contactEmail?.message : void 0,
          sx: requiredFieldSx
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Telefon",
          ...contactPhoneField,
          placeholder: "9 cyfr",
          inputProps: { inputMode: "numeric" },
          error: Boolean(touchedFields.contactPhone && errors.contactPhone),
          helperText: touchedFields.contactPhone ? errors.contactPhone?.message : void 0,
          sx: requiredFieldSx
        }
      ) })
    ] })
  ] });
}

function TeamPlayersSection({
  players,
  updatePlayer,
  removePlayer,
  addPlayer,
  requiredFieldSx,
  classificationErrors,
  numberErrors
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", sx: { fontWeight: "bold", mb: 2 }, children: "Zawodnicy" }),
    players.map((p) => /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          mb: 2,
          p: 1.5,
          borderRadius: 2,
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider"
        },
        children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 1.5, alignItems: "center", children: [
          /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              size: "small",
              label: "Imię",
              required: true,
              value: p.firstName,
              onChange: (e) => updatePlayer(p.id, "firstName", e.target.value),
              sx: requiredFieldSx
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              size: "small",
              label: "Nazwisko",
              required: true,
              value: p.lastName,
              onChange: (e) => updatePlayer(p.id, "lastName", e.target.value),
              sx: requiredFieldSx
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 3 }, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              size: "small",
              type: "number",
              inputProps: { inputMode: "decimal" },
              label: "Klasyfikacja",
              value: p.classification,
              onChange: (e) => updatePlayer(p.id, "classification", e.target.value),
              error: Boolean(classificationErrors[p.id]),
              helperText: classificationErrors[p.id]
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 3 }, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              size: "small",
              type: "number",
              inputProps: { inputMode: "numeric" },
              label: "Numer",
              value: p.number,
              onChange: (e) => updatePlayer(p.id, "number", e.target.value),
              error: Boolean(numberErrors[p.id]),
              helperText: numberErrors[p.id]
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 2 }, children: /* @__PURE__ */ jsx(IconButton, { "aria-label": "Usuń zawodnika", onClick: () => removePlayer(p.id), color: "error", size: "small", children: /* @__PURE__ */ jsx(DeleteOutlineIcon, {}) }) })
        ] })
      },
      p.id
    )),
    /* @__PURE__ */ jsx(Button, { type: "button", variant: "outlined", startIcon: /* @__PURE__ */ jsx(AddIcon, {}), onClick: addPlayer, sx: { mb: 3 }, children: "Dodaj zawodnika" })
  ] });
}

function TeamRefereeSection({
  register,
  errors,
  touchedFields,
  refereePhoneField
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", sx: { fontWeight: "bold", mb: 2 }, children: "Sędzia" }),
    /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, sx: { mb: 3 }, children: [
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Imię",
          ...register("refereeFirstName"),
          error: Boolean(touchedFields.refereeFirstName && errors.refereeFirstName),
          helperText: touchedFields.refereeFirstName ? errors.refereeFirstName?.message : void 0
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Nazwisko",
          ...register("refereeLastName"),
          error: Boolean(touchedFields.refereeLastName && errors.refereeLastName),
          helperText: touchedFields.refereeLastName ? errors.refereeLastName?.message : void 0
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "E-mail (opcjonalnie)",
          ...register("refereeEmail"),
          error: Boolean(touchedFields.refereeEmail && errors.refereeEmail),
          helperText: touchedFields.refereeEmail ? errors.refereeEmail?.message : void 0
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          label: "Telefon",
          ...refereePhoneField,
          placeholder: "9 cyfr",
          inputProps: { inputMode: "numeric" },
          error: Boolean(touchedFields.refereePhone && errors.refereePhone),
          helperText: touchedFields.refereePhone ? errors.refereePhone?.message : void 0
        }
      ) })
    ] })
  ] });
}

function TeamStaffSection({ staff, updateStaff, removeStaff, addStaff }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", sx: { fontWeight: "bold", mb: 2 }, children: "Staff" }),
    staff.map((s) => /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, alignItems: "center", sx: { mb: 1 }, children: [
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 5 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          size: "small",
          label: "Imię",
          value: s.firstName,
          onChange: (e) => updateStaff(s.id, "firstName", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 5 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          fullWidth: true,
          size: "small",
          label: "Nazwisko",
          value: s.lastName,
          onChange: (e) => updateStaff(s.id, "lastName", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 2 }, children: /* @__PURE__ */ jsx(IconButton, { "aria-label": "Usuń", onClick: () => removeStaff(s.id), color: "error", size: "small", children: /* @__PURE__ */ jsx(DeleteOutlineIcon, {}) }) })
    ] }, s.id)),
    /* @__PURE__ */ jsx(Button, { type: "button", variant: "outlined", startIcon: /* @__PURE__ */ jsx(AddIcon, {}), onClick: addStaff, sx: { mb: 3 }, children: "Dodaj osobę ze staffu" })
  ] });
}

const normalizeText = (value) => value?.trim() ?? "";
const parseOptionalNumber = (value) => {
  const trimmedValue = value.trim();
  if (!trimmedValue) return void 0;
  const parsedValue = Number(trimmedValue.replace(",", "."));
  return Number.isNaN(parsedValue) ? void 0 : parsedValue;
};
const buildPlayerPayload = (player) => ({
  id: normalizeText(player.id) || void 0,
  firstName: player.firstName,
  lastName: player.lastName,
  classification: player.classification ?? void 0,
  number: player.number ?? void 0
});
const buildPlayerPayloadFromRow = (row) => ({
  id: normalizeText(row.id) || void 0,
  firstName: normalizeText(row.firstName),
  lastName: normalizeText(row.lastName),
  classification: parseOptionalNumber(row.classification),
  number: parseOptionalNumber(row.number)
});
const buildPlayerPayloadFromEntity = (player) => buildPlayerPayload(player);
const toWebsiteHref = (websiteUrl) => {
  if (!websiteUrl) return "";
  const lowerUrl = websiteUrl.toLowerCase();
  if (lowerUrl.startsWith("http://") || lowerUrl.startsWith("https://") || websiteUrl.startsWith("//")) {
    return websiteUrl;
  }
  return `https://${websiteUrl}`;
};

function useEditableRows(initialRows = []) {
  const [rows, setRows] = useState(initialRows);
  const addRow = (newRow) => setRows((prevRows) => [...prevRows, newRow]);
  const removeRow = (id) => setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  const updateRow = (id, updater) => setRows((prevRows) => prevRows.map((row) => row.id === id ? updater(row) : row));
  return {
    rows,
    setRows,
    addRow,
    removeRow,
    updateRow
  };
}

const teamSchema = z.object({
  name: requiredTeamNameSchema,
  address: requiredAddressSchema,
  city: requiredCitySchema,
  postalCode: requiredPostalCodeSchema,
  contactFirstName: requiredFirstNameSchema,
  contactLastName: requiredLastNameSchema,
  contactEmail: requiredEmailSchema,
  contactPhone: requiredPhoneSchema,
  websiteUrl: optionalWebsiteUrlSchema,
  coachFirstName: z.string().min(1, "Imię trenera jest wymagane").max(MAX_SHORT_TEXT, `Imię nie może przekraczać ${MAX_SHORT_TEXT} znaków`),
  coachLastName: z.string().min(1, "Nazwisko trenera jest wymagane").max(MAX_SHORT_TEXT, `Nazwisko nie może przekraczać ${MAX_SHORT_TEXT} znaków`),
  coachEmail: optionalEmailSchema,
  coachPhone: optionalPhoneSchema,
  refereeFirstName: optionalFirstNameSchema,
  refereeLastName: optionalLastNameSchema,
  refereeEmail: optionalEmailSchema,
  refereePhone: optionalPhoneSchema,
  staffFirstName: optionalFirstNameSchema,
  staffLastName: optionalLastNameSchema
});
const requiredFieldSx = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "warning.light"
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "warning.main"
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "primary.main",
    borderWidth: "1px"
  }
};
const normalizeComparableEmail = (value) => normalizeText(value).toLowerCase() || void 0;
const normalizeComparablePhone = (value) => sanitizePhone(value != null ? String(value) : "") || void 0;
function findPersonnelByIdentity(people, firstName, lastName, email, phone) {
  const normalizedEmail = normalizeComparableEmail(email);
  const normalizedPhone = normalizeComparablePhone(phone);
  const byPhone = normalizedPhone ? people.find((person) => normalizeComparablePhone(person.phone) === normalizedPhone)?.id : void 0;
  if (byPhone) return byPhone;
  const byNameAndEmail = normalizedEmail && people.find(
    (person) => normalizeText(person.firstName) === firstName && normalizeText(person.lastName) === lastName && normalizeComparableEmail(person.email) === normalizedEmail
  )?.id;
  if (byNameAndEmail) return byNameAndEmail;
  return people.find(
    (person) => normalizeText(person.firstName) === firstName && normalizeText(person.lastName) === lastName
  )?.id;
}
function redirectToSettings() {
  window.location.assign("/settings");
}
const toPlayerRow = (player) => ({
  id: player.id,
  firstName: player.firstName ?? "",
  lastName: player.lastName ?? "",
  classification: player.classification != null ? String(player.classification) : "",
  number: player.number != null ? String(player.number) : ""
});
const toStaffRow = (staffMember) => ({
  id: staffMember.id,
  firstName: staffMember.firstName ?? "",
  lastName: staffMember.lastName ?? ""
});
const toDefaultValues = (team) => ({
  name: team.name ?? "",
  address: team.address ?? "",
  city: team.city ?? "",
  postalCode: team.postalCode ?? "",
  websiteUrl: team.websiteUrl ?? "",
  contactFirstName: team.contactFirstName ?? "",
  contactLastName: team.contactLastName ?? "",
  contactEmail: team.contactEmail ?? "",
  contactPhone: team.contactPhone ?? "",
  coachFirstName: team.coach?.firstName ?? "",
  coachLastName: team.coach?.lastName ?? "",
  coachEmail: team.coach?.email ?? "",
  coachPhone: team.coach?.phone != null ? String(team.coach.phone) : "",
  refereeFirstName: team.referee?.firstName ?? "",
  refereeLastName: team.referee?.lastName ?? "",
  refereeEmail: team.referee?.email ?? "",
  refereePhone: team.referee?.phone != null ? String(team.referee.phone) : "",
  staffFirstName: "",
  staffLastName: ""
});
const emptyTeamFormValues = {
  name: "",
  address: "",
  city: "",
  postalCode: "",
  contactFirstName: "",
  contactLastName: "",
  contactEmail: "",
  contactPhone: "",
  coachFirstName: "",
  coachLastName: "",
  coachEmail: "",
  coachPhone: "",
  websiteUrl: "",
  refereeFirstName: "",
  refereeLastName: "",
  refereeEmail: "",
  refereePhone: "",
  staffFirstName: "",
  staffLastName: ""
};
function resolveEffectiveSeasonId(seasonId, isEdit) {
  return seasonId || (isEdit ? isEdit.seasonId : "");
}
async function resolvePersonnelId({
  firstName,
  lastName,
  email,
  phone,
  initialId,
  initialPerson,
  seasonId,
  endpoint
}) {
  const fn = normalizeText(firstName);
  const ln = normalizeText(lastName);
  const effectiveInitialId = initialId || initialPerson?.id;
  if (!fn || !ln) return effectiveInitialId;
  const normalizedEmail = normalizeComparableEmail(email);
  const normalizedPhone = normalizeComparablePhone(phone);
  const matchesInitialByIdentity = Boolean(effectiveInitialId) && fn === normalizeText(initialPerson?.firstName) && ln === normalizeText(initialPerson?.lastName);
  if (matchesInitialByIdentity) {
    const supportsUpdateEndpoint = endpoint === "/api/referees" || endpoint === "/api/coaches";
    if (effectiveInitialId && supportsUpdateEndpoint && normalizedPhone) {
      const existingPersonnel = await fetchPersonnelBySeason(endpoint, seasonId, "Nie udało się pobrać osób");
      const initialStillExists = existingPersonnel.some((person) => person.id === effectiveInitialId);
      const matchedId = initialStillExists ? effectiveInitialId : findPersonnelByIdentity(existingPersonnel, fn, ln, normalizedEmail, normalizedPhone);
      if (matchedId) {
        await updatePersonnel(endpoint, matchedId, {
          firstName: fn,
          lastName: ln,
          email: normalizedEmail,
          phone: normalizedPhone
        });
        return matchedId;
      }
      const createdPerson2 = await createPersonnel(endpoint, {
        firstName: fn,
        lastName: ln,
        email: normalizedEmail,
        phone: normalizedPhone,
        seasonId
      });
      return createdPerson2.id;
    }
    return effectiveInitialId;
  }
  const createdPerson = await createPersonnel(endpoint, {
    firstName: fn,
    lastName: ln,
    email: normalizedEmail,
    phone: normalizedPhone,
    seasonId
  }).catch((e) => {
    if (e instanceof ApiValidationError) {
      throw new ApiValidationError(e.message, e.fieldErrors, endpoint);
    }
    throw e;
  });
  return createdPerson.id;
}
function TeamForm() {
  return /* @__PURE__ */ jsx(QueryProvider, { children: /* @__PURE__ */ jsx(ThemeRegistry, { children: /* @__PURE__ */ jsx(AppShell, { currentPath: "/settings", children: /* @__PURE__ */ jsx(TeamFormContent, {}) }) }) });
}
function TeamFormContent({ mode = "create", initialTeam = null, onSuccess, onCancel }) {
  const queryClient = useQueryClient();
  const isEdit = mode === "edit" && initialTeam;
  const [seasonId, setSeasonId] = useState("");
  const [playerClassificationErrors, setPlayerClassificationErrors] = useState({});
  const [playerNumberErrors, setPlayerNumberErrors] = useState({});
  const {
    rows: players,
    setRows: setPlayers,
    addRow: addPlayerRow,
    removeRow: removePlayerRow,
    updateRow: updatePlayerRow
  } = useEditableRows();
  const {
    rows: staff,
    setRows: setStaff,
    addRow: addStaffRow,
    removeRow: removeStaffRow,
    updateRow: updateStaffRow
  } = useEditableRows();
  const {
    data: seasonsData,
    isPending: loadingSeasons,
    isError: seasonsQueryFailed,
    error: seasonsQueryError,
    refetch: refetchSeasons
  } = useQuery({
    queryKey: queryKeys.seasons.list(),
    queryFn: ({ signal }) => fetchSeasonsList(signal)
  });
  const seasons = useMemo(() => seasonsData ?? [], [seasonsData]);
  const seasonsLoadError = seasonsQueryFailed && seasonsQueryError instanceof Error ? seasonsQueryError.message : null;
  const effectiveSeasonId = resolveEffectiveSeasonId(seasonId, isEdit);
  const addPlayer = () => addPlayerRow({ id: crypto.randomUUID(), firstName: "", lastName: "", classification: "", number: "" });
  const removePlayer = (id) => {
    removePlayerRow(id);
    setPlayerClassificationErrors((prev) => {
      if (!prev[id]) return prev;
      return Object.fromEntries(Object.entries(prev).filter(([key]) => key !== id));
    });
    setPlayerNumberErrors((prev) => {
      if (!prev[id]) return prev;
      return Object.fromEntries(Object.entries(prev).filter(([key]) => key !== id));
    });
  };
  const updatePlayer = (id, field, value) => updatePlayerRow(id, (player) => ({ ...player, [field]: value }));
  const validatePlayers = () => {
    const nextClassificationErrors = {};
    const nextNumberErrors = {};
    for (const player of players) {
      const hasAnyValue = normalizeText(player.firstName) || normalizeText(player.lastName) || normalizeText(player.classification) || normalizeText(player.number);
      if (!hasAnyValue) continue;
      const parsedClassification = player.classification.trim() ? Number(player.classification.trim().replace(",", ".")) : void 0;
      const result = playerClassificationSchema.optional().safeParse(parsedClassification);
      if (!result.success) {
        nextClassificationErrors[player.id] = result.error.issues[0]?.message ?? "Nieprawidłowa klasyfikacja";
      }
      const parsedNumber = player.number.trim() ? Number(player.number.trim()) : void 0;
      const numberResult = playerNumberSchema.optional().safeParse(parsedNumber);
      if (!numberResult.success) {
        nextNumberErrors[player.id] = numberResult.error.issues[0]?.message ?? "Nieprawidłowy numer";
      }
    }
    setPlayerClassificationErrors(nextClassificationErrors);
    setPlayerNumberErrors(nextNumberErrors);
    return Object.keys(nextClassificationErrors).length === 0 && Object.keys(nextNumberErrors).length === 0;
  };
  const addStaff = () => addStaffRow({ id: crypto.randomUUID(), firstName: "", lastName: "" });
  const removeStaff = (id) => removeStaffRow(id);
  const updateStaff = (id, field, value) => updateStaffRow(id, (staffMember) => ({ ...staffMember, [field]: value }));
  const defaultFormValues = isEdit ? toDefaultValues(initialTeam) : emptyTeamFormValues;
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, touchedFields, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(teamSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: defaultFormValues
  });
  useEffect(() => {
    if (!seasons.length) return;
    if (isEdit && initialTeam) {
      setSeasonId(initialTeam.seasonId ?? "");
      setPlayers((initialTeam.players ?? []).map(toPlayerRow));
      setStaff((initialTeam.staff ?? []).map(toStaffRow));
      reset(toDefaultValues(initialTeam));
      setPlayerClassificationErrors({});
      setPlayerNumberErrors({});
    } else if (seasons.length > 0 && !isEdit) {
      setSeasonId(seasons[0].id);
      setPlayerClassificationErrors({});
      setPlayerNumberErrors({});
    }
  }, [seasons, isEdit, initialTeam, reset, setPlayers, setStaff]);
  const submitMutation = useMutation({
    mutationFn: async (data) => {
      const eff = resolveEffectiveSeasonId(seasonId, isEdit);
      if (!eff) {
        throw new Error("Wybierz sezon przed zapisaniem drużyny.");
      }
      const coachId = await resolvePersonnelId({
        firstName: data.coachFirstName,
        lastName: data.coachLastName,
        email: data.coachEmail,
        phone: data.coachPhone,
        initialId: isEdit ? initialTeam.coachId ?? void 0 : void 0,
        initialPerson: isEdit ? initialTeam.coach : void 0,
        seasonId: eff,
        endpoint: "/api/coaches"
      });
      const refereeId = await resolvePersonnelId({
        firstName: data.refereeFirstName,
        lastName: data.refereeLastName,
        email: data.refereeEmail,
        phone: data.refereePhone,
        initialId: isEdit ? initialTeam.refereeId ?? void 0 : void 0,
        initialPerson: isEdit ? initialTeam.referee : void 0,
        seasonId: eff,
        endpoint: "/api/referees"
      });
      const staffPayload = staff.filter((s) => normalizeText(s.firstName) && normalizeText(s.lastName)).map((s) => ({ firstName: normalizeText(s.firstName), lastName: normalizeText(s.lastName) }));
      const playersPayload = players.filter((p) => normalizeText(p.firstName) && normalizeText(p.lastName)).map(buildPlayerPayloadFromRow);
      const websiteUrl = normalizeText(data.websiteUrl) || void 0;
      const body = {
        name: data.name,
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
        websiteUrl,
        contactFirstName: data.contactFirstName,
        contactLastName: data.contactLastName,
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
        seasonId: eff,
        coachId,
        refereeId,
        staff: staffPayload.length > 0 ? staffPayload : void 0,
        players: playersPayload
      };
      if (isEdit && initialTeam) {
        return updateTeamById(initialTeam.id, body);
      }
      return createTeam(body);
    },
    onSuccess: (updated) => {
      const eff = resolveEffectiveSeasonId(seasonId, isEdit);
      if (eff) {
        void queryClient.invalidateQueries({ queryKey: queryKeys.seasons.list() });
        void queryClient.invalidateQueries({ queryKey: queryKeys.teams.bySeason(eff) });
        void queryClient.invalidateQueries({ queryKey: queryKeys.referees.bySeason(eff) });
        void queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.season(eff) });
      }
      if (initialTeam?.id) {
        void queryClient.invalidateQueries({ queryKey: queryKeys.teams.detail(initialTeam.id) });
      }
      blurActiveElement();
      if (onSuccess) {
        onSuccess(updated);
      } else {
        redirectToSettings();
      }
    },
    onError: (error) => {
      if (!(error instanceof ApiValidationError) || !error.fieldErrors) return;
      const key = firstApiFieldErrorKey(error.fieldErrors);
      if (!key) return;
      if (key === "seasonId") {
        document.getElementById("season-select")?.focus();
        return;
      }
      const coachMap = {
        firstName: "coachFirstName",
        lastName: "coachLastName",
        email: "coachEmail",
        phone: "coachPhone"
      };
      const refereeMap = {
        firstName: "refereeFirstName",
        lastName: "refereeLastName",
        email: "refereeEmail",
        phone: "refereePhone"
      };
      const map = error.context === "/api/referees" ? refereeMap : coachMap;
      const field = map[key];
      if (field) setFocus(field);
    }
  });
  const onSubmit = (data) => {
    if (!validatePlayers()) return;
    submitMutation.mutate(data);
  };
  const onInvalid = (invalidErrors) => {
    focusFirstFieldError(invalidErrors, setFocus);
  };
  const makePhoneField = (name) => {
    const field = register(name);
    return {
      ...field,
      onChange: (e) => {
        e.target.value = sanitizePhone(e.target.value);
        return field.onChange(e);
      }
    };
  };
  const contactPhoneField = makePhoneField("contactPhone");
  const coachPhoneField = makePhoneField("coachPhone");
  const refereePhoneField = makePhoneField("refereePhone");
  if (loadingSeasons) {
    return /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 8 }, children: /* @__PURE__ */ jsx(CircularProgress, {}) });
  }
  return /* @__PURE__ */ jsxs(Paper, { sx: { p: 4, maxWidth: 600, mx: "auto", borderRadius: 3 }, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h5", sx: { fontWeight: "bold", mb: 3 }, children: isEdit ? "Edytuj drużynę" : "Nowa Drużyna" }),
    seasonsLoadError ? /* @__PURE__ */ jsx(DataLoadAlert, { message: seasonsLoadError, onRetry: () => void refetchSeasons(), sx: { mb: 2 } }) : null,
    submitMutation.isError ? /* @__PURE__ */ jsx(Box, { sx: { mb: 2 }, children: /* @__PURE__ */ jsx(MutationErrorAlert, { error: submitMutation.error, fallbackMessage: "Nie udało się zapisać drużyny." }) }) : null,
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit, onInvalid), noValidate: true, children: [
      /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, sx: { mb: 3, ...requiredFieldSx }, error: seasons.length === 0, children: [
        /* @__PURE__ */ jsx(InputLabel, { children: "Sezon" }),
        /* @__PURE__ */ jsx(
          Select,
          {
            label: "Sezon",
            value: seasonId ?? "",
            onChange: (e) => setSeasonId(e.target.value),
            readOnly: isEdit && seasons.length <= 1,
            inputProps: { id: "season-select" },
            children: seasons.map((s) => /* @__PURE__ */ jsxs(MenuItem, { value: s.id, children: [
              s.name,
              s.year ? ` (${s.year})` : ""
            ] }, s.id))
          }
        ),
        seasons.length === 0 && /* @__PURE__ */ jsxs(FormHelperText, { children: [
          "Brak sezonów — ",
          /* @__PURE__ */ jsx("a", { href: "/settings/seasons/new", children: "utwórz sezon" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, sx: { mb: 3 }, children: [
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Nazwa Drużyny",
            ...register("name"),
            error: Boolean(touchedFields.name && errors.name),
            helperText: touchedFields.name ? errors.name?.message : void 0,
            sx: requiredFieldSx
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Ulica",
            ...register("address"),
            error: Boolean(touchedFields.address && errors.address),
            helperText: touchedFields.address ? errors.address?.message : void 0,
            sx: requiredFieldSx
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Kod pocztowy",
            placeholder: "00-000",
            ...register("postalCode"),
            error: Boolean(touchedFields.postalCode && errors.postalCode),
            helperText: touchedFields.postalCode ? errors.postalCode?.message : void 0,
            sx: requiredFieldSx
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 8 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Miasto",
            ...register("city"),
            error: Boolean(touchedFields.city && errors.city),
            helperText: touchedFields.city ? errors.city?.message : void 0,
            sx: requiredFieldSx
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Strona internetowa (opcjonalnie)",
            ...register("websiteUrl"),
            error: Boolean(touchedFields.websiteUrl && errors.websiteUrl),
            helperText: touchedFields.websiteUrl ? errors.websiteUrl?.message : void 0
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        TeamContactSection,
        {
          register,
          errors,
          touchedFields,
          contactPhoneField,
          requiredFieldSx
        }
      ),
      /* @__PURE__ */ jsx(Divider, { sx: { my: 2 } }),
      /* @__PURE__ */ jsx(
        TeamCoachSection,
        {
          register,
          errors,
          touchedFields,
          coachPhoneField,
          requiredFieldSx
        }
      ),
      /* @__PURE__ */ jsx(
        TeamRefereeSection,
        {
          register,
          errors,
          touchedFields,
          refereePhoneField
        }
      ),
      /* @__PURE__ */ jsx(Divider, { sx: { my: 2 } }),
      /* @__PURE__ */ jsx(TeamStaffSection, { staff, updateStaff, removeStaff, addStaff }),
      /* @__PURE__ */ jsx(
        TeamPlayersSection,
        {
          players,
          updatePlayer: (id, field, value) => {
            updatePlayer(id, field, value);
            if (field === "classification") {
              setPlayerClassificationErrors((prev) => {
                if (!prev[id]) return prev;
                return Object.fromEntries(Object.entries(prev).filter(([key]) => key !== id));
              });
            }
            if (field === "number") {
              setPlayerNumberErrors((prev) => {
                if (!prev[id]) return prev;
                return Object.fromEntries(Object.entries(prev).filter(([key]) => key !== id));
              });
            }
          },
          removePlayer,
          addPlayer,
          requiredFieldSx,
          classificationErrors: playerClassificationErrors,
          numberErrors: playerNumberErrors
        }
      ),
      /* @__PURE__ */ jsx(Divider, { sx: { my: 2 } }),
      /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", gap: 2, pt: 2 }, children: [
        onCancel ? /* @__PURE__ */ jsx(Button, { variant: "outlined", fullWidth: true, onClick: onCancel, children: "Anuluj" }) : /* @__PURE__ */ jsx(Button, { variant: "outlined", fullWidth: true, component: "a", href: "/settings", children: "Anuluj" }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "contained",
            color: "success",
            type: "submit",
            fullWidth: true,
            disabled: isSubmitting || submitMutation.isPending || !effectiveSeasonId || seasons.length === 0,
            children: isSubmitting || submitMutation.isPending ? /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) : isEdit ? "Zapisz zmiany" : "Zapisz Drużynę"
          }
        )
      ] })
    ] })
  ] });
}

export { TeamForm as T, TeamFormContent as a, buildPlayerPayloadFromEntity as b, parseOptionalNumber as p, toWebsiteHref as t };
