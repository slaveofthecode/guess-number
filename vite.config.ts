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
      devOptions: {
        enabled: true, // Activa el SW en modo desarrollo
      },
      manifest: {
        orientation: 'portrait',
        name: 'My Guess Number PWA App',
        short_name: 'guess-number',
        description: 'A simple number guessing game',
        start_url: '/',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#000000',
        icons: [
          {
            src: '/icons/logo-mobile-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/logo-mobile-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      includeAssets: ['icons/logo-mobile-192.png', 'icons/logo-mobile-512.png'],
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'], // Archivos a cachear
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\/.*$/, // Maneja las solicitudes
            handler: 'CacheFirst', // Usa cache primero si está disponible
            options: {
              cacheName: 'runtime-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 86400 }, // 1 día
            },
          },
        ],
      },
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true, // This deletes the dist folder before each build
  },
});
