import { jsx, jsxs } from 'react/jsx-runtime';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './zodPl_AymT4aL4.mjs';
import { w as ThemeRegistry, t as Box, C as CircularProgress, n as Paper, T as Typography, v as Button } from './ThemeRegistry_D8eYcNmV.mjs';
import { A as AppShell, D as DataLoadAlert } from './DataLoadAlert_DbJvhLOL.mjs';
import { Q as QueryProvider } from './QueryProvider_CFYP5LAL.mjs';
import { M as MutationErrorAlert } from './MutationErrorAlert_BOjWZslR.mjs';
import { f as fetchSeasonById, u as updateSeason, c as createSeason } from './seasons_D51nLtJ4.mjs';
import { b as blurActiveElement } from './blurActiveElement_iWDIUN-2.mjs';
import { f as focusFirstFieldError } from './focusFirstFieldError_P9eHAvSn.mjs';
import { q as queryKeys } from './queryKeys_DJxV4cae.mjs';
import { l as requiredSeasonNameSchema } from './validateInputs_c5edMn88.mjs';
import { T as TextField } from './TextField_BVjeauhA.mjs';
import { z } from 'zod';

const seasonSchema = z.object({
  name: requiredSeasonNameSchema,
  year: z.preprocess(
    (value) => value === "" ? void 0 : Number(value),
    z.number({ message: "Rok sezonu jest wymagany" }).int().min(2e3, "Podaj rok w przedziale 2000-2100").max(2100)
  ),
  description: z.string().optional()
});
const redirectToSettings = () => window.location.assign("/settings");
const toSeasonUpsertBody = (data) => ({
  name: data.name,
  year: data.year,
  description: data.description
});
function SeasonForm({ id }) {
  return /* @__PURE__ */ jsx(QueryProvider, { children: /* @__PURE__ */ jsx(ThemeRegistry, { children: /* @__PURE__ */ jsx(AppShell, { currentPath: "/settings", children: /* @__PURE__ */ jsx(SeasonFormContent, { id }) }) }) });
}
function SeasonFormContent({ id }) {
  const queryClient = useQueryClient();
  const isEdit = Boolean(id);
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors, touchedFields, isSubmitted, isSubmitting }
  } = useForm({
    resolver: zodResolver(seasonSchema),
    mode: "onBlur",
    reValidateMode: "onBlur"
  });
  const {
    data: seasonData,
    isPending: loading,
    isError: loadIsError,
    error: loadErrorObj,
    refetch
  } = useQuery({
    queryKey: queryKeys.seasons.detail(id ?? "__none__"),
    queryFn: ({ signal }) => {
      if (!id) return Promise.reject(new Error("Brak id sezonu"));
      return fetchSeasonById(id, signal);
    },
    enabled: isEdit
  });
  const loadError = loadIsError && loadErrorObj instanceof Error ? loadErrorObj.message : null;
  useEffect(() => {
    if (!seasonData) return;
    reset({
      name: seasonData.name,
      year: seasonData.year,
      description: seasonData.description ?? ""
    });
  }, [seasonData, reset]);
  const submitMutation = useMutation({
    mutationFn: (data) => isEdit && id ? updateSeason(id, toSeasonUpsertBody(data)) : createSeason(toSeasonUpsertBody(data)),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.seasons.list() });
      await queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      blurActiveElement();
      redirectToSettings();
    }
  });
  const onSubmit = (data) => submitMutation.mutate(data);
  const onInvalid = (invalidErrors) => {
    focusFirstFieldError(invalidErrors, setFocus);
  };
  const isSaveDisabled = isSubmitting || submitMutation.isPending;
  if (loading && isEdit) {
    return /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 8 }, children: /* @__PURE__ */ jsx(CircularProgress, {}) });
  }
  if (isEdit && loadError && !loading) {
    return /* @__PURE__ */ jsx(Paper, { sx: { p: 4, maxWidth: 480, mx: "auto", borderRadius: 3 }, children: /* @__PURE__ */ jsx(DataLoadAlert, { message: loadError, onRetry: () => void refetch() }) });
  }
  return /* @__PURE__ */ jsxs(Paper, { sx: { p: 4, maxWidth: 480, mx: "auto", borderRadius: 3 }, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h5", sx: { fontWeight: "bold", mb: 3 }, children: isEdit ? "Edytuj Sezon" : "Nowy Sezon" }),
    submitMutation.isError ? /* @__PURE__ */ jsx(Box, { sx: { mb: 2 }, children: /* @__PURE__ */ jsx(MutationErrorAlert, { error: submitMutation.error, fallbackMessage: "Nie udało się zapisać sezonu." }) }) : null,
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit, onInvalid), noValidate: true, children: [
      /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 2, mb: 3 }, children: [
        /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Nazwa Sezonu",
            ...register("name"),
            error: Boolean((touchedFields.name || isSubmitted) && errors.name),
            helperText: touchedFields.name || isSubmitted ? errors.name?.message : void 0
          }
        ),
        /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Rok",
            ...register("year"),
            error: Boolean((touchedFields.year || isSubmitted) && errors.year),
            helperText: touchedFields.year || isSubmitted ? errors.year?.message : void 0
          }
        ),
        /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Opis",
            multiline: true,
            rows: 3,
            ...register("description"),
            error: Boolean((touchedFields.description || isSubmitted) && errors.description),
            helperText: touchedFields.description || isSubmitted ? errors.description?.message : "Opcjonalnie"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", gap: 2 }, children: [
        /* @__PURE__ */ jsx(Button, { variant: "outlined", fullWidth: true, component: "a", href: "/settings", children: "Anuluj" }),
        /* @__PURE__ */ jsx(Button, { variant: "contained", color: "success", type: "submit", fullWidth: true, disabled: isSaveDisabled, children: isSaveDisabled ? /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) : "Zapisz Sezon" })
      ] })
    ] })
  ] });
}

export { SeasonForm as S };
