import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorBoundary from './Components/ErrorBoundary'
import PostList from './Components/PostList'
import Example1 from './Components/Example1'
import Example2 from './Components/Example2'
import Example3 from './Components/Example3'

// import './App.css'


const Home = () => {
  return (
    <div>Home</div>
  )
}

const Profile = () => {
  return (
    <div>Profile</div>
  )
}

const Shop = () => {
  throw new Error('some error')
}

const Nav = (props) => {
  
  const [active, setActive] = useState(0);

  const changeActive = (idx) => setActive(idx);

  return (
    <ul className='nav nav-pills'>
      {props.links.map((name, idx) => (
        <li className='nav-item'>
          <Link to={'/' + name} className={`nav-link ${active == idx ? 'active': ''}`} onClick={() => changeActive(idx)}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}


function App() {
  return (
    <div>

      <Nav links={['Home', 'Profile', 'Shop']}></Nav>

        <Routes>
          <Route exact path="/home" element={<ErrorBoundary><Home /></ErrorBoundary>} />
          <Route path="/profile" element={<ErrorBoundary><Profile /></ErrorBoundary>} />
          <Route path="/Shop" element={<ErrorBoundary><Shop /></ErrorBoundary>} />
        </Routes>

      <PostList />

      <Example1 />
      <Example2 />
      <Example3 />

    </div>
  )
}

export default App
