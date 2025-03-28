/* eslint-disable no-undef */

self.addEventListener('install', () => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('Service Worker activado');
  self.clients.claim();
});

self.addEventListener('fetch', () => {});
