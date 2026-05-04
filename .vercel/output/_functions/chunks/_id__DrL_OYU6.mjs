import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_BRj9trZt.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { A as AppShell, D as DataLoadAlert } from './DataLoadAlert_DbJvhLOL.mjs';
import { Q as QueryProvider } from './QueryProvider_CFYP5LAL.mjs';
import { p as parseOptionalNumber, t as toWebsiteHref, a as TeamFormContent, b as buildPlayerPayloadFromEntity } from './TeamForm_DcfAvcqr.mjs';
import { A as Alert, v as Button, C as CircularProgress, w as ThemeRegistry, t as Box, T as Typography, n as Paper } from './ThemeRegistry_D8eYcNmV.mjs';
import './zodPl_AymT4aL4.mjs';
import { z as playerNumberSchema, a as requiredLastNameSchema, b as requiredFirstNameSchema, y as playerClassificationSchema } from './validateInputs_c5edMn88.mjs';
import { D as Dialog, a as DialogTitle, b as DialogContent } from './DialogTitle_BL6--ISK.mjs';
import { G as Grid } from './Grid_1Y1FfHvX.mjs';
import { T as TextField } from './TextField_BVjeauhA.mjs';
import { D as DialogActions } from './DialogActions_I4H8kn9g.mjs';
import { z } from 'zod';
import { C as ConfirmationDialog } from './ConfirmationDialog_CE1Tx5wT.mjs';
import { b as blurActiveElement } from './blurActiveElement_iWDIUN-2.mjs';
import { d as fetchTeamById, e as deleteTeamById, u as updateTeamById } from './teams_KzoR5amP.mjs';
import { q as queryKeys } from './queryKeys_DJxV4cae.mjs';
import { L as Link } from './Link_Y3CcU4d0.mjs';
import { T as TableContainer, a as Table, b as TableHead, c as TableRow, d as TableCell, e as TableBody } from './TableRow_CirYsbnw.mjs';
import { C as Chip } from './Chip_Dd9yZqZp.mjs';

const playerSchema = z.object({
  firstName: requiredFirstNameSchema,
  lastName: requiredLastNameSchema,
  classification: z.preprocess((v) => v === null ? void 0 : v, playerClassificationSchema.optional()),
  number: playerNumberSchema
});
function TeamNewPlayer({
  open,
  onClose,
  onSave,
  playerActionError,
  playerActionLoading,
  newPlayerForm,
  setNewPlayerForm
}) {
  const [formErrors, setFormErrors] = useState({});
  const handleSave = () => {
    if (!newPlayerForm) return;
    const result = playerSchema.safeParse(newPlayerForm);
    if (!result.success) {
      const errors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (!errors[field]) errors[field] = issue.message;
      }
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    onSave();
  };
  const handleClose = () => {
    setFormErrors({});
    onClose();
  };
  const clearFieldError = (field) => {
    if (!formErrors[field]) return;
    setFormErrors((prev) => ({ ...prev, [field]: void 0 }));
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose: playerActionLoading ? void 0 : handleClose, maxWidth: "xs", fullWidth: true, disableRestoreFocus: true, children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: "Dodaj zawodnika" }),
    /* @__PURE__ */ jsxs(DialogContent, { children: [
      playerActionError && /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mt: 1, mb: 1 }, children: playerActionError }),
      newPlayerForm && /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, sx: { pt: 1 }, children: [
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            label: "Imię",
            value: newPlayerForm.firstName,
            onChange: (e) => {
              setNewPlayerForm((form) => form ? { ...form, firstName: e.target.value } : form);
              clearFieldError("firstName");
            },
            fullWidth: true,
            size: "small",
            error: !!formErrors.firstName,
            helperText: formErrors.firstName
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            label: "Nazwisko",
            value: newPlayerForm.lastName,
            onChange: (e) => {
              setNewPlayerForm((form) => form ? { ...form, lastName: e.target.value } : form);
              clearFieldError("lastName");
            },
            fullWidth: true,
            size: "small",
            error: !!formErrors.lastName,
            helperText: formErrors.lastName
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            label: "Klasyfikacja",
            type: "number",
            inputProps: { inputMode: "decimal" },
            value: newPlayerForm.classification ?? "",
            onChange: (e) => {
              const numericValue = parseOptionalNumber(e.target.value) ?? null;
              setNewPlayerForm((form) => form ? { ...form, classification: numericValue } : form);
              clearFieldError("classification");
            },
            fullWidth: true,
            size: "small",
            error: !!formErrors.classification,
            helperText: formErrors.classification
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
          TextField,
          {
            label: "Numer",
            type: "number",
            inputProps: { inputMode: "numeric" },
            value: newPlayerForm.number,
            onChange: (e) => {
              const val = e.target.value;
              setNewPlayerForm((form) => form ? { ...form, number: val === "" ? 0 : Number(val) } : form);
              clearFieldError("number");
            },
            fullWidth: true,
            size: "small",
            error: !!formErrors.number,
            helperText: formErrors.number
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsx(Button, { onClick: handleClose, disabled: playerActionLoading, children: "Anuluj" }),
      /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleSave, disabled: playerActionLoading || !newPlayerForm, children: playerActionLoading ? /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) : "Dodaj zawodnika" })
    ] })
  ] });
}

