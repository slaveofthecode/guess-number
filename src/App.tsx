import StartGame from './components/StartGame'
import Playing from './components/Playing'

import './App.css'

function App() {
  
  return (
    <>
      <h3 className="text-3xl font-bold underline">Logs</h3>
      <ul>
        <li>
          <strong>20250219_2030</strong> : <small>README file was updated</small> 
        </li>
      </ul>
      <StartGame />
      <Playing />
    </>
  )
}

export default App
