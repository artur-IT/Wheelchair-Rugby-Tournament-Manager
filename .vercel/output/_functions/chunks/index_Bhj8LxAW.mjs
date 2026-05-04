import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_BRj9trZt.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useMemo, forwardRef } from 'react';
import { Star, Pencil, Trash2, ChevronRight, Users, UserCircle } from 'lucide-react';
import { D as DataLoadAlert, b as Avatar, A as AppShell } from './DataLoadAlert_DbJvhLOL.mjs';
import { Q as QueryProvider } from './QueryProvider_CFYP5LAL.mjs';
import { t as Box, A as Alert, v as Button, C as CircularProgress, _ as IconButton, T as Typography, w as ThemeRegistry, n as Paper } from './ThemeRegistry_D8eYcNmV.mjs';
import { q as queryKeys } from './queryKeys_DJxV4cae.mjs';
import { C as ConfirmationDialog, D as DialogContentText } from './ConfirmationDialog_CE1Tx5wT.mjs';
import { M as MutationErrorAlert } from './MutationErrorAlert_BOjWZslR.mjs';
import { s as sanitizePhone, M as MAX_SHORT_TEXT } from './validateInputs_c5edMn88.mjs';
import { D as Dialog, a as DialogTitle, b as DialogContent } from './DialogTitle_BL6--ISK.mjs';
import { T as TextField, F as FormControl, I as InputLabel, S as Select } from './TextField_BVjeauhA.mjs';
import { D as DialogActions } from './DialogActions_I4H8kn9g.mjs';
import { P as PersonnelTable, T as Tab, u as useMediaQuery, a as Tabs } from './PersonnelTable_DKYgWmQ-.mjs';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { f as fetchPersonnelBySeason, b as createPersonnel, a as updatePersonnel, g as deletePersonnel, h as fetchTeamsBySeason } from './teams_KzoR5amP.mjs';
import { u as useDefaultSeason } from './useDefaultSeason_WL1XSxS2.mjs';
import { a as fetchSeasonsList, d as deleteSeasonById } from './seasons_D51nLtJ4.mjs';
import { M as MenuItem } from './MenuItem_BNajpNiW.mjs';
import { G as Grid } from './Grid_1Y1FfHvX.mjs';
import { C as Card, a as CardContent } from './CardContent_BdwUrVmM.mjs';

const REFEREES_CONFIG = {
  apiEndpoint: "/api/referees",
  queryKey: (seasonId) => queryKeys.referees.bySeason(seasonId),
  title: "Sędziowie",
  noSeasonMessage: "Wybierz sezon, aby zarządzać sędziami.",
  emptyMessage: "Brak zapisanych sędziów. Dodaj pierwszego sędziego, aby rozdzielać mecze.",
  emptyActionLabel: "Dodaj Sędziego",
  dialogTitles: {
    add: "Dodaj Sędziego",
    edit: "Edytuj Sędziego"
  },
  deleteDialogTitle: "Usuń sędziego",
  messages: {
    loadError: "Nie udało się pobrać sędziów",
    loadFallback: "Wystąpił błąd podczas pobierania sędziów",
    createFallback: "Wystąpił błąd podczas zapisu sędziego",
    updateFallback: "Wystąpił błąd podczas zapisu sędziego",
    deleteFallback: "Wystąpił błąd podczas usuwania"
  }
};
const CLASSIFIERS_CONFIG = {
  apiEndpoint: "/api/classifiers",
  queryKey: (seasonId) => queryKeys.classifiers.bySeason(seasonId),
  title: "Klasyfikatorzy",
  noSeasonMessage: "Wybierz sezon, aby zarządzać klasyfikatorami.",
  emptyMessage: "Brak zapisanych klasyfikatorów. Dodaj ich, aby przeprowadzali badania zawodników.",
  emptyActionLabel: "Dodaj Klasyfikatora",
  dialogTitles: {
    add: "Dodaj Klasyfikatora",
    edit: "Edytuj Klasyfikatora"
  },
  deleteDialogTitle: "Usuń klasyfikatora",
  messages: {
    loadError: "Nie udało się pobrać klasyfikatorów",
    loadFallback: "Wystąpił błąd podczas pobierania klasyfikatorów",
    createFallback: "Wystąpił błąd podczas zapisu klasyfikatora",
    updateFallback: "Wystąpił błąd podczas zapisu klasyfikatora",
    deleteFallback: "Wystąpił błąd podczas usuwania"
  }
};

const personDialogInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: ""
};
function AddPersonDialog({
  open,
  loading,
  error,
  dialogTitle,
  submitLabel,
  initialValues,
  onClose,
  onSubmit
}) {
  const [form, setForm] = useState(personDialogInitialState);
  const [localError, setLocalError] = useState(null);
  useEffect(() => {
    if (!open) return;
    setForm(initialValues ?? personDialogInitialState);
    setLocalError(null);
  }, [initialValues, open]);
  const handleFieldChange = (field) => (event) => {
    const rawValue = event.target.value;
    setForm((current) => ({ ...current, [field]: rawValue }));
  };
  const handlePhoneChange = (event) => setForm((current) => ({ ...current, phone: sanitizePhone(event.target.value) }));
  const handleSave = () => {
    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    if (!firstName || !lastName) {
      setLocalError("Imię i nazwisko są wymagane");
      return;
    }
    if (firstName.length > MAX_SHORT_TEXT || lastName.length > MAX_SHORT_TEXT) {
      setLocalError(`Imię i nazwisko nie mogą przekraczać ${MAX_SHORT_TEXT} znaków`);
      return;
    }
    const email = form.email.trim();
    if (email && email.length > MAX_SHORT_TEXT) {
      setLocalError(`E-mail nie może przekraczać ${MAX_SHORT_TEXT} znaków`);
      return;
    }
    const phone = form.phone.trim();
    if (phone.length !== 9) {
      setLocalError("Telefon jest wymagany i musi zawierać dokładnie 9 cyfr");
      return;
    }
    setLocalError(null);
    onSubmit({
      firstName,
      lastName,
      email: email || null,
      phone
    });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose, fullWidth: true, maxWidth: "xs", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: dialogTitle }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(Box, { sx: { mt: 1, display: "flex", flexDirection: "column", gap: 2 }, children: [
      localError && /* @__PURE__ */ jsx(Alert, { severity: "error", children: localError }),
      error && /* @__PURE__ */ jsx(Alert, { severity: "error", children: error }),
      /* @__PURE__ */ jsx(TextField, { label: "Imię", value: form.firstName, onChange: handleFieldChange("firstName") }),
      /* @__PURE__ */ jsx(TextField, { label: "Nazwisko", value: form.lastName, onChange: handleFieldChange("lastName") }),
      /* @__PURE__ */ jsx(TextField, { label: "E-mail", type: "email", value: form.email, onChange: handleFieldChange("email") }),
      /* @__PURE__ */ jsx(
        TextField,
        {
          label: "Telefon",
          placeholder: "9 cyfr",
          inputMode: "numeric",
          value: form.phone,
          onChange: handlePhoneChange
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsx(Button, { onClick: onClose, disabled: loading, children: "Anuluj" }),
      /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleSave, disabled: loading, children: loading ? /* @__PURE__ */ jsx(CircularProgress, { size: 18 }) : submitLabel ?? "Zapisz" })
    ] })
  ] });
}

