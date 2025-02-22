import StartGame from './components/StartGame'
import Playing from './components/Playing'

import './App.css'

function App() {
  
  return (
    <div className='bg-slate-700'>
      <h3 className="text-3xl font-bold underline">Logs</h3>
      <ul className='text-xs'>
        <li>
          <strong>20250219_2030</strong> : <small>README file was updated</small> 
        </li>
        <li>
          <strong>20250222_1830</strong> : <small>Improvements related to the PWA settings</small> 
        </li>
      </ul>
      <StartGame />
      <Playing />
    </div>
  )
}

export default App
