import StartGame from './components/StartGame';
import Playing from './components/Playing';

import './App.css';

function App() {
  return (
    <div>
      <h3 className="text-3xl font-bold underline">Logs</h3>
      <ul className="text-xs m-2">
        <li className="ms-2 text-start">
          <strong className="w-[105px] inline-block">20250223_0236</strong> :{' '}
          <small>EsLint was added</small>
        </li>
        <li className="ms-2 text-start">
          <strong className="w-[105px] inline-block">20250223_0128</strong> :{' '}
          <small>Clean code</small>
        </li>
        <li className="ms-2 text-start">
          <strong className="w-[105px] inline-block">20250222_1830</strong> :{' '}
          <small>Improvements related to the PWA settings</small>
        </li>
        <li className="ms-2 text-start">
          <strong className="w-[105px] inline-block">20250219_2030</strong> :{' '}
          <small>README file was updated</small>
        </li>
      </ul>
      <StartGame />
      <Playing />
    </div>
  );
}

export default App;