const toInitialValues = (person) => person ? {
  firstName: person.firstName,
  lastName: person.lastName,
  email: person.email ?? "",
  phone: person.phone ? String(person.phone) : ""
} : void 0;
function usePersonnelTab(seasonId, config) {
  const queryClient = useQueryClient();
  const { apiEndpoint, queryKey, dialogTitles, messages } = config;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogError, setDialogError] = useState(null);
  const [editingPerson, setEditingPerson] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const invalidateList = () => {
    if (!seasonId) return;
    void queryClient.invalidateQueries({ queryKey: queryKey(seasonId) });
  };
  const {
    data: people = [],
    isPending: loading,
    isError,
    error: queryError,
    refetch
  } = useQuery({
    queryKey: queryKey(seasonId || "__none__"),
    queryFn: ({ signal }) => {
      if (!seasonId) return Promise.reject(new Error("Brak sezonu"));
      return fetchPersonnelBySeason(apiEndpoint, seasonId, messages.loadError, signal);
    },
    enabled: Boolean(seasonId)
  });
  const createMutation = useMutation({
    mutationFn: async (payload) => {
      if (!seasonId) throw new Error("Brak sezonu");
      return createPersonnel(apiEndpoint, { ...payload, seasonId });
    },
    onMutate: async (payload) => {
      const targetSeasonId = seasonId;
      await queryClient.cancelQueries({ queryKey: queryKey(targetSeasonId) });
      const previousPeople = queryClient.getQueryData(queryKey(targetSeasonId)) ?? [];
      const optimisticPerson = {
        id: `optimistic-${crypto.randomUUID()}`,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email ?? void 0,
        phone: payload.phone
      };
      queryClient.setQueryData(queryKey(targetSeasonId), (current) => [...current ?? [], optimisticPerson]);
      return { previousPeople, targetSeasonId };
    },
    onError: (error, _vars, context) => {
      if (context?.previousPeople) {
        queryClient.setQueryData(queryKey(context.targetSeasonId), context.previousPeople);
      }
      setDialogError(error instanceof Error ? error.message : messages.createFallback);
    },
    onSuccess: () => {
      setDialogOpen(false);
      setEditingPerson(null);
      setDialogError(null);
    },
    onSettled: invalidateList
  });
  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => updatePersonnel(apiEndpoint, id, payload),
    onMutate: async ({ id, payload }) => {
      await queryClient.cancelQueries({ queryKey: queryKey(seasonId) });
      const previousPeople = queryClient.getQueryData(queryKey(seasonId)) ?? [];
      queryClient.setQueryData(
        queryKey(seasonId),
        (current) => (current ?? []).map(
          (person) => person.id === id ? {
            ...person,
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phone: payload.phone
          } : person
        )
      );
      return { previousPeople };
    },
    onError: (error, _vars, context) => {
      if (context?.previousPeople) {
        queryClient.setQueryData(queryKey(seasonId), context.previousPeople);
      }
      setDialogError(error instanceof Error ? error.message : messages.updateFallback);
    },
    onSuccess: () => {
      setDialogOpen(false);
      setEditingPerson(null);
      setDialogError(null);
    },
    onSettled: invalidateList
  });
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePersonnel(apiEndpoint, id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: queryKey(seasonId) });
      const previousPeople = queryClient.getQueryData(queryKey(seasonId)) ?? [];
      queryClient.setQueryData(
        queryKey(seasonId),
        (current) => (current ?? []).filter((person) => person.id !== id)
      );
      return { previousPeople };
    },
    onError: (_error, _id, context) => {
      if (context?.previousPeople) {
        queryClient.setQueryData(queryKey(seasonId), context.previousPeople);
      }
    },
    onSuccess: () => setDeleteTarget(null),
    onSettled: invalidateList
  });
  const resetDialogMutations = () => {
    createMutation.reset();
    updateMutation.reset();
  };
  const handleAddClick = () => {
    setEditingPerson(null);
    setDialogError(null);
    resetDialogMutations();
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
    setDialogError(null);
    setEditingPerson(null);
    resetDialogMutations();
  };
  const handleDialogSubmit = (payload) => editingPerson ? updateMutation.mutate({ id: editingPerson.id, payload }) : createMutation.mutate(payload);
  const handleEditClick = (person) => {
    setEditingPerson(person);
    setDialogError(null);
    resetDialogMutations();
    setDialogOpen(true);
  };
  const handleDeleteClick = (person) => {
    deleteMutation.reset();
    setDeleteTarget(person);
  };
  const handleDeleteClose = () => {
    setDeleteTarget(null);
    deleteMutation.reset();
  };
  const handleDeleteConfirmed = () => {
    if (!deleteTarget) return;
    deleteMutation.mutate(deleteTarget.id);
  };
  return {
    people,
    loading,
    loadError: isError && queryError instanceof Error ? queryError.message : null,
    refetch: () => void refetch(),
    dialogOpen,
    dialogError,
    deleteTarget,
    isDeleteError: deleteMutation.isError,
    deleteError: deleteMutation.error,
    submitting: createMutation.isPending || updateMutation.isPending,
    isDeletePending: deleteMutation.isPending,
    deletingId: deleteMutation.isPending ? deleteTarget?.id ?? null : null,
    dialogTitle: editingPerson ? dialogTitles.edit : dialogTitles.add,
    submitLabel: editingPerson ? "Aktualizuj" : "Zapisz",
    initialValues: toInitialValues(editingPerson),
    handleAddClick,
    handleEditClick,
    handleDeleteClick,
    handleDeleteClose,
    handleDeleteConfirmed,
    handleDialogClose,
    handleDialogSubmit
  };
}

