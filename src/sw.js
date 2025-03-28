/* eslint-disable no-undef */
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

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
  //   event.respondWith(
  //     caches.match(event.request).then((response) => {
  //       return (
  //         response ||
  //         fetch(event.request).then((response) => {
  //           return caches.open('v1').then((cache) => {
  //             cache.put(event.request, response.clone());
  //             return response;
  //           });
  //         })
  //       );
  //     })
  //   );
});
