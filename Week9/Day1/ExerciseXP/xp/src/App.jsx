import { useContext, createContext, useState } from 'react'
import Counter from './Counter'

const ThemeContext = createContext()

function Provider({children}){
  const [isDark, setState] = useState(false);

  const switchTheme = () => setState(!isDark)

  return (
    <ThemeContext.Provider value={{isDark, switchTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}


function Component(){

  const {isDark, switchTheme} = useContext(ThemeContext);

  return (
    <>
      <div class={'panel '+ (isDark ? 'dark' : '')}>
        <p>hey</p>
        <p>This is a component, and I'm in a context. Theme is dark: "{String(isDark)}"</p>
        <button onClick={switchTheme}>switch theme</button>
      </div>
    </>
  )
}


function App() {

  return (
    <>
      <Provider>
        <Component />
      </Provider>

      <Counter />
    </>
  )
}

export default App
