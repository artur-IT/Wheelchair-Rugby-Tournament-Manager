import { UserCircle } from "lucide-react";
import { Box, Button, Grid, TextField, Typography, Paper, Avatar, CircularProgress, Alert } from "@mui/material";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import AppShell from "@/components/AppShell/AppShell";
import { useCurrentUser } from "@/components/AppShell/CurrentUserContext";
import { splitDisplayName } from "@/lib/auth/splitDisplayName";

export default function ProfilePage() {
  return (
    <ThemeRegistry>
      <AppShell currentPath="/profile">
        <ProfileContent />
      </AppShell>
    </ThemeRegistry>
  );
}

function ProfileContent() {
  const { status, user } = useCurrentUser();

  if (status === "loading") {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (status === "error" || !user) {
    return (
      <Alert severity="error" sx={{ maxWidth: 500, mx: "auto" }}>
        Nie udało się wczytać danych profilu. Odśwież stronę lub zaloguj się ponownie.
      </Alert>
    );
  }

  const { firstName, lastName } = splitDisplayName(user.name);

  return (
    <Paper sx={{ p: 4, maxWidth: 500, mx: "auto", borderRadius: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        Mój Profil
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          pb: 3,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Avatar sx={{ width: 80, height: 80, bgcolor: "primary.main" }}>
          <UserCircle size={64} />
        </Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {user.name}
          </Typography>
          {user.localLogin ? (
            <Typography variant="body2" color="textSecondary">
              Nick: {user.localLogin}
            </Typography>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Logowanie przez Google
            </Typography>
          )}
          <Typography variant="body2" color="textSecondary">
            {user.email ?? "Brak adresu e-mail w koncie"}
          </Typography>
        </Box>
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1, mt: 2 }}>
        Imię i nazwisko (z konta — edycja wkrótce)
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Imię" value={firstName} disabled />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField fullWidth label="Nazwisko" value={lastName} disabled />
        </Grid>
      </Grid>
      <Button variant="contained" fullWidth sx={{ mt: 3 }} disabled>
        Zapisz Zmiany
      </Button>
    </Paper>
  );
}
