import React from 'react'
import './App.css'
import HookMqtt from './components/'

function App() {
  return (
    <div className="App">
      <h3 className="navbar">GB Pub/Sub React App</h3>
      <HookMqtt />
    </div>
  )
}

export default App