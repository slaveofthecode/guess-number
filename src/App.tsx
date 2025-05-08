import { Header, StartGame, Playing } from '@components';
import './App.css';

function App() {
  return (
    <div className="relative">
      <Header />
      <StartGame />
      <Playing />
    </div>
  );
}

export default App;
