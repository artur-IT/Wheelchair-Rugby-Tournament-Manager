import { MapPin } from "lucide-react";
import { Box, Link as MuiLink, Paper, Typography } from "@mui/material";
import { formatAddressForDisplay, resolvePlaceMapsHref } from "@/lib/addressDisplay";
import type { Tournament } from "@/types";

interface TournamentInfoPanelsProps {
  tournament: Tournament;
}

export default function TournamentInfoPanels({ tournament }: TournamentInfoPanelsProps) {
  const mealLocationLabel = (location?: Tournament["breakfastLocation"]) => {
    if (location === "HALL") return "Hala";
    if (location === "HOTEL") return "Hotel";
    return "Brak danych";
  };
  const hasStructuredCatering = Boolean(
    tournament.breakfastServingTime ||
    tournament.lunchServingTime ||
    tournament.dinnerServingTime ||
    tournament.cateringNotes
  );

  const venue = tournament.venue;
  const accommodation = tournament.accommodation;
  const venueMapsHref = resolvePlaceMapsHref(venue);
  const accommodationMapsHref = resolvePlaceMapsHref(accommodation);
  // Full-width cards on narrow viewports avoid horizontal scroll; fixed 350px from md up matches desktop layout.
  const cardSx = {
    p: 3,
    borderRadius: 3,
    bgcolor: "background.paper",
    border: 1,
    borderColor: "divider",
    boxSizing: "border-box" as const,
    width: "100%",
    minWidth: 0,
    maxWidth: { xs: "100%", md: 350 },
    justifySelf: { xs: "stretch", md: "center" },
  };

  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        minWidth: 0,
        gridTemplateColumns: {
          xs: "minmax(0, 1fr)",
          sm: "minmax(0, 1fr)",
          md: "repeat(auto-fit, minmax(280px, 1fr))",
          lg: "repeat(3, minmax(0, 350px))",
          xl: "repeat(3, minmax(0, 350px))",
        },
        gap: 3,
        alignItems: "stretch",
        justifyContent: "center",
        overflowX: "visible",
      }}
    >
      {venue ? (
        <Paper variant="outlined" sx={cardSx}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: "info.light",
                p: 1,
                borderRadius: 2,
                color: "info.dark",
              }}
            >
              <MapPin size={20} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Hala Sportowa
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 600 }}>{venue.name}</Typography>
          <Typography color="textSecondary" sx={{ mb: 1, whiteSpace: "pre-line", overflowWrap: "anywhere" }}>
            {formatAddressForDisplay(venue.address)}
          </Typography>
          {venueMapsHref ? (
            <MuiLink
              href={venueMapsHref}
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ fontWeight: "bold", fontSize: "0.875rem" }}
            >
              Otwórz w Mapach &rarr;
            </MuiLink>
          ) : null}
        </Paper>
      ) : null}

      {accommodation ? (
        <Paper variant="outlined" sx={cardSx}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: "secondary.light",
                p: 1,
                borderRadius: 2,
                color: "secondary.dark",
              }}
            >
              <MapPin size={20} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Zakwaterowanie
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 600 }}>{accommodation.name}</Typography>
          <Typography color="textSecondary" sx={{ mb: 1, whiteSpace: "pre-line", overflowWrap: "anywhere" }}>
            {formatAddressForDisplay(accommodation.address)}
          </Typography>
          {tournament.parking ? (
            <Typography sx={{ mb: 1 }}>
              <strong>Parking:</strong> {tournament.parking}
            </Typography>
          ) : null}
          {accommodationMapsHref ? (
            <MuiLink
              href={accommodationMapsHref}
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ fontWeight: "bold", fontSize: "0.875rem" }}
            >
              Otwórz w Mapach &rarr;
            </MuiLink>
          ) : null}
        </Paper>
      ) : null}

      <Paper variant="outlined" sx={cardSx}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: "warning.light",
              p: 1,
              borderRadius: 2,
              color: "warning.dark",
            }}
          >
            <MapPin size={20} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Wyżywienie
          </Typography>
        </Box>
        {hasStructuredCatering ? (
          <Box sx={{ display: "grid", gap: 1 }}>
            <Typography>
              <strong>Śniadania:</strong> {tournament.breakfastServingTime || "Brak danych"} /{" "}
              <strong>{mealLocationLabel(tournament.breakfastLocation)}</strong>
            </Typography>
            <Typography>
              <strong>Obiady:</strong> {tournament.lunchServingTime || "Brak danych"} /{" "}
              <strong>{mealLocationLabel(tournament.lunchLocation)}</strong>
            </Typography>
            <Typography>
              <strong>Kolacje:</strong> {tournament.dinnerServingTime || "Brak danych"} /{" "}
              <strong>{mealLocationLabel(tournament.dinnerLocation)}</strong>
            </Typography>
            {tournament.cateringNotes ? (
              <Typography sx={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
                <strong>Uwagi:</strong> {tournament.cateringNotes}
              </Typography>
            ) : null}
          </Box>
        ) : tournament.catering ? (
          <Typography sx={{ fontWeight: 600, whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
            {tournament.catering}
          </Typography>
        ) : (
          <Typography color="textSecondary">Brak danych.</Typography>
        )}
      </Paper>
    </Box>
  );
}
