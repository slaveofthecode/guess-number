/* eslint-disable no-undef */
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

self.addEventListener('install', () => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('Service Worker activado');
  self.clients.claim();
});

self.addEventListener('fetch', () => {
  // Aquí puedes manejar caché si es necesario
});
