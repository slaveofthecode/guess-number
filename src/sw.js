/* eslint-disable no-undef */
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

OneSignal.push.init({
  appId: '26b12df5-7d0b-4824-b51e-50ed5471f59f',
  safari_web_id: 'web.onesignal.auto.0d8cfe1b-addf-4fe0-8094-42e4bf6360cd',
  notifyButton: { enable: true },
  serviceWorkerPath: '/sw.js', // 🔥 Use the PWA's service worker
  allowLocalhostAsSecureOrigin: true,
});

self.addEventListener('install', () => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  console.log('Service Worker activado');
  self.clients.claim();
});

self.addEventListener('fetch', () => {
  console.log('Fetch event');
  return;
});

self.addEventListener('push', (event) => {
  console.log('Push event', event);
  return;
});

self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked', event);
  return;
});

self.addEventListener('notificationclose', (event) => {
  console.log('Notification closed', event);
  return;
});
