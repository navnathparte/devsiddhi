import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "1416-2409-40c0-100a-50c8-3cc7-9197-b0d9-7644.ngrok-free.app",
    ],
  },
});
