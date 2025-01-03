import Header from "./features/header/Header"
import AddField from "./features/tasks/AddField"
import List from "./features/tasks/List"

function App() {

  return (
    <>
      <Header />
      <div
        className="flex flex-col justify-start items-center max-h-screen" 
      >
        <AddField />
        <List />
      </div>
    </>
  )
}

export default App
