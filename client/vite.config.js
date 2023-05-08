import { defineConfig, preview } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/admin": "http://localhost:3000",
      "/api": "http://localhost:3000",
    },
  },
});
