import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, Stack, Typography } from "@mui/material";

import type { ClubTeamDto } from "./types";

const TEAM_TILE_WIDTH_PX = 400;
const TEAM_TILE_WIDTH_MOBILE_PORTRAIT_PX = 310;

/** One decimal place for roster rows (same idea as player list). */
function formatClassificationForList(c: number | null | undefined): string {
  if (c === null || c === undefined) return "—";
  const n = Number(c);
  if (!Number.isFinite(n)) return "—";
  return n.toFixed(1);
}

interface TeamTileProps {
  team: ClubTeamDto;
  onEditTeam: (team: ClubTeamDto) => void;
  onRequestDeleteTeam: (team: ClubTeamDto) => void;
  isDeletePending?: boolean;
}

export default function TeamTile({ team, onEditTeam, onRequestDeleteTeam, isDeletePending = false }: TeamTileProps) {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={(theme) => ({
        width: TEAM_TILE_WIDTH_PX,
        maxWidth: "100%",
        boxSizing: "border-box",
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "background.paper",
        boxShadow: 1,
        "&:before": { display: "none" },
        [theme.breakpoints.down("md")]: {
          "@media (orientation: portrait)": {
            width: TEAM_TILE_WIDTH_MOBILE_PORTRAIT_PX,
          },
        },
      })}
    >
      <AccordionSummary
        component="div"
        expandIcon={<ExpandMoreIcon aria-hidden />}
        sx={{
          px: 2,
          py: 1.5,
          "& .MuiAccordionSummary-content": {
            flexDirection: "column",
            alignItems: "stretch",
            gap: 1.25,
            my: 0,
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            alignSelf: "flex-start",
            pt: 0.25,
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2} flexWrap="wrap">
          <Typography sx={{ fontWeight: 700 }}>{team.name}</Typography>
          <Chip label={team.formula === "WR4" ? "WR'4" : "WR'5"} size="small" />
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Zawodników: {team.players.length}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Trener: {team.coach ? `${team.coach.firstName} ${team.coach.lastName}` : "brak"}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap sx={{ pt: 0.25 }}>
          <Button
            size="small"
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();
              onEditTeam(team);
            }}
          >
            Edytuj
          </Button>
          <Button
            size="small"
            color="error"
            variant="outlined"
            disabled={isDeletePending}
            onClick={(e) => {
              e.stopPropagation();
              onRequestDeleteTeam(team);
            }}
          >
            Usuń
          </Button>
        </Stack>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          px: 2,
          pb: 2,
          pt: 0,
          borderTop: 1,
          borderColor: "divider",
          bgcolor: (theme) => (theme.palette.mode === "dark" ? "action.hover" : theme.palette.grey[50]),
        }}
      >
        {team.players.length === 0 ? (
          <Typography variant="body2" color="text.secondary" sx={{ pt: 2 }}>
            Brak zawodników w składzie.
          </Typography>
        ) : (
          <Box sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                pb: 0.5,
                borderBottom: 1,
                borderColor: "divider",
                typography: "caption",
                color: "text.secondary",
                fontWeight: 600,
              }}
            >
              <Box sx={{ flex: "1 1 28%", minWidth: 0 }}>Imię</Box>
              <Box sx={{ flex: "1 1 28%", minWidth: 0 }}>Nazwisko</Box>
              <Box sx={{ flex: "0 0 5.5rem", textAlign: "right" }}>Klasyfikacja</Box>
            </Stack>
            {team.players.map(({ player }) => (
              <Stack key={player.id} direction="row" spacing={1} alignItems="baseline" sx={{ typography: "body2" }}>
                <Typography component="span" sx={{ flex: "1 1 28%", minWidth: 0, fontWeight: 600 }}>
                  {player.firstName}
                </Typography>
                <Typography component="span" sx={{ flex: "1 1 28%", minWidth: 0, fontWeight: 600 }}>
                  {player.lastName}
                </Typography>
                <Typography component="span" color="text.secondary" sx={{ flex: "0 0 5.5rem", textAlign: "right" }}>
                  {formatClassificationForList(player.classification)}
                </Typography>
              </Stack>
            ))}
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