const MAX_PLAYER_NUMBER = 99;
const playerNumberLimitError = `Numer zawodnika nie może być większy niż ${MAX_PLAYER_NUMBER}`;
function getPlayerNumberError(number) {
  if (number === void 0 || number === null) return null;
  if (number < 0) return "Numer zawodnika nie może być ujemny";
  return number > MAX_PLAYER_NUMBER ? playerNumberLimitError : null;
}
function getPlayerClassificationError(classification) {
  if (classification === void 0 || classification === null) return null;
  const result = playerClassificationSchema.safeParse(classification);
  return result.success ? null : result.error.issues[0]?.message ?? "Nieprawidłowa klasyfikacja";
}
function getDuplicatePlayerNumberError(playersPayload) {
  const seenNumbers = /* @__PURE__ */ new Set();
  for (const player of playersPayload) {
    if (player.number === void 0) continue;
    if (seenNumbers.has(player.number)) {
      return `Numer ${player.number} jest już zajęty w tej drużynie`;
    }
    seenNumbers.add(player.number);
  }
  return null;
}
const toEditForm = (player) => ({
  firstName: player.firstName,
  lastName: player.lastName,
  classification: player.classification != null ? String(player.classification) : "",
  number: player.number != null ? String(player.number) : ""
});
function buildTeamUpdateBody(team, players) {
  return {
    name: team.name,
    players
  };
}
function TeamDetails({ id }) {
  return /* @__PURE__ */ jsx(QueryProvider, { children: /* @__PURE__ */ jsx(ThemeRegistry, { children: /* @__PURE__ */ jsx(AppShell, { currentPath: "/settings", children: /* @__PURE__ */ jsx(TeamDetailsContent, { id }) }) }) });
}
function TeamDetailsContent({ id }) {
  const queryClient = useQueryClient();
  const teamQueryKey = queryKeys.teams.detail(id);
  const {
    data: team,
    isPending: loading,
    isError,
    error: queryError,
    refetch
  } = useQuery({
    queryKey: teamQueryKey,
    queryFn: ({ signal }) => fetchTeamById(id, signal)
  });
  const deleteTeamMutation = useMutation({
    mutationFn: deleteTeamById,
    onSuccess: () => {
      blurActiveElement();
      window.location.assign("/settings");
    }
  });
  const updatePlayersMutation = useMutation({
    mutationFn: async (playersPayload) => {
      if (!team) throw new Error("Nie znaleziono drużyny");
      return updateTeamById(
        team.id,
        buildTeamUpdateBody(team, playersPayload)
      );
    }
  });
  const setTeamInCache = (updated) => {
    queryClient.setQueryData(teamQueryKey, updated);
  };
  const [editOpen, setEditOpen] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [deleteConfirmPlayer, setDeleteConfirmPlayer] = useState(null);
  const [playerActionError, setPlayerActionError] = useState(null);
  const [editForm, setEditForm] = useState(null);
  const [addingNewPlayer, setAddingNewPlayer] = useState(false);
  const [newPlayerForm, setNewPlayerForm] = useState(null);
  const [deleteTeamDialogOpen, setDeleteTeamDialogOpen] = useState(false);
  if (loading) {
    return /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 8 }, children: /* @__PURE__ */ jsx(CircularProgress, {}) });
  }
  if (isError) {
    const message = queryError instanceof Error ? queryError.message : "Wystąpił błąd pobierania";
    return /* @__PURE__ */ jsx(DataLoadAlert, { message, onRetry: () => void refetch() });
  }
  if (!team) {
    return /* @__PURE__ */ jsx(Typography, { children: "Nie znaleziono drużyny." });
  }
  const players = team.players ?? [];
  const staff = team.staff ?? [];
  const handleEditClick = () => setEditOpen(true);
  const handleEditClose = () => {
    blurActiveElement();
    setEditOpen(false);
  };
  const handleEditSaved = (updated) => {
    setTeamInCache(updated);
    blurActiveElement();
    setEditOpen(false);
  };
  const handleDeleteTeamClick = () => {
    deleteTeamMutation.reset();
    setDeleteTeamDialogOpen(true);
  };
  const handleDeleteTeamClose = () => {
    if (deleteTeamMutation.isPending) return;
    blurActiveElement();
    deleteTeamMutation.reset();
    setDeleteTeamDialogOpen(false);
  };
  const handleDeleteTeamConfirm = () => {
    if (!team) return;
    deleteTeamMutation.mutate(team.id);
  };
  const deleteTeamErrorMessage = deleteTeamMutation.error instanceof Error ? deleteTeamMutation.error.message : null;
  const handleEditPlayer = (player) => {
    setEditingPlayer(player);
    setEditForm(toEditForm(player));
  };
  const handleEditPlayerClose = () => {
    blurActiveElement();
    updatePlayersMutation.reset();
    setEditingPlayer(null);
    setEditForm(null);
    setPlayerActionError(null);
  };
  const handleDeletePlayerClick = (player) => setDeleteConfirmPlayer(player);
  const handleDeleteConfirmClose = () => {
    blurActiveElement();
    updatePlayersMutation.reset();
    setDeleteConfirmPlayer(null);
    setPlayerActionError(null);
  };
  const updateTeamPlayers = async (playersPayload) => {
    if (!team) return false;
    updatePlayersMutation.reset();
    setPlayerActionError(null);
    try {
      const updated = await updatePlayersMutation.mutateAsync(playersPayload);
      setTeamInCache(updated);
      return true;
    } catch (e) {
      setPlayerActionError(e instanceof Error ? e.message : "Wystąpił błąd");
      return false;
    }
  };
  const handleEditPlayerSave = async () => {
    if (!team || !editingPlayer || !editForm) return;
    const firstName = editForm.firstName.trim();
    const lastName = editForm.lastName.trim();
    if (!firstName || !lastName) {
      setPlayerActionError("Imię i nazwisko są wymagane");
      return;
    }
    const classification = parseOptionalNumber(editForm.classification);
    const classificationError = getPlayerClassificationError(classification);
    if (classificationError) {
      setPlayerActionError(classificationError);
      return;
    }
    const number = parseOptionalNumber(editForm.number);
    const numberError = getPlayerNumberError(number);
    if (numberError) {
      setPlayerActionError(numberError);
      return;
    }
    const playersPayload = (team.players ?? []).map(
      (p) => p.id === editingPlayer.id ? { id: p.id, firstName, lastName, classification, number } : buildPlayerPayloadFromEntity(p)
    );
    const duplicateNumberError = getDuplicatePlayerNumberError(playersPayload);
    if (duplicateNumberError) {
      setPlayerActionError(duplicateNumberError);
      return;
    }
    const success = await updateTeamPlayers(playersPayload);
    if (success) {
      handleEditPlayerClose();
    }
  };
  const handleDeleteConfirm = async () => {
    if (!team || !deleteConfirmPlayer) return;
    const playersPayload = (team.players ?? []).filter((p) => p.id !== deleteConfirmPlayer.id).map(buildPlayerPayloadFromEntity);
    const success = await updateTeamPlayers(playersPayload);
    if (success) {
      handleDeleteConfirmClose();
    }
  };
  const handleAddNewPlayerClick = () => {
    setNewPlayerForm({
      id: crypto.randomUUID(),
      firstName: "",
      lastName: "",
      classification: void 0,
      number: void 0
    });
    setAddingNewPlayer(true);
  };
  const handleAddPlayerClose = () => {
    blurActiveElement();
    updatePlayersMutation.reset();
    setAddingNewPlayer(false);
    setNewPlayerForm(null);
    setPlayerActionError(null);
  };
  const handleAddPlayerSave = async () => {
    if (!team || !newPlayerForm) return;
    const firstName = newPlayerForm.firstName.trim();
    const lastName = newPlayerForm.lastName.trim();
    if (!firstName || !lastName) {
      setPlayerActionError("Imię i nazwisko są wymagane");
      return;
    }
    const classification = newPlayerForm.classification ?? void 0;
    const classificationError = getPlayerClassificationError(classification ?? void 0);
    if (classificationError) {
      setPlayerActionError(classificationError);
      return;
    }
    const number = newPlayerForm.number != null ? Number(newPlayerForm.number) : void 0;
    const numberError = getPlayerNumberError(number);
    if (numberError) {
      setPlayerActionError(numberError);
      return;
    }
    const playersPayload = [
      ...(team.players ?? []).map(buildPlayerPayloadFromEntity),
      { firstName, lastName, classification, number }
    ];
    const duplicateNumberError = getDuplicatePlayerNumberError(playersPayload);
    if (duplicateNumberError) {
      setPlayerActionError(duplicateNumberError);
      return;
    }
    const success = await updateTeamPlayers(playersPayload);
    if (success) {
      handleAddPlayerClose();
    }
  };
  return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 4 }, children: [
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start"
        },
        children: [
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/settings",
                underline: "hover",
                sx: {
                  color: "primary.main",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mb: 1
                },
                children: "← Powrót do ustawień"
              }
            ),
            /* @__PURE__ */ jsx(Typography, { variant: "h3", sx: { fontWeight: 900, color: "info.main" }, children: team.name }),
            team.websiteUrl ? /* @__PURE__ */ jsx(Link, { href: toWebsiteHref(team.websiteUrl), target: "_blank", rel: "noreferrer", underline: "hover", children: /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: team.websiteUrl }) }) : /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: "Nie podano strony internetowej" }),
            /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: team.city && team.postalCode ? `${team.postalCode} ${team.city} ` : "Nie podano miasta" }),
            /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: team.address ?? "Nie podano adresu" })
          ] }),
          /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", gap: 1.5 }, children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outlined",
                color: "error",
                sx: { borderRadius: 4, fontWeight: "bold" },
                onClick: handleDeleteTeamClick,
                children: "Usuń Drużynę"
              }
            ),
            /* @__PURE__ */ jsx(Button, { variant: "contained", sx: { borderRadius: 4, fontWeight: "bold" }, onClick: handleEditClick, children: "Edytuj Dane" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Dialog, { open: editOpen, onClose: handleEditClose, maxWidth: "sm", fullWidth: true, disableRestoreFocus: true, children: /* @__PURE__ */ jsx(DialogContent, { sx: { overflow: "auto", maxHeight: "90vh", p: 0 }, children: /* @__PURE__ */ jsx(TeamFormContent, { mode: "edit", initialTeam: team, onSuccess: handleEditSaved, onCancel: handleEditClose }) }) }),
    /* @__PURE__ */ jsx(
      TeamNewPlayer,
      {
        open: addingNewPlayer,
        onClose: handleAddPlayerClose,
        onSave: handleAddPlayerSave,
        playerActionError,
        playerActionLoading: updatePlayersMutation.isPending,
        newPlayerForm,
        setNewPlayerForm
      }
    ),
    /* @__PURE__ */ jsxs(Dialog, { open: !!editingPlayer, onClose: handleEditPlayerClose, maxWidth: "xs", fullWidth: true, disableRestoreFocus: true, children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: "Edytuj zawodnika" }),
      /* @__PURE__ */ jsxs(DialogContent, { children: [
        playerActionError && /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mt: 1, mb: 1 }, children: playerActionError }),
        editForm && /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 2, pt: 1 }, children: [
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "Imię",
              value: editForm.firstName,
              onChange: (e) => setEditForm((f) => f ? { ...f, firstName: e.target.value } : f),
              fullWidth: true,
              size: "small"
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "Nazwisko",
              value: editForm.lastName,
              onChange: (e) => setEditForm((f) => f ? { ...f, lastName: e.target.value } : f),
              fullWidth: true,
              size: "small"
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "Klasyfikacja",
              type: "number",
              inputProps: { inputMode: "decimal" },
              value: editForm.classification,
              onChange: (e) => setEditForm((f) => f ? { ...f, classification: e.target.value } : f),
              fullWidth: true,
              size: "small"
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "Numer",
              type: "number",
              inputProps: { inputMode: "numeric" },
              value: editForm.number,
              onChange: (e) => setEditForm((f) => f ? { ...f, number: e.target.value } : f),
              fullWidth: true,
              size: "small"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsx(Button, { onClick: handleEditPlayerClose, disabled: updatePlayersMutation.isPending, children: "Anuluj" }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "contained",
            onClick: handleEditPlayerSave,
            disabled: updatePlayersMutation.isPending || !editForm,
            children: updatePlayersMutation.isPending ? /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) : "Zapisz"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(deleteConfirmPlayer),
        onClose: handleDeleteConfirmClose,
        onConfirm: handleDeleteConfirm,
        loading: updatePlayersMutation.isPending,
        title: "Usuń zawodnika",
        description: /* @__PURE__ */ jsxs(Typography, { children: [
          "Czy na pewno chcesz usunąć",
          deleteConfirmPlayer ? ` ${deleteConfirmPlayer.firstName} ${deleteConfirmPlayer.lastName}` : "",
          " z drużyny?"
        ] }),
        errorMessage: playerActionError
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: deleteTeamDialogOpen,
        onClose: handleDeleteTeamClose,
        onConfirm: handleDeleteTeamConfirm,
        loading: deleteTeamMutation.isPending,
        title: "Usuń drużynę",
        description: /* @__PURE__ */ jsxs(Typography, { children: [
          "Operacja usunie drużynę ",
          /* @__PURE__ */ jsx("strong", { children: team.name }),
          " z bazy danych. Czy na pewno chcesz kontynuować?"
        ] }),
        errorMessage: deleteTeamErrorMessage,
        confirmLabel: "Usuń drużynę"
      }
    ),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
          gap: 4
        },
        children: [
          /* @__PURE__ */ jsx(Box, { sx: { display: "flex", flexDirection: "column", gap: 4 }, children: /* @__PURE__ */ jsxs(Paper, { sx: { p: 4, borderRadius: 3 }, children: [
            /* @__PURE__ */ jsxs(
              Box,
              {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3
                },
                children: [
                  /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold" }, children: "Zawodnicy" }),
                  /* @__PURE__ */ jsx(Button, { size: "small", color: "primary", onClick: handleAddNewPlayerClick, children: "+ Dodaj Zawodnika" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(TableContainer, { children: /* @__PURE__ */ jsxs(Table, { children: [
              /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { sx: { bgcolor: "background.default" }, children: [
                /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: "bold" }, children: "Imię i Nazwisko" }),
                /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: "bold" }, children: "Klasyfikacja" }),
                /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: "bold" }, children: "Numer" }),
                /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: "bold", textAlign: "center" }, children: "Operacje" })
              ] }) }),
              /* @__PURE__ */ jsx(TableBody, { children: players.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 4, align: "center", sx: { py: 4, color: "text.secondary" }, children: "Brak zawodników w drużynie." }) }) : players.map((p) => /* @__PURE__ */ jsxs(TableRow, { hover: true, children: [
                /* @__PURE__ */ jsxs(TableCell, { children: [
                  p.firstName,
                  " ",
                  p.lastName
                ] }),
                /* @__PURE__ */ jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsx(Chip, { label: p.classification?.toFixed(1) ?? "-", size: "small", variant: "outlined" }) }),
                /* @__PURE__ */ jsx(TableCell, { align: "center", children: p.number ?? "Nie podano" }),
                /* @__PURE__ */ jsxs(TableCell, { align: "center", children: [
                  /* @__PURE__ */ jsx(Button, { size: "small", color: "primary", onClick: () => handleEditPlayer(p), children: "Edytuj" }),
                  /* @__PURE__ */ jsx(Button, { size: "small", color: "error", onClick: () => handleDeletePlayerClick(p), children: "Usuń" })
                ] })
              ] }, p.id)) })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
            /* @__PURE__ */ jsxs(Paper, { sx: { p: 3, borderRadius: 3 }, children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold", mb: 2 }, children: "Kontakt" }),
              /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: "bold" }, children: team.contactFirstName && team.contactLastName ? `${team.contactFirstName} ${team.contactLastName}` : "Brak danych" }),
              " ",
              /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", children: team.contactEmail ?? "Brak adresu e-mail" }),
              /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", children: team.contactPhone ?? "Brak telefonu" })
            ] }),
            /* @__PURE__ */ jsxs(Paper, { sx: { p: 3, borderRadius: 3 }, children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold", mb: 2 }, children: "Trener & Staff" }),
              /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
                /* @__PURE__ */ jsxs(Box, { children: [
                  /* @__PURE__ */ jsx(
                    Typography,
                    {
                      variant: "caption",
                      sx: {
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        color: "text.secondary",
                        mb: 0.5,
                        display: "block"
                      },
                      children: "Trener"
                    }
                  ),
                  /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: { fontWeight: 500 }, children: team.coach ? `${team.coach.firstName} ${team.coach.lastName}` : "Nie przypisano" }),
                  /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "textSecondary", display: "block", children: `E-mail: ${team.coach?.email ?? "Nie podano adresu e-mail"}` }),
                  /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "textSecondary", display: "block", children: `Tel.: ${team.coach?.phone ?? "Nie podano telefonu"}` })
                ] }),
                /* @__PURE__ */ jsxs(Box, { children: [
                  /* @__PURE__ */ jsx(
                    Typography,
                    {
                      variant: "caption",
                      sx: {
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        color: "text.secondary",
                        mb: 0.5,
                        display: "block"
                      },
                      children: "Staff"
                    }
                  ),
                  staff.length > 0 ? staff.map((s) => /* @__PURE__ */ jsxs(Typography, { variant: "body2", sx: { fontWeight: 500 }, children: [
                    s.firstName,
                    " ",
                    s.lastName
                  ] }, s.id)) : /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", children: "Brak personelu" })
                ] }),
                /* @__PURE__ */ jsxs(Box, { children: [
                  /* @__PURE__ */ jsx(
                    Typography,
                    {
                      variant: "caption",
                      sx: {
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        color: "text.secondary",
                        mb: 0.5,
                        display: "block"
                      },
                      children: "Sędzia"
                    }
                  ),
                  /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: { fontWeight: 500 }, children: team.referee ? `${team.referee.firstName} ${team.referee.lastName}` : "Nie przypisano" }),
                  /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "textSecondary", display: "block", children: `E-mail: ${team.referee?.email ?? "-"}` }),
                  /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "textSecondary", display: "block", children: `Tel.: ${team.referee?.phone ?? "-"}` })
                ] })
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}

const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) return Astro2.redirect("/settings");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Szczegóły drużyny" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamDetails", TeamDetails, { "id": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/features/teams/components/TeamDetails/TeamDetails", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/settings/teams/[id].astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/settings/teams/[id].astro";
const $$url = "/settings/teams/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
