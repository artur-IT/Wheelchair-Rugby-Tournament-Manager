import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_B-rHfi_b.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { UserCircle } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signOut } from 'supertokens-web-js/recipe/session/index.js';
import { w as ThemeRegistry, n as Paper, t as Box, C as CircularProgress, T as Typography, A as Alert, v as Button } from './ThemeRegistry_BXk5lg02.mjs';
import { A as AppShell, f as fetchCurrentUserProfile, D as DataLoadAlert, b as Avatar, c as Divider, e as deleteCurrentUserAccount, u as updateCurrentUserProfile } from './DataLoadAlert_CBRXbjzF.mjs';
import './zodPl_AymT4aL4.mjs';
import { M as MutationErrorAlert } from './MutationErrorAlert_Doc77SMJ.mjs';
import { f as focusFirstFieldError } from './focusFirstFieldError_P9eHAvSn.mjs';
import { a as requiredLastNameSchema, b as requiredFirstNameSchema } from './validateInputs_c5edMn88.mjs';
import { e as ensureSuperTokensFrontendInitialized } from './initFrontend_DC7D9y16.mjs';
import { G as Grid } from './Grid_DFBwRzYi.mjs';
import { T as TextField } from './TextField_D3FSEHvc.mjs';
import { D as Dialog, a as DialogTitle, b as DialogContent } from './DialogTitle_p-PDvZtL.mjs';
import { D as DialogActions } from './DialogActions_BCWy51Lb.mjs';
import { z } from 'zod';

