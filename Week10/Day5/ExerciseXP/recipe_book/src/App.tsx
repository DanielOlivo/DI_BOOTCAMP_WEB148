import { useEffect, useState } from "react"
import RecipeCollection from "./model/RecipeCollection"
import Collection from "./templates/Collection"
import init from './init'
import AddField from "./templates/AddField"

// It is stated in the task that we are using class 
// I don't get it - why?
const collection = new RecipeCollection()

function App() {
  const [trigger, setTrigger] = useState<boolean>(false)

  const toggleTrigger = () => setTrigger(!trigger)
  collection.triggerFn = toggleTrigger

  useEffect(() => {
    init.forEach(item => collection.add(item))
    toggleTrigger()
  }, [])

  return (
    <div
      className='flex flex-col justify-start items-center w-full' 
    >
      <AddField adder={collection} />
      <Collection recipes={collection.recipes}/>
      <button
        onClick = {(e) => collection.removeAll()} 
      >Clear all</button>
    </div>
  )
}

export default App
