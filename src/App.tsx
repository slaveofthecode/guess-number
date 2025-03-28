import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

// Importa tus otros componentes y estilos
import StartGame from './components/StartGame';
import Playing from './components/Playing';
import Header from './components/Header';

import './App.css';

function App() {
  useEffect(() => {
    // Inicializar OneSignal cuando el componente se monta
    OneSignal.init({
      appId: '26b12df5-7d0b-4824-b51e-50ed5471f59f',
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: true,
      },
      serviceWorkerParam: { scope: '/' },
      serviceWorkerPath: './sw.js',
    });
  }, []);

  return (
    <div>
      <Header />
      <StartGame />
      <Playing />
    </div>
  );
}

export default App;
