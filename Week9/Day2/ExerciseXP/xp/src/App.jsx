import { useState } from 'react'
import TodoList from './features/todo/TodoList'
import AddTodoField from './features/todo/AddTodoField'
import Filter from './features/todo/Filter'

function App() {
  const [showInput, setShowInput] = useState(false)

  return (
    <div className='flex flex-col items-center justify-start'>
      <header className='text-6xl'>Todo List</header>
      <Filter />
      <AddTodoField />
      <TodoList />
    </div>
  )
}

export default App
