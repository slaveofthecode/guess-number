/* eslint-disable no-undef */
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((reg) => console.log('SW registered:', reg))
    .catch((err) => console.error('Error registring the SW:', err));
}

createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>
);
