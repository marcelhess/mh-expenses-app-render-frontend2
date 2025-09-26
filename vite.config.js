import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss()],
   build: {
      rollupOptions: {
         // Ensure _redirects file is copied to dist
         external: [],
      },
   },
   publicDir: "public", // Ensure public directory files are copied
});
