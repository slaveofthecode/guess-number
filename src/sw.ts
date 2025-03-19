import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('App is ready to work offline.');
  },
});

const initPWAWorker = () => {
  updateSW();
};

export default initPWAWorker;
