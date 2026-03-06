import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { Box, Button, Grid, TextField, Typography, Paper, Divider, Alert, CircularProgress } from "@mui/material";
import ThemeRegistry from "@/components/ThemeRegistry";
import AppShell from "@/components/AppShell";

// Validation schema matching the API contract
const teamSchema = z.object({
  name: z.string().min(1, "Nazwa drużyny jest wymagana"),
  address: z.string().min(1, "Adres jest wymagany"),
  contactFirstName: z.string().min(1, "Imię jest wymagane"),
  contactLastName: z.string().min(1, "Nazwisko jest wymagane"),
  contactEmail: z.string().email("Nieprawidłowy adres email"),
  contactPhone: z.string().min(1, "Telefon jest wymagany"),
});

type TeamFormValues = z.infer<typeof teamSchema>;

export default function TeamForm() {
  return (
    <ThemeRegistry>
      <AppShell currentPath="/settings">
        <TeamFormContent />
      </AppShell>
    </ThemeRegistry>
  );
}

function TeamFormContent() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [seasonId, setSeasonId] = useState<string | null>(null);
  const [loadingSeasonId, setLoadingSeasonId] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // Zod 4.3 types incompatible with @hookform/resolvers — runtime works correctly
  } = useForm<TeamFormValues>({ resolver: zodResolver(teamSchema as never) });

  // Fetch the latest season to associate the team with
  useEffect(() => {
    async function fetchSeason() {
      try {
        const res = await fetch("/api/seasons");
        if (!res.ok) throw new Error("Nie udało się pobrać sezonów");
        const seasons = await res.json();
        if (seasons.length > 0) setSeasonId(seasons[0].id);
      } catch {
        setSubmitError("Nie udało się pobrać sezonu. Upewnij się, że istnieje co najmniej jeden sezon.");
      } finally {
        setLoadingSeasonId(false);
      }
    }
    fetchSeason();
  }, []);

  const onSubmit = async (data: TeamFormValues) => {
    setSubmitError(null);

    if (!seasonId) {
      setSubmitError("Brak aktywnego sezonu. Utwórz sezon przed dodaniem drużyny.");
      return;
    }

    try {
      const res = await fetch("/api/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, seasonId }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error?.formErrors?.[0] ?? "Nie udało się zapisać drużyny");
      }

      window.location.href = "/settings";
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Wystąpił nieoczekiwany błąd");
    }
  };

  if (loadingSeasonId) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ p: 4, maxWidth: 600, mx: "auto", borderRadius: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        Nowa Drużyna
      </Typography>

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Nazwa Drużyny"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Adres"
              {...register("address")}
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
          Osoba do kontaktu
        </Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Imię"
              {...register("contactFirstName")}
              error={!!errors.contactFirstName}
              helperText={errors.contactFirstName?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Nazwisko"
              {...register("contactLastName")}
              error={!!errors.contactLastName}
              helperText={errors.contactLastName?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              {...register("contactEmail")}
              error={!!errors.contactEmail}
              helperText={errors.contactEmail?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              type="tel"
              label="Telefon"
              {...register("contactPhone")}
              error={!!errors.contactPhone}
              helperText={errors.contactPhone?.message}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", gap: 2, pt: 2 }}>
          <Button variant="outlined" fullWidth component="a" href="/settings">
            Anuluj
          </Button>
          <Button variant="contained" color="success" type="submit" fullWidth disabled={isSubmitting || !seasonId}>
            {isSubmitting ? <CircularProgress size={24} /> : "Zapisz Drużynę"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
