import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './Components/PostList'
import UsersList from './Components/UsersList'

function App() {

  return (
    <>
      <PostList />
      <UsersList />
    </>
  )
}

export default App
