import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Guess Number PWA App',
        short_name: 'guess-number',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon/logo-mobile-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon/logo-mobile-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    })
  ],
  base: "/", // Ensures Vercel serves the files correctly
  build: {
    outDir: "dist", // Where the production files will be saved
  },
})