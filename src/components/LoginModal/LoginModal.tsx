import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Alert,
  Box,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { signIn, signUp } from "supertokens-web-js/recipe/emailpassword";
import { getAuthorisationURLWithQueryParamsAndSetState } from "supertokens-web-js/recipe/thirdparty";
import { getOAuthRedirectOrigin } from "@/lib/browser/oauthRedirectOrigin";
import { ensureSuperTokensFrontendInitialized } from "@/lib/supertokens/initFrontend";

interface Props {
  open: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

type Mode = "signin" | "signup";

export default function LoginModal({ open, onClose, onLoginSuccess }: Props) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<Mode>("signin");
  const [signinCredentials, setSigninCredentials] = useState({ email: "", password: "" });
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const handleLoginSuccess = onLoginSuccess ?? (() => (window.location.href = "/dashboard"));

  useEffect(() => {
    if (open) {
      ensureSuperTokensFrontendInitialized();
    }
  }, [open]);

  const handleModeChange = (_: unknown, v: Mode | null) => {
    if (!v) return;
    setMode(v);
    setFormValues(v === "signin" ? signinCredentials : { email: "", password: "" });
  };

  const startGoogle = async () => {
    setError(false);
    setLoading(true);
    try {
      ensureSuperTokensFrontendInitialized();
      const site = getOAuthRedirectOrigin();
      const frontendCallback = `${site}/auth/callback`;
      // Must match Google Cloud "Authorized redirect URIs" (GET is handled in api/auth/[...path].ts).
      const googleRedirectRegistered = `${site}/api/auth/callback/google`;
      const url = await getAuthorisationURLWithQueryParamsAndSetState({
        thirdPartyId: "google",
        frontendRedirectURI: frontendCallback,
        redirectURIOnProviderDashboard: googleRedirectRegistered,
      });
      window.location.assign(url);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    const email = formValues.email.trim();
    const password = formValues.password;

    try {
      ensureSuperTokensFrontendInitialized();
      const formFields = [
        { id: "email", value: email },
        { id: "password", value: password },
      ];

      const result = mode === "signin" ? await signIn({ formFields }) : await signUp({ formFields });

      if (result.status === "OK") {
        handleLoginSuccess();
        return;
      }
    } catch {
      /* ignored */
    } finally {
      setLoading(false);
    }

    setError(true);
  };

  const updateField =
    (field: "email" | "password") => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setFormValues((prev) => ({ ...prev, [field]: value }));
      if (mode === "signin") setSigninCredentials((prev) => ({ ...prev, [field]: value }));
    };

  const isSignin = mode === "signin";

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ pr: 6 }}>
        {isSignin ? "Logowanie" : "Rejestracja"}
        <IconButton aria-label="zamknij" onClick={onClose} sx={{ position: "absolute", right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {isSignin
              ? "Błędny email lub hasło. Spróbuj ponownie."
              : "Nie udało się utworzyć konta (email zajęty lub zbyt słabe hasło)."}
          </Alert>
        )}

        <Box sx={{ mb: 2 }}>
          <ToggleButtonGroup
            exclusive
            fullWidth
            size="small"
            value={mode}
            onChange={handleModeChange}
            aria-label="tryb konta"
          >
            <ToggleButton value="signin">Logowanie</ToggleButton>
            <ToggleButton value="signup">Nowe konto</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Button variant="outlined" fullWidth sx={{ mb: 2 }} onClick={() => void startGoogle()} disabled={loading}>
          Kontynuuj z Google
        </Button>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            name="email"
            label="Email"
            type="email"
            slotProps={{ htmlInput: { maxLength: 128 } }}
            autoComplete={isSignin ? "email" : "off"}
            value={formValues.email}
            onChange={updateField("email")}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            name="password"
            label="Hasło"
            type="password"
            slotProps={{ htmlInput: { minLength: 12, maxLength: 32 } }}
            autoComplete={isSignin ? "current-password" : "new-password"}
            value={formValues.password}
            onChange={updateField("password")}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" fullWidth disabled={loading}>
            {loading ? "Przetwarzanie…" : isSignin ? "Zaloguj" : "Utwórz konto"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
