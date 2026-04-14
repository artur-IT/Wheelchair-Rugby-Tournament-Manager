/* eslint-env node */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const { console } = globalThis;

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const viteDir = path.join(root, "node_modules", ".vite");

if (fs.existsSync(viteDir)) {
  fs.rmSync(viteDir, { recursive: true, force: true });
  console.log("Removed node_modules/.vite (Vite pre-bundle cache).");
} else {
  console.log("No node_modules/.vite directory to remove.");
}
