/* eslint-disable no-undef */
import { useEffect } from 'react';

import StartGame from './components/StartGame';
import Playing from './components/Playing';
import Header from './components/Header';
import { messaging } from './firebase-config'; // Add this line

import './App.css';

function App() {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          const token = await messaging.getToken();
          console.log('Token:', token);
        } else {
          console.error('Permission not granted for Notification');
        }
      } catch (error) {
        console.error('Error getting permission for notifications', error);
      }
    };

    requestPermission();
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
