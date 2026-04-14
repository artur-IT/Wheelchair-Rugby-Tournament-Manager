interface ImportMetaEnv {
  readonly OPENROUTER_API_KEY: string;
  readonly DATABASE_URL: string;
  /** Canonical public site URL for OAuth redirect_uri (optional; falls back to request origin). */
  readonly PUBLIC_SITE_URL?: string;
  /** Google OAuth Web client (server-only; not exposed to browser without PUBLIC_ prefix). */
  readonly GOOGLE_CLIENT_ID?: string;
  readonly GOOGLE_CLIENT_SECRET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