function PersonnelTab({ seasonId, config }) {
  const { title, noSeasonMessage, emptyMessage, emptyActionLabel, deleteDialogTitle, messages } = config;
  const {
    people,
    loading,
    loadError,
    refetch,
    dialogOpen,
    dialogError,
    deleteTarget,
    isDeleteError,
    deleteError,
    submitting,
    isDeletePending,
    deletingId,
    dialogTitle,
    submitLabel,
    initialValues,
    handleAddClick,
    handleEditClick,
    handleDeleteClick,
    handleDeleteClose,
    handleDeleteConfirmed,
    handleDialogClose,
    handleDialogSubmit
  } = usePersonnelTab(seasonId, config);
  if (!seasonId) {
    return /* @__PURE__ */ jsx(Alert, { severity: "info", sx: { mb: 2 }, children: noSeasonMessage });
  }
  if (loading) {
    return /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) });
  }
  if (loadError) {
    return /* @__PURE__ */ jsx(DataLoadAlert, { message: loadError, onRetry: refetch });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isDeleteError ? /* @__PURE__ */ jsx(Box, { sx: { mb: 2 }, children: /* @__PURE__ */ jsx(MutationErrorAlert, { error: deleteError, fallbackMessage: messages.deleteFallback }) }) : null,
    people.length === 0 ? /* @__PURE__ */ jsx(
      Alert,
      {
        severity: "info",
        sx: { mb: 2 },
        action: /* @__PURE__ */ jsx(Button, { color: "inherit", size: "small", onClick: handleAddClick, children: emptyActionLabel }),
        children: emptyMessage
      }
    ) : null,
    /* @__PURE__ */ jsx(
      PersonnelTable,
      {
        title,
        data: people,
        onAddClick: handleAddClick,
        onEdit: handleEditClick,
        onDelete: handleDeleteClick,
        deletingId
      }
    ),
    /* @__PURE__ */ jsx(
      AddPersonDialog,
      {
        open: dialogOpen,
        loading: submitting,
        error: dialogError,
        dialogTitle,
        submitLabel,
        initialValues,
        onClose: handleDialogClose,
        onSubmit: handleDialogSubmit
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(deleteTarget),
        onClose: handleDeleteClose,
        onConfirm: handleDeleteConfirmed,
        loading: isDeletePending,
        title: deleteDialogTitle,
        description: /* @__PURE__ */ jsxs(DialogContentText, { children: [
          "Czy na pewno chcesz usunąć",
          " ",
          /* @__PURE__ */ jsxs("strong", { children: [
            deleteTarget?.firstName,
            " ",
            deleteTarget?.lastName
          ] }),
          "? Operacja jest nieodwracalna."
        ] })
      }
    )
  ] });
}

