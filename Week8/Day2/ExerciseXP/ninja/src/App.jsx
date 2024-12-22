import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Components/Clock'
import Form from './Components/Form'

// I'm too lazy to fix styling

function App() {

  return (
    <div>
      <Clock />
      <Form />
    </div>
  )
}

export default App
