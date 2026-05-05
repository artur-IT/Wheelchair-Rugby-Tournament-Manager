// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],
  server: { port: 3000 },
  adapter: vercel(),
  vite: {
    ssr: {
      // Keep supertokens-node as a real Node dependency (CJS). Do NOT use ssr.noExternal here —
      // bundling it breaks with "exports is not defined". Externalising avoids duplicate copies
      // in Vite's SSR module runner and fixes "Initialisation not done" / wrong singleton.
      external: ["supertokens-node"],
    },
  },
});
