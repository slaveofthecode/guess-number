import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures Vercel serves the files correctly
  build: {
    outDir: "dist", // Where the production files will be saved
  },
})