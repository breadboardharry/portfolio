import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vite.dev/config/
export default defineConfig({
  root,
  plugins: [react(), tailwindcss()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about", "index.html"),
      },
    },
  },
});