function SeasonsManager({ onSeasonChange }) {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const { defaultSeasonId, saveDefault } = useDefaultSeason();
  const {
    data: seasonsData,
    isPending: seasonsLoading,
    isError: seasonsQueryFailed,
    error: seasonsQueryError,
    refetch: refetchSeasons
  } = useQuery({
    queryKey: queryKeys.seasons.list(),
    queryFn: ({ signal }) => fetchSeasonsList(signal)
  });
  const deleteSeasonMutation = useMutation({
    mutationFn: deleteSeasonById,
    onSuccess: (_, deletedId) => {
      queryClient.setQueryData(
        queryKeys.seasons.list(),
        (old) => (old ?? []).filter((season) => season.id !== deletedId)
      );
      setSelectedId((prev) => {
        if (prev !== deletedId) return prev;
        const remaining = queryClient.getQueryData(queryKeys.seasons.list()) ?? [];
        return remaining[0]?.id ?? "";
      });
      void queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    }
  });
  const seasons = useMemo(() => seasonsData ?? [], [seasonsData]);
  const loadError = seasonsQueryFailed && seasonsQueryError instanceof Error ? seasonsQueryError.message : null;
  useEffect(() => {
    if (seasons.length === 0) {
      setSelectedId("");
      return;
    }
    const savedExists = Boolean(defaultSeasonId && seasons.some((season) => season.id === defaultSeasonId));
    setSelectedId(savedExists ? defaultSeasonId ?? "" : seasons[0].id);
  }, [defaultSeasonId, seasons]);
  useEffect(() => {
    if (!selectedId) return;
    onSeasonChange(selectedId);
  }, [onSeasonChange, selectedId]);
  const handleDeleteConfirm = () => {
    setConfirmOpen(false);
    deleteSeasonMutation.mutate(selectedId);
  };
  const selectedSeason = seasons.find((season) => season.id === selectedId);
  if (seasonsLoading) return /* @__PURE__ */ jsx(CircularProgress, { size: 20, sx: { mb: 3 } });
  if (loadError && seasons.length === 0) {
    return /* @__PURE__ */ jsx(DataLoadAlert, { message: loadError, onRetry: () => void refetchSeasons(), sx: { mb: 3 } });
  }
  if (seasons.length === 0) {
    return /* @__PURE__ */ jsx(
      Alert,
      {
        severity: "warning",
        sx: { mb: 3 },
        action: /* @__PURE__ */ jsx(Button, { color: "inherit", size: "small", component: "a", href: "/settings/seasons/new", children: "Utwórz sezon" }),
        children: "Brak sezonu — dodaj drużyny dopiero po utworzeniu sezonu."
      }
    );
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 3, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxs(FormControl, { size: "small", sx: { minWidth: 240 }, children: [
        /* @__PURE__ */ jsx(InputLabel, { children: "Sezon" }),
        /* @__PURE__ */ jsx(
          Select,
          {
            label: "Sezon",
            value: selectedId,
            onChange: (event) => setSelectedId(event.target.value),
            children: seasons.map((season) => /* @__PURE__ */ jsxs(MenuItem, { value: season.id, children: [
              season.name,
              season.year ? ` (${season.year})` : ""
            ] }, season.id))
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          onClick: () => saveDefault(selectedId),
          disabled: !selectedId,
          title: "Ustaw jako domyślny sezon",
          color: selectedId === defaultSeasonId ? "warning" : "default",
          children: /* @__PURE__ */ jsx(Star, { size: 18, fill: selectedId === defaultSeasonId ? "currentColor" : "none" })
        }
      ),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          component: "a",
          href: `/settings/seasons/${selectedId}/edit`,
          disabled: !selectedId,
          title: "Edytuj sezon",
          children: /* @__PURE__ */ jsx(Pencil, { size: 18 })
        }
      ),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          color: "error",
          onClick: () => setConfirmOpen(true),
          disabled: deleteSeasonMutation.isPending || !selectedId,
          title: "Usuń sezon",
          children: deleteSeasonMutation.isPending ? /* @__PURE__ */ jsx(CircularProgress, { size: 20 }) : /* @__PURE__ */ jsx(Trash2, { size: 18 })
        }
      ),
      /* @__PURE__ */ jsx(Button, { variant: "outlined", size: "small", component: "a", href: "/settings/seasons/new", children: "+ Nowy sezon" }),
      deleteSeasonMutation.isError && deleteSeasonMutation.error instanceof Error ? /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { py: 0 }, children: deleteSeasonMutation.error.message }) : null
    ] }),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: confirmOpen,
        onClose: () => setConfirmOpen(false),
        onConfirm: handleDeleteConfirm,
        loading: deleteSeasonMutation.isPending,
        title: "Usuń sezon",
        description: /* @__PURE__ */ jsxs(DialogContentText, { children: [
          "Czy na pewno chcesz usunąć sezon ",
          /* @__PURE__ */ jsx("strong", { children: selectedSeason?.name }),
          "? Tej operacji nie można cofnąć."
        ] })
      }
    )
  ] });
}

function TeamsTab({ seasonId }) {
  const {
    data: teams = [],
    isPending: loadingTeams,
    isError: teamsQueryFailed,
    error: teamsQueryError,
    refetch: refetchTeams
  } = useQuery({
    queryKey: queryKeys.teams.bySeason(seasonId || "__none__"),
    queryFn: ({ signal }) => {
      if (!seasonId) return Promise.reject(new Error("Brak sezonu"));
      return fetchTeamsBySeason(seasonId, signal);
    },
    enabled: Boolean(seasonId)
  });
  const teamsError = teamsQueryFailed && teamsQueryError instanceof Error ? teamsQueryError.message : null;
  if (!seasonId) {
    return /* @__PURE__ */ jsx(Alert, { severity: "info", sx: { mb: 2 }, children: "Wybierz sezon, aby zobaczyć drużyny." });
  }
  if (loadingTeams) {
    return /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) });
  }
  if (teamsError) {
    return /* @__PURE__ */ jsx(DataLoadAlert, { message: teamsError, onRetry: () => void refetchTeams() });
  }
  if (teams.length === 0) {
    return /* @__PURE__ */ jsx(
      Alert,
      {
        severity: "info",
        sx: { mb: 2 },
        action: /* @__PURE__ */ jsx(Button, { component: "a", href: "/settings/teams/new", color: "inherit", size: "small", children: "Dodaj drużynę" }),
        children: "Brak drużyn. Dodaj pierwszą drużynę, aby zobaczyć ją na liście."
      }
    );
  }
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold" }, children: "Lista Drużyn" }),
      /* @__PURE__ */ jsx(Button, { component: "a", href: "/settings/teams/new", variant: "contained", color: "success", size: "small", children: "+ Nowa Drużyna" })
    ] }),
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: 2, children: teams.map((team) => /* @__PURE__ */ jsx(
      Grid,
      {
        size: "auto",
        sx: {
          width: { xs: "100%", sm: 340 },
          maxWidth: "100%"
        },
        children: /* @__PURE__ */ jsxs(
          Card,
          {
            sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              px: 2.5,
              width: "100%"
            },
            children: [
              /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ jsx(Avatar, { sx: { bgcolor: "info.main" }, children: team.name[0] ?? "?" }),
                /* @__PURE__ */ jsxs(Box, { children: [
                  /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: "bold", color: "info.main" }, children: team.name }),
                  /* @__PURE__ */ jsxs(Typography, { variant: "caption", color: "textSecondary", children: [
                    team.players?.length ?? 0,
                    " zawodników"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(IconButton, { component: "a", href: `/settings/teams/${team.id}`, size: "small", children: /* @__PURE__ */ jsx(ChevronRight, {}) })
            ]
          }
        )
      },
      team.id
    )) })
  ] });
}

