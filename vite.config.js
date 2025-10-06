import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 allows access from local network
    port: 5173, // optional: set fixed port (default is 5173)
  },
});
