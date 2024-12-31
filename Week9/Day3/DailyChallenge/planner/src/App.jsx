import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './features/todo/List'
import AddField from './features/todo/AddField'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className='flex flex-col justify-start items-center mt-5' 
    >
      <h1
        className='text-6xl mb-3' 
      >Planner</h1>
      <AddField />
      <List />
    </div>
  )
}

export default App
