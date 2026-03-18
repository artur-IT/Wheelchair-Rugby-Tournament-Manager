import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Box, Typography, Button, Paper, Link as MuiLink, CircularProgress, Alert } from "@mui/material";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import AppShell from "@/components/AppShell/AppShell";
import type { Tournament } from "@/types";

interface TournamentDetailsProps {
  id: string;
}

export default function TournamentDetails({ id }: TournamentDetailsProps) {
  return (
    <ThemeRegistry>
      <AppShell currentPath="/tournaments">
        <TournamentDetailsContent id={id} />
      </AppShell>
    </ThemeRegistry>
  );
}

function TournamentDetailsContent({ id }: TournamentDetailsProps) {
  const [tournament, setTournament] = useState<Tournament | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadTournament() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/tournaments", { signal: controller.signal });
        if (!res.ok) {
          throw new Error("Nie udało się pobrać turnieju");
        }

        const data: Tournament[] = await res.json();
        const found = data.find((t) => t.id === id) ?? null;
        setTournament(found);
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : "Wystąpił błąd podczas pobierania turnieju");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadTournament();
    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 3 }}>
        {error}
      </Alert>
    );
  }

  if (!tournament) {
    return <Typography>Nie znaleziono turnieju.</Typography>;
  }

  const formatDateRange = (start: string, end?: string) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : null;

    if (Number.isNaN(startDate.getTime())) {
      return end && !Number.isNaN(endDate?.getTime() ?? NaN) ? (endDate?.toLocaleDateString("pl-PL") ?? "") : "";
    }

    if (!endDate || Number.isNaN(endDate.getTime())) {
      return startDate.toLocaleDateString("pl-PL");
    }

    return `${startDate.toLocaleDateString("pl-PL")} - ${endDate.toLocaleDateString("pl-PL")}`;
  };

  const venue = tournament.venue;
  const accommodation = tournament.accommodation;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <MuiLink
            href="/tournaments"
            underline="hover"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mb: 1,
            }}
          >
            &larr; Powrót do listy
          </MuiLink>
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            {tournament.name}
          </Typography>
          <Typography color="textSecondary">{formatDateRange(tournament.startDate, tournament.endDate)}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Button variant="outlined" sx={{ borderRadius: 4, fontWeight: "bold" }}>
            Wyczyść dane
          </Button>
          <Button
            component="a"
            href={`/tournaments/${id}/edit`}
            variant="contained"
            sx={{ borderRadius: 4, fontWeight: "bold" }}
          >
            Edytuj turniej
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            {venue ? (
              <Paper sx={{ p: 3, borderRadius: 3 }}>
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
                      bgcolor: "#dbeafe",
                      p: 1,
                      borderRadius: 2,
                      color: "#2563eb",
                    }}
                  >
                    <MapPin size={20} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Hala Sportowa
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 600 }}>{venue.name}</Typography>
                <Typography color="textSecondary" sx={{ mb: 2 }}>
                  {venue.address}
                </Typography>
                {venue.mapUrl ? (
                  <MuiLink
                    href={venue.mapUrl}
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
              <Paper sx={{ p: 3, borderRadius: 3 }}>
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
                      bgcolor: "#d1fae5",
                      p: 1,
                      borderRadius: 2,
                      color: "#059669",
                    }}
                  >
                    <MapPin size={20} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Zakwaterowanie
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 600 }}>{accommodation.name}</Typography>
                <Typography color="textSecondary" sx={{ mb: 2 }}>
                  {accommodation.address}
                </Typography>
                {tournament.parking ? (
                  <Typography sx={{ mb: 2 }}>
                    <strong>Parking:</strong> {tournament.parking}
                  </Typography>
                ) : null}
                {accommodation.mapUrl ? (
                  <MuiLink
                    href={accommodation.mapUrl}
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

            <Paper sx={{ p: 3, borderRadius: 3 }}>
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
                    bgcolor: "#fff7ed",
                    p: 1,
                    borderRadius: 2,
                    color: "#d97706",
                  }}
                >
                  <MapPin size={20} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Wyżywienie
                </Typography>
              </Box>
              {tournament.catering ? (
                <Typography sx={{ fontWeight: 600, whiteSpace: "pre-wrap" }}>{tournament.catering}</Typography>
              ) : (
                <Typography color="textSecondary">Brak danych.</Typography>
              )}
            </Paper>
          </Box>

          <Paper sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
              Plan Rozgrywek
            </Typography>
            <Box
              sx={{
                color: "text.secondary",
                fontStyle: "italic",
                textAlign: "center",
                py: 5,
                border: "2px dashed",
                borderColor: "grey.200",
                borderRadius: 2,
              }}
            >
              Brak zaplanowanych meczów. Dodaj mecze w edycji turnieju.
            </Box>
          </Paper>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Drużyny
            </Typography>
            {tournament.teams.length === 0 ? (
              <Typography variant="body2" color="textSecondary">
                Brak przypisanych drużyn.
              </Typography>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {tournament.teams.map((team) => (
                  <Box
                    key={team.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "grey.50",
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: "white",
                        borderRadius: 1,
                        border: "1px solid",
                        borderColor: "grey.200",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        color: "primary.main",
                      }}
                    >
                      {team.name[0] ?? "?"}
                    </Box>
                    <Typography sx={{ fontWeight: 500 }}>{team.name}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Paper>

          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Personel
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "text.secondary",
                    mb: 1,
                    display: "block",
                  }}
                >
                  Sędziowie
                </Typography>
                {tournament.referees.length === 0 ? (
                  <Typography variant="body2" color="textSecondary">
                    Brak przypisanych sędziów.
                  </Typography>
                ) : (
                  tournament.referees.map((r) => (
                    <Typography key={r.id} variant="body2" sx={{ fontWeight: 500 }}>
                      {r.firstName} {r.lastName}
                    </Typography>
                  ))
                )}
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "text.secondary",
                    mb: 1,
                    display: "block",
                  }}
                >
                  Klasyfikatorzy
                </Typography>
                {tournament.classifiers.length === 0 ? (
                  <Typography variant="body2" color="textSecondary">
                    Brak przypisanych klasyfikatorów.
                  </Typography>
                ) : (
                  tournament.classifiers.map((c) => (
                    <Typography key={c.id} variant="body2" sx={{ fontWeight: 500 }}>
                      {c.firstName} {c.lastName}
                    </Typography>
                  ))
                )}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
