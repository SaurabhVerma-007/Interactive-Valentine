import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "client",
  base: "/saurabhverma-007-interactive-valentine/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
