import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss()],
   base: "/", // Set base path for root deployment
   build: {
      outDir: "dist",
      rollupOptions: {
         input: "index.html", // Explicit input for SPA
         external: [],
      },
   },
   publicDir: "public", // Ensure public directory files are copied (includes _redirects)
});
