import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_B-rHfi_b.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Trophy, Users, UserCircle, Calendar, ChevronRight, Plus } from 'lucide-react';
import { g as getErrorMessageFromResponse, A as AppShell, D as DataLoadAlert } from './DataLoadAlert_CBRXbjzF.mjs';
import { Q as QueryProvider } from './QueryProvider_CFYP5LAL.mjs';
import { w as ThemeRegistry, t as Box, T as Typography, C as CircularProgress, v as Button } from './ThemeRegistry_BXk5lg02.mjs';
import { u as useDefaultSeason } from './useDefaultSeason_WL1XSxS2.mjs';
import { f as fetchSeasonById } from './seasons_BKJTH5Iw.mjs';
import { q as queryKeys } from './queryKeys_DJxV4cae.mjs';
import { C as Chip } from './Chip_DPqmgDH5.mjs';
import { G as Grid } from './Grid_DFBwRzYi.mjs';
import { C as Card, a as CardContent } from './CardContent_CSafTp07.mjs';

function isTournamentOngoingOrUpcoming(t, now = /* @__PURE__ */ new Date()) {
  const end = t.endDate ? new Date(t.endDate) : new Date(t.startDate);
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return endDay.getTime() >= today.getTime();
}
function sortTournamentsByStartDate(tournaments) {
  return [...tournaments].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}
function isTournamentCompleted(t, now = /* @__PURE__ */ new Date()) {
  return !isTournamentOngoingOrUpcoming(t, now);
}
function sortTournamentsByEndDateDesc(tournaments) {
  return [...tournaments].sort((a, b) => {
    const endA = a.endDate ? new Date(a.endDate) : new Date(a.startDate);
    const endB = b.endDate ? new Date(b.endDate) : new Date(b.startDate);
    return endB.getTime() - endA.getTime();
  });
}
function totalVolunteersAcrossTournaments(tournaments) {
  return tournaments.reduce((sum, t) => sum + (t.volunteers?.length ?? 0), 0);
}
function formatTournamentDateRange(startIso, endIso) {
  const start = new Date(startIso);
  const end = endIso ? new Date(endIso) : start;
  const opts = { day: "numeric", month: "short", year: "numeric" };
  const sameDay = start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth() && start.getDate() === end.getDate();
  if (endIso && !sameDay) {
    return `${start.toLocaleDateString("pl-PL", opts)} – ${end.toLocaleDateString("pl-PL", opts)}`;
  }
  return start.toLocaleDateString("pl-PL", opts);
}

async function fetchDashboardSeasonData(seasonId, signal) {
  const [tRes, teamsRes, refRes] = await Promise.all([
    fetch("/api/tournaments", { signal }),
    fetch(`/api/teams?seasonId=${encodeURIComponent(seasonId)}`, { signal }),
    fetch(`/api/referees?seasonId=${encodeURIComponent(seasonId)}`, { signal })
  ]);
  const failed = [];
  if (!tRes.ok) failed.push("turniejów");
  if (!teamsRes.ok) failed.push("drużyn");
  if (!refRes.ok) failed.push("sędziów");
  const rawTournaments = tRes.ok ? await tRes.json().catch(() => []) : [];
  const teamsJson = teamsRes.ok ? await teamsRes.json().catch(() => []) : [];
  const refereesJson = refRes.ok ? await refRes.json().catch(() => []) : [];
  if (failed.length === 3) {
    const firstBad = !tRes.ok ? tRes : !teamsRes.ok ? teamsRes : refRes;
    const msg = await getErrorMessageFromResponse(firstBad, "Nie udało się załadować danych pulpitu.");
    throw new Error(msg);
  }
  let partialWarning = null;
  if (failed.length > 0) {
    partialWarning = `Nie udało się załadować danych: ${failed.join(", ")}. Poniższe liczby mogą być niepełne.`;
  }
  const list = Array.isArray(rawTournaments) ? rawTournaments : [];
  const forSeason = list.filter((t) => t.seasonId === seasonId);
  return {
    stats: {
      tournaments: forSeason.length,
      teams: Array.isArray(teamsJson) ? teamsJson.length : 0,
      referees: Array.isArray(refereesJson) ? refereesJson.length : 0,
      volunteers: totalVolunteersAcrossTournaments(forSeason)
    },
    upcoming: sortTournamentsByStartDate(forSeason.filter((t) => isTournamentOngoingOrUpcoming(t))),
    completed: sortTournamentsByEndDateDesc(forSeason.filter((t) => isTournamentCompleted(t))),
    partialWarning
  };
}

