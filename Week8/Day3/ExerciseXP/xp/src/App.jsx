import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BuggyCounter from './Components/BuggyCounter'
import ErrorBoundary from './Components/ErrorBoundary'
import Color from './Components/Color'
import Lifecycle from './Components/Lifecycle'

function App() {

  return (
    <div>

      {/* sim 1 */}
      {/* <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary> */}

      {/* sim 2 */}
      {/* <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary> */}

        {/* sim 3 */}
      {/* <BuggyCounter /> */}

      {/* <Color /> */}

      <Lifecycle />

    </div>

  )
}

export default App
