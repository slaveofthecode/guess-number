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
