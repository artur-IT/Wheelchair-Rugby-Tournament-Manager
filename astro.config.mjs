// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

const isVercelBuild = process.env.VERCEL === "1";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],
  server: { port: 3000 },
  adapter: vercel(),
  vite: {
    ssr: {
      // Vercel adapter can fail when it needs to symlink externalized CJS packages.
      // On Vercel we bundle supertokens-node to avoid symlink step; locally we keep it external.
      ...(isVercelBuild
        ? { noExternal: ["supertokens-node"] }
        : { external: ["supertokens-node"] }),
    },
  },
});
