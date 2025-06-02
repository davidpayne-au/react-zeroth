import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  server: {
    host: "0.0.0.0", // Allow connections from outside the container if we are running in a dev container
    port: 5173, // Set the dev server to listen on port 5173, this is also set in the devcontainer.json
  },
});