const StyledTab = forwardRef((props, ref) => /* @__PURE__ */ jsx(Tab, { ref, component: "a", iconPosition: "start", ...props }));
StyledTab.displayName = "StyledTab";
function SettingsContent() {
  const [activeTab, setActiveTab] = useState("teams");
  const [selectedSeasonId, setSelectedSeasonId] = useState("");
  const isWide = useMediaQuery("(min-width:1000px)");
  return /* @__PURE__ */ jsxs(Box, { sx: { maxWidth: 1100, mx: "auto" }, children: [
    /* @__PURE__ */ jsxs(Box, { sx: { mb: 4 }, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h4", sx: { fontWeight: "bold", mb: 0.5 }, children: "Ustawienia Sezonu" }),
      /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: "Zarządzaj globalnymi danymi ligi." })
    ] }),
    /* @__PURE__ */ jsx(SeasonsManager, { onSeasonChange: setSelectedSeasonId }),
    /* @__PURE__ */ jsxs(Paper, { sx: { borderRadius: 3 }, children: [
      /* @__PURE__ */ jsxs(
        Tabs,
        {
          value: activeTab,
          onChange: (_, value) => setActiveTab(value),
          variant: isWide ? "standard" : "fullWidth",
          sx: isWide ? {
            "& .MuiTab-root": {
              minWidth: "auto",
              px: 2.5
            },
            "& .MuiTabs-flexContainer": {
              width: "fit-content"
            }
          } : void 0,
          children: [
            /* @__PURE__ */ jsx(StyledTab, { label: "Drużyny", value: "teams", icon: /* @__PURE__ */ jsx(Users, { size: 18 }) }),
            /* @__PURE__ */ jsx(StyledTab, { label: "Sędziowie", value: "referees", icon: /* @__PURE__ */ jsx(UserCircle, { size: 18 }) }),
            /* @__PURE__ */ jsx(StyledTab, { label: "Klasyfikatorzy", value: "classifiers", icon: /* @__PURE__ */ jsx(UserCircle, { size: 18 }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(CardContent, { sx: { minHeight: 400 }, children: [
        activeTab === "teams" ? /* @__PURE__ */ jsx(TeamsTab, { seasonId: selectedSeasonId }) : null,
        activeTab === "referees" ? /* @__PURE__ */ jsx(PersonnelTab, { seasonId: selectedSeasonId, config: REFEREES_CONFIG }) : null,
        activeTab === "classifiers" ? /* @__PURE__ */ jsx(PersonnelTab, { seasonId: selectedSeasonId, config: CLASSIFIERS_CONFIG }) : null
      ] })
    ] })
  ] });
}
function SettingsPage() {
  return /* @__PURE__ */ jsx(QueryProvider, { children: /* @__PURE__ */ jsx(ThemeRegistry, { children: /* @__PURE__ */ jsx(AppShell, { currentPath: "/settings", children: /* @__PURE__ */ jsx(SettingsContent, {}) }) }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ustawienia Sezonu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SettingsPage", SettingsPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/features/settings/components/SettingsPage/SettingsPage", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/settings/index.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/settings/index.astro";
const $$url = "/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
