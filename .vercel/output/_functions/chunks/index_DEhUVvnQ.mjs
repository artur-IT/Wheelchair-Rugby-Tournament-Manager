import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_BRj9trZt.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Plus, Calendar, MapPin, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { A as AppShell, D as DataLoadAlert } from './DataLoadAlert_DbJvhLOL.mjs';
import { Q as QueryProvider } from './QueryProvider_CFYP5LAL.mjs';
import { w as ThemeRegistry, t as Box, T as Typography, v as Button, C as CircularProgress, _ as IconButton } from './ThemeRegistry_D8eYcNmV.mjs';
import { u as useDefaultSeason } from './useDefaultSeason_WL1XSxS2.mjs';
import { C as ConfirmationDialog } from './ConfirmationDialog_CE1Tx5wT.mjs';
import { t as fetchTournamentsList, v as deleteTournamentById, f as formatDateRangePl, T as Tooltip } from './tournaments_BPH4TZ6Q.mjs';
import { a as fetchSeasonsList } from './seasons_D51nLtJ4.mjs';
import { f as formatAddressForDisplay } from './addressDisplay_BWOThiqF.mjs';
import { q as queryKeys } from './queryKeys_DJxV4cae.mjs';
import { G as Grid } from './Grid_1Y1FfHvX.mjs';
import { C as Card, a as CardContent } from './CardContent_BdwUrVmM.mjs';
import { C as Chip } from './Chip_Dd9yZqZp.mjs';

