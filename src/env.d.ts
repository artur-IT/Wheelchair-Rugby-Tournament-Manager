interface ImportMetaEnv {
  readonly OPENROUTER_API_KEY: string;
  readonly DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
