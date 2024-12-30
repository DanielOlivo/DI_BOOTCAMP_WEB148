import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './features/datePicker/Header'
import Month from './features/datePicker/Month'
import Tasks from './features/tasks/Tasks'
import MonthSider from './features/datePicker/MonthSider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div
        className='w-full h-full flex flex-row justify-around items-stretch' 
      >
        <MonthSider dir='prev' />
        <Month />
        <MonthSider dir='next' />
        <Tasks />
      </div>
    </>
  )
}

export default App
