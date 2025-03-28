/* eslint-disable no-undef */
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((reg) => console.log('SW PWA register:', reg))
    .catch((err) => console.error('Error registrando el SW:', err));

  navigator.serviceWorker
    .register('/OneSignalSDKWorker.js')
    .then((reg) => console.log('SW Onesignal registrado:', reg))
    .catch((err) => console.error('Error registrando el SW:', err));
}

createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>
);
