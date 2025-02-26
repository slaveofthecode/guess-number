/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCkGDpV2crcPzjSRjwaFZ_CLUvOQ3HtqBs',
  authDomain: 'guess-number-123-pwa.firebaseapp.com',
  projectId: 'guess-number-123-pwa',
  storageBucket: 'guess-number-123-pwa.firebasestorage.app',
  messagingSenderId: '634482060879',
  appId: '1:634482060879:web:5124b0c7c440b32e97043a',
  measurementId: 'G-B93Q80ZYG4',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
