import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: './',
  server: {
    port: 3000, // Set the dev server to listen on port 3000, this is also set in the devcontainer.json
  }
})