function emailsMatchForDeletion(typed, accountEmail) {
  return typed.trim().toLowerCase() === accountEmail.trim().toLowerCase();
}
const profileSchema = z.object({
  firstName: requiredFirstNameSchema,
  lastName: requiredLastNameSchema
});
function ProfileContent() {
  const [email, setEmail] = useState("");
  const [loadError, setLoadError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saveError, setSaveError] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [warnDeleteOpen, setWarnDeleteOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deletePhrase, setDeletePhrase] = useState("");
  const [deleteError, setDeleteError] = useState(null);
  const [deleteBusy, setDeleteBusy] = useState(false);
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors, touchedFields, isSubmitted, isSubmitting }
  } = useForm({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: { firstName: "", lastName: "" }
  });
  const loadProfile = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const profile = await fetchCurrentUserProfile();
      setEmail(profile.email);
      reset({
        firstName: profile.firstName,
        lastName: profile.lastName
      });
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : "Nie udało się pobrać danych użytkownika");
    } finally {
      setIsLoading(false);
    }
  }, [reset]);
  useEffect(() => {
    void loadProfile();
  }, [loadProfile]);
  const onSubmit = async (values) => {
    setSaveError(null);
    setSaveSuccess(false);
    try {
      const updated = await updateCurrentUserProfile(values);
      setEmail(updated.email);
      reset({
        firstName: updated.firstName,
        lastName: updated.lastName
      });
      setSaveSuccess(true);
    } catch (error) {
      setSaveError(error);
    }
  };
  const onInvalid = (invalidErrors) => {
    setSaveSuccess(false);
    focusFirstFieldError(invalidErrors, setFocus);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsx(Paper, { sx: { p: 4, maxWidth: 500, mx: "auto", borderRadius: 3 }, children: /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ jsx(CircularProgress, {}) }) });
  }
  if (loadError) {
    return /* @__PURE__ */ jsx(Paper, { sx: { p: 4, maxWidth: 500, mx: "auto", borderRadius: 3 }, children: /* @__PURE__ */ jsx(DataLoadAlert, { message: loadError, onRetry: () => void loadProfile() }) });
  }
  return /* @__PURE__ */ jsxs(Paper, { sx: { p: 4, maxWidth: 500, mx: "auto", borderRadius: 3 }, children: [
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 3,
          pb: 3
        },
        children: [
          /* @__PURE__ */ jsx(Avatar, { sx: { width: 80, height: 80, bgcolor: "primary.main" }, children: /* @__PURE__ */ jsx(UserCircle, { size: 64 }) }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold" }, children: "Mój profil" }),
            /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", children: email })
          ] })
        ]
      }
    ),
    saveError ? /* @__PURE__ */ jsx(Box, { sx: { mt: 2 }, children: /* @__PURE__ */ jsx(MutationErrorAlert, { error: saveError, fallbackMessage: "Nie udało się zapisać danych użytkownika." }) }) : null,
    saveSuccess ? /* @__PURE__ */ jsx(Box, { sx: { mt: 2 }, children: /* @__PURE__ */ jsx(Alert, { severity: "success", children: "Dane profilu zostały zapisane." }) }) : null,
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit, onInvalid), noValidate: true, children: [
      /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Imię",
            ...register("firstName"),
            error: Boolean((touchedFields.firstName || isSubmitted) && errors.firstName),
            helperText: touchedFields.firstName || isSubmitted ? errors.firstName?.message : void 0
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Nazwisko",
            ...register("lastName"),
            error: Boolean((touchedFields.lastName || isSubmitted) && errors.lastName),
            helperText: touchedFields.lastName || isSubmitted ? errors.lastName?.message : void 0
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(Button, { variant: "contained", type: "submit", fullWidth: true, sx: { mt: 3 }, disabled: isSubmitting, children: isSubmitting ? /* @__PURE__ */ jsx(CircularProgress, { size: 24, color: "inherit" }) : "Zapisz Zmiany" })
    ] }),
    /* @__PURE__ */ jsx(Divider, { sx: { my: 4 } }),
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", color: "error", sx: { fontWeight: "bold" }, children: "Strefa niebezpieczna" }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 1 }, children: "Usunięcie konta jest na stałe. Znikną wszystkie powiązane dane: sezony, turnieje, drużyny oraz Mój Klub Sportowy." }),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outlined",
        color: "error",
        sx: { mt: 2 },
        onClick: () => {
          setDeleteError(null);
          setWarnDeleteOpen(true);
        },
        children: "Usuń konto"
      }
    ),
    /* @__PURE__ */ jsxs(
      Dialog,
      {
        open: warnDeleteOpen,
        onClose: () => !deleteBusy && setWarnDeleteOpen(false),
        "aria-labelledby": "delete-account-warn-title",
        children: [
          /* @__PURE__ */ jsx(DialogTitle, { id: "delete-account-warn-title", children: "Na pewno usunąć konto?" }),
          /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(Typography, { variant: "body2", children: "Tej operacji nie da się cofnąć. Stracisz dostęp do aplikacji, a wszystkie Twoje dane w systemie zostaną skasowane." }) }),
          /* @__PURE__ */ jsxs(DialogActions, { children: [
            /* @__PURE__ */ jsx(Button, { onClick: () => setWarnDeleteOpen(false), disabled: deleteBusy, children: "Anuluj" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                color: "error",
                variant: "contained",
                onClick: () => {
                  setWarnDeleteOpen(false);
                  setDeletePhrase("");
                  setDeleteError(null);
                  setConfirmDeleteOpen(true);
                },
                disabled: deleteBusy,
                children: "Tak, chcę kontynuować"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      Dialog,
      {
        open: confirmDeleteOpen,
        onClose: () => !deleteBusy && setConfirmDeleteOpen(false),
        "aria-labelledby": "delete-account-confirm-title",
        children: [
          /* @__PURE__ */ jsx(DialogTitle, { id: "delete-account-confirm-title", children: "Ostatnie potwierdzenie" }),
          /* @__PURE__ */ jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: { mb: 2 }, children: "Wpisz swój adres e-mail używany do logowania (ten sam co w profilu). Możesz go skopiować z ramki poniżej." }),
            /* @__PURE__ */ jsx(
              Typography,
              {
                variant: "body2",
                sx: {
                  mb: 1,
                  fontFamily: "monospace",
                  bgcolor: "action.hover",
                  p: 1,
                  borderRadius: 1,
                  wordBreak: "break-all"
                },
                children: email
              }
            ),
            /* @__PURE__ */ jsx(
              TextField,
              {
                fullWidth: true,
                label: "Adres e-mail (login)",
                value: deletePhrase,
                onChange: (e) => setDeletePhrase(e.target.value),
                disabled: deleteBusy,
                autoComplete: "off"
              }
            ),
            deleteError ? /* @__PURE__ */ jsx(Box, { sx: { mt: 2 }, children: /* @__PURE__ */ jsx(MutationErrorAlert, { error: deleteError, fallbackMessage: "Nie udało się usunąć konta." }) }) : null
          ] }),
          /* @__PURE__ */ jsxs(DialogActions, { children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: () => {
                  setConfirmDeleteOpen(false);
                  setDeletePhrase("");
                },
                disabled: deleteBusy,
                children: "Anuluj"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                color: "error",
                variant: "contained",
                disabled: deleteBusy || !emailsMatchForDeletion(deletePhrase, email),
                onClick: () => {
                  void (async () => {
                    setDeleteBusy(true);
                    setDeleteError(null);
                    try {
                      await deleteCurrentUserAccount(deletePhrase.trim());
                      ensureSuperTokensFrontendInitialized();
                      await signOut();
                      window.location.href = "/";
                    } catch (error) {
                      setDeleteError(error);
                    } finally {
                      setDeleteBusy(false);
                    }
                  })();
                },
                children: deleteBusy ? /* @__PURE__ */ jsx(CircularProgress, { size: 22, color: "inherit" }) : "Usuń konto na zawsze"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function ProfilePage() {
  return /* @__PURE__ */ jsx(ThemeRegistry, { children: /* @__PURE__ */ jsx(AppShell, { currentPath: "/profile", children: /* @__PURE__ */ jsx(ProfileContent, {}) }) });
}

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mój Profil" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProfilePage", ProfilePage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ProfilePage/ProfilePage", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/profile.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
