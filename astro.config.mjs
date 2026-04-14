// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],
  server: { port: 3000 },
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    // Pre-bundle heavy club route deps at dev server start to avoid parallel lazy-optimize + "504 Outdated Optimize Dep".
    optimizeDeps: {
      include: [
        "@emotion/react",
        "@emotion/styled",
        "@mui/icons-material/ExpandMore",
        "@mui/material",
        "@tanstack/react-query",
        "date-fns",
        "react-hook-form",
      ],
    },
  },
});