const DEFAULT_STATS = { tournaments: 0, teams: 0, referees: 0, volunteers: 0 };
const STAT_ITEMS = [
  { key: "tournaments", label: "Turnieje", icon: Trophy, color: "info.main" },
  { key: "teams", label: "Drużyny", icon: Users, color: "secondary.main" },
  { key: "referees", label: "Sędziowie", icon: UserCircle, color: "primary.main" },
  { key: "volunteers", label: "Wolontariusze", icon: UserCircle, color: "warning.main" }
];
const getErrorMessage = (isError, error) => isError && error instanceof Error ? error.message : null;
const getSeasonChipLabel = (name, year) => `${name}${year ? ` (${year})` : ""}`;
function useDashboardSeasonData(seasonId) {
  const dashboardQuery = useQuery({
    queryKey: queryKeys.dashboard.season(seasonId ?? "__none__"),
    queryFn: ({ signal }) => {
      if (!seasonId) {
        return Promise.reject(new Error("Missing season id"));
      }
      return fetchDashboardSeasonData(seasonId, signal);
    },
    enabled: Boolean(seasonId)
  });
  const seasonMetaQuery = useQuery({
    queryKey: queryKeys.seasons.detail(seasonId ?? "__none__"),
    queryFn: ({ signal }) => {
      if (!seasonId) {
        return Promise.reject(new Error("Missing season id"));
      }
      return fetchSeasonById(seasonId, signal);
    },
    enabled: Boolean(seasonId)
  });
  return { dashboardQuery, seasonMetaQuery };
}
function DashboardContent() {
  const { defaultSeasonId } = useDefaultSeason();
  const { dashboardQuery, seasonMetaQuery } = useDashboardSeasonData(defaultSeasonId);
  const {
    data: seasonData,
    isPending: dashboardLoading,
    isError: dashboardIsError,
    error: dashboardErrorObj,
    refetch: refetchDashboard
  } = dashboardQuery;
  const {
    data: defaultSeason,
    isError: seasonMetaIsError,
    error: seasonMetaErr,
    isPending: seasonLoading
  } = seasonMetaQuery;
  const upcoming = seasonData?.upcoming ?? [];
  const completed = seasonData?.completed ?? [];
  const partialWarning = seasonData?.partialWarning ?? null;
  const dashboardError = getErrorMessage(dashboardIsError, dashboardErrorObj);
  const seasonMetaError = getErrorMessage(seasonMetaIsError, seasonMetaErr);
  const statItems = useMemo(() => {
    const stats = seasonData?.stats ?? DEFAULT_STATS;
    return STAT_ITEMS.map((item) => ({
      ...item,
      value: stats[item.key]
    }));
  }, [seasonData]);
  return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 4 }, children: [
    /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h4", sx: { fontWeight: "bold" }, children: "Witaj, Organizatorze!" }),
      /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, mt: 0.5, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: "Oto podsumowanie sezonu:" }),
        seasonMetaError ? /* @__PURE__ */ jsx(DataLoadAlert, { message: seasonMetaError, severity: "warning", sx: { py: 0 } }) : defaultSeasonId && seasonLoading ? /* @__PURE__ */ jsx(CircularProgress, { size: 18, sx: { ml: 0.5 } }) : defaultSeason ? /* @__PURE__ */ jsx(
          Chip,
          {
            label: getSeasonChipLabel(defaultSeason.name, defaultSeason.year),
            size: "small",
            color: "warning",
            component: "a",
            href: "/settings",
            clickable: true
          }
        ) : /* @__PURE__ */ jsx(
          Typography,
          {
            component: "a",
            href: "/settings",
            variant: "caption",
            color: "textSecondary",
            sx: { textDecoration: "underline", cursor: "pointer" },
            children: "Brak domyślnego sezonu — ustaw w Ustawieniach"
          }
        )
      ] })
    ] }),
    dashboardError ? /* @__PURE__ */ jsx(DataLoadAlert, { message: dashboardError, onRetry: () => void refetchDashboard() }) : null,
    partialWarning ? /* @__PURE__ */ jsx(DataLoadAlert, { message: partialWarning, severity: "warning", onRetry: () => void refetchDashboard() }) : null,
    dashboardLoading && defaultSeasonId ? /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 2 }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 32 }) }) : null,
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: 3, children: statItems.map((stat) => /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6, md: 3 }, children: /* @__PURE__ */ jsx(Card, { sx: { borderRadius: 3 }, children: /* @__PURE__ */ jsxs(CardContent, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
      /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            bgcolor: stat.color,
            p: 1.5,
            borderRadius: 2,
            color: "white"
          },
          children: /* @__PURE__ */ jsx(stat.icon, { size: 20 })
        }
      ),
      /* @__PURE__ */ jsxs(Box, { children: [
        /* @__PURE__ */ jsx(
          Typography,
          {
            variant: "caption",
            sx: {
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "text.secondary"
            },
            children: stat.label
          }
        ),
        /* @__PURE__ */ jsx(Typography, { variant: "h5", sx: { fontWeight: "bold" }, children: stat.value })
      ] })
    ] }) }) }, stat.key)) }),
    /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 4, children: [
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, lg: 6 }, children: /* @__PURE__ */ jsx(Card, { sx: { borderRadius: 3 }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx(DashboardSectionHeader, { title: "Nadchodzące Turnieje", href: "/tournaments" }),
        /* @__PURE__ */ jsx(Box, { children: !defaultSeasonId ? /* @__PURE__ */ jsx(DashboardEmptyState, { message: "Ustaw domyślny sezon w Ustawieniach, aby zobaczyć turnieje." }) : upcoming.length === 0 ? /* @__PURE__ */ jsx(DashboardEmptyState, { message: "Brak nadchodzących turniejów w tym sezonie." }) : upcoming.map((t) => /* @__PURE__ */ jsx(DashboardTournamentRow, { tournament: t, calendarIconColor: "#FE9A00" }, t.id)) })
      ] }) }) }),
      /* @__PURE__ */ jsx(Grid, { size: { xs: 12, lg: 6 }, children: /* @__PURE__ */ jsx(Card, { sx: { borderRadius: 3 }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold", mb: 2 }, children: "Szybkie Akcje" }),
        /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
          /* @__PURE__ */ jsx(Grid, { size: 6, children: /* @__PURE__ */ jsx(QuickActionButton, { href: "/tournaments/new", label: "Nowy Turniej" }) }),
          /* @__PURE__ */ jsx(Grid, { size: 6, children: /* @__PURE__ */ jsx(
            QuickActionButton,
            {
              href: "/settings/teams/new",
              label: "Nowa Drużyna",
              sx: {
                color: "success.main",
                borderColor: "success.main",
                "&:hover": {
                  borderColor: "success.dark",
                  bgcolor: "success.50"
                }
              }
            }
          ) })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Grid, { container: true, spacing: 4, children: /* @__PURE__ */ jsx(Grid, { size: { xs: 12 }, children: /* @__PURE__ */ jsx(Card, { sx: { borderRadius: 3 }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(DashboardSectionHeader, { title: "Zakończone turnieje", href: "/tournaments" }),
      /* @__PURE__ */ jsx(Box, { children: !defaultSeasonId ? /* @__PURE__ */ jsx(DashboardEmptyState, { message: "Ustaw domyślny sezon w Ustawieniach, aby zobaczyć turnieje." }) : completed.length === 0 ? /* @__PURE__ */ jsx(DashboardEmptyState, { message: "Brak zakończonych turniejów w tym sezonie." }) : completed.map((t) => /* @__PURE__ */ jsx(DashboardTournamentRow, { tournament: t, calendarIconColor: "#717171" }, t.id)) })
    ] }) }) }) })
  ] });
}
function DashboardSectionHeader({ title, href }) {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2
      },
      children: [
        /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold" }, children: title }),
        /* @__PURE__ */ jsx(Button, { component: "a", href, size: "small", children: "Zobacz wszystkie" })
      ]
    }
  );
}
function DashboardEmptyState({ message }) {
  return /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", children: message });
}
function QuickActionButton({ href, label, sx }) {
  return /* @__PURE__ */ jsxs(
    Button,
    {
      component: "a",
      href,
      variant: "outlined",
      fullWidth: true,
      sx: {
        borderStyle: "dashed",
        py: 3,
        flexDirection: "column",
        gap: 1,
        ...sx
      },
      children: [
        /* @__PURE__ */ jsx(Plus, { size: 24 }),
        /* @__PURE__ */ jsx(Typography, { variant: "caption", children: label })
      ]
    }
  );
}
function DashboardTournamentRow({
  tournament: t,
  calendarIconColor
}) {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      component: "a",
      href: `/tournaments/${t.id}`,
      sx: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        mb: 1,
        bgcolor: "background.paper",
        borderRadius: 1.5,
        border: "1px solid",
        borderColor: "divider",
        textDecoration: "none",
        color: "inherit",
        "&:hover": { bgcolor: "background.default" }
      },
      children: [
        /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          /* @__PURE__ */ jsx(Box, { sx: { bgcolor: "white", p: 1, borderRadius: 1 }, children: /* @__PURE__ */ jsx(Calendar, { size: 20, style: { color: calendarIconColor } }) }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: "bold" }, children: t.name }),
            /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "textSecondary", children: formatTournamentDateRange(t.startDate, t.endDate) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 20, style: { color: "#D4D4D4" } })
      ]
    }
  );
}
function Dashboard() {
  return /* @__PURE__ */ jsx(QueryProvider, { children: /* @__PURE__ */ jsx(ThemeRegistry, { children: /* @__PURE__ */ jsx(AppShell, { currentPath: "/dashboard", children: /* @__PURE__ */ jsx(DashboardContent, {}) }) }) });
}

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardView", Dashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Dashboard/Dashboard", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/dashboard.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
