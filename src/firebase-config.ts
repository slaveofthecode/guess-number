/* eslint-disable no-undef */
// import firebase from 'firebase/app';
import 'firebase/messaging';
import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCkGDpV2crcPzjSRjwaFZ_CLUvOQ3HtqBs',
  authDomain: 'guess-number-123-pwa.firebaseapp.com',
  projectId: 'guess-number-123-pwa',
  storageBucket: 'guess-number-123-pwa.firebasestorage.app',
  messagingSenderId: '634482060879',
  appId: '1:634482060879:web:5124b0c7c440b32e97043a',
  measurementId: 'G-B93Q80ZYG4',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };

  new Notification(notificationTitle, notificationOptions);
});

export { messaging };
