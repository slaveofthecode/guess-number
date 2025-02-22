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
        theme_color: '#ffffff',
        background_color: '#000000',
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
      includeAssets: ['favicon.ico', 'robots.txt', 'icon/logo-mobile-192.png', 'icon/logo-mobile-512.png'],
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true, // <-- Esto borra la carpeta dist antes de cada build
  },
});
