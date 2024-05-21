// for library build

import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      include: "**/*.{js,ts,jsx,tsx}",
    }),
  ],
  build: {
    emptyOutDir: true,
    outDir: "dist",
    target: "esnext",
  },
});
