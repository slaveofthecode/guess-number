import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "/", // Ensures Vercel serves the files correctly
  build: {
    outDir: "dist", // Where the production files will be saved
  },
})