function TournamentsPage() {
  return /* @__PURE__ */ jsx(QueryProvider, { children: /* @__PURE__ */ jsx(ThemeRegistry, { children: /* @__PURE__ */ jsx(AppShell, { currentPath: "/tournaments", children: /* @__PURE__ */ jsx(TournamentsContent, {}) }) }) });
}
function TournamentsContent() {
  const { defaultSeasonId } = useDefaultSeason();
  const queryClient = useQueryClient();
  const [tournamentToDelete, setTournamentToDelete] = useState(null);
  const {
    data: tournaments = [],
    isPending: loading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: queryKeys.tournaments.list(),
    queryFn: ({ signal }) => fetchTournamentsList(signal)
  });
  const { data: seasons = [] } = useQuery({
    queryKey: queryKeys.seasons.list(),
    queryFn: ({ signal }) => fetchSeasonsList(signal)
  });
  const deleteMutation = useMutation({
    mutationFn: deleteTournamentById,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.list() });
      setTournamentToDelete(null);
    }
  });
  const listError = isError && error instanceof Error ? error.message : null;
  const selectedSeason = defaultSeasonId ? seasons.find((season) => season.id === defaultSeasonId) : null;
  const selectedSeasonLabel = selectedSeason ? `${selectedSeason.name} (${selectedSeason.year})` : "nie wybrano domyślnego sezonu";
  const visibleTournaments = defaultSeasonId ? tournaments.filter((tournament) => tournament.seasonId === defaultSeasonId) : [];
  function openDeleteDialog(tournament) {
    if (deleteMutation.isPending) return;
    deleteMutation.reset();
    setTournamentToDelete(tournament);
  }
  function closeDeleteDialog() {
    if (deleteMutation.isPending) return;
    deleteMutation.reset();
    setTournamentToDelete(null);
  }
  function confirmDeleteTournament() {
    if (!tournamentToDelete) return;
    deleteMutation.mutate(tournamentToDelete.id);
  }
  function getTournamentStatus(startDate, endDate) {
    const now = /* @__PURE__ */ new Date();
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : start;
    if (now < start) return { label: "Nadchodzący", color: "primary" };
    if (now > end) return { label: "Zakończony", color: "default" };
    return { label: "W trakcie", color: "success" };
  }
  const deleteErrorMessage = deleteMutation.error instanceof Error ? deleteMutation.error.message : null;
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 4
        },
        children: [
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { variant: "h4", sx: { fontWeight: "bold", mb: 0.5 }, children: "Turnieje" }),
            /* @__PURE__ */ jsxs(Typography, { color: "textSecondary", children: [
              "Zarządzaj wydarzeniami w sezonie:",
              " ",
              /* @__PURE__ */ jsx(Box, { component: "span", sx: { fontWeight: "bold" }, children: selectedSeasonLabel }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { component: "a", href: "/tournaments/new", variant: "contained", startIcon: /* @__PURE__ */ jsx(Plus, { size: 20 }), children: "Nowy Turniej" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(DataLoadAlert, { message: listError, onRetry: () => void refetch(), sx: { mb: 3 } }),
    loading ? /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsx(CircularProgress, {}) }) : isError ? null : visibleTournaments.length === 0 ? /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          py: 6,
          textAlign: "center",
          borderRadius: 3,
          border: "1px dashed",
          borderColor: "divider"
        },
        children: [
          /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: "bold", mb: 1 }, children: "Brak turniejów" }),
          /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: defaultSeasonId ? "Dodaj pierwszy turniej, aby zacząć planowanie sezonu." : "Ustaw domyślny sezon w Ustawieniach, aby zobaczyć turnieje." })
        ]
      }
    ) : /* @__PURE__ */ jsx(Grid, { container: true, spacing: 3, children: visibleTournaments.map((t) => /* @__PURE__ */ jsx(Grid, { size: { xs: 12, md: 6, lg: 4 }, children: /* @__PURE__ */ jsx(motion.div, { whileHover: { y: -5 }, children: /* @__PURE__ */ jsxs(
      Card,
      {
        sx: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 3
        },
        children: [
          /* @__PURE__ */ jsxs(CardContent, { sx: { flex: 1 }, children: [
            /* @__PURE__ */ jsx(
              Chip,
              {
                label: getTournamentStatus(t.startDate, t.endDate).label,
                color: getTournamentStatus(t.startDate, t.endDate).color,
                size: "small",
                sx: { mb: 2 }
              }
            ),
            /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold", mb: 1 }, children: t.name }),
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsxs(
                Box,
                {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1
                  },
                  children: [
                    /* @__PURE__ */ jsx(Calendar, { size: 16 }),
                    /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", children: formatDateRangePl(t.startDate, t.endDate) })
                  ]
                }
              ),
              t.venue && /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "flex-start", gap: 1 }, children: [
                /* @__PURE__ */ jsx(MapPin, { size: 16 }),
                /* @__PURE__ */ jsxs(Box, { sx: { minWidth: 0 }, children: [
                  /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", sx: { fontWeight: 600 }, children: t.venue.name }),
                  t.venue.address ? /* @__PURE__ */ jsx(
                    Typography,
                    {
                      variant: "body2",
                      color: "textSecondary",
                      sx: { whiteSpace: "pre-line", wordBreak: "break-word" },
                      children: formatAddressForDisplay(t.venue.address, "\n")
                    }
                  ) : null
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Box, { sx: { p: 1.5, display: "flex", gap: 1 }, children: [
            /* @__PURE__ */ jsx(Button, { component: "a", href: `/tournaments/${t.id}`, variant: "outlined", fullWidth: true, size: "small", children: "Szczegóły" }),
            /* @__PURE__ */ jsx(Button, { component: "a", href: `/tournaments/${t.id}/edit`, variant: "contained", fullWidth: true, size: "small", children: "Edytuj" }),
            /* @__PURE__ */ jsx(Tooltip, { title: "Usuń turniej", children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
              IconButton,
              {
                "aria-label": `Usuń turniej ${t.name}`,
                color: "error",
                onClick: () => openDeleteDialog(t),
                disabled: deleteMutation.isPending && tournamentToDelete?.id === t.id,
                size: "small",
                sx: { border: "1px solid", borderColor: "divider", borderRadius: 2 },
                children: /* @__PURE__ */ jsx(Trash2, { size: 18 })
              }
            ) }) })
          ] })
        ]
      }
    ) }) }, t.id)) }),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(tournamentToDelete),
        title: "Usunąć turniej?",
        description: tournamentToDelete ? /* @__PURE__ */ jsxs(Typography, { color: "textSecondary", children: [
          "Ta operacja jest nieodwracalna. Turniej: ",
          /* @__PURE__ */ jsx("strong", { children: tournamentToDelete.name })
        ] }) : null,
        onClose: closeDeleteDialog,
        onConfirm: confirmDeleteTournament,
        loading: deleteMutation.isPending,
        errorMessage: deleteErrorMessage,
        confirmLabel: "Usuń",
        cancelLabel: "Anuluj"
      }
    )
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Turnieje" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TournamentsPage", TournamentsPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/features/tournaments/components/Tournaments/TournamentsPage/TournamentsPage", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/tournaments/index.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/tournaments/index.astro";
const $$url = "/tournaments";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
