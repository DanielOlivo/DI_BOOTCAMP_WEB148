import MealItem from "./components/Meal"
import { useItems } from "./features/food/hooks"
import { isMeal } from "./types/declarations"
import type { Meal } from "./types/declarations"
import { List } from "./components/List"
import SearchField from "./components/SearchField"

function App() {

  const items = useItems()

  return (
    <div
      className="flex flex-col justify-start items-center" 
    >
      <SearchField />
      <List items={items} renderFn={renderFn} />
    </div>
  )
}

export default App


function renderFn(item: any) {
  if(isMeal(item)){
    return <MealItem data={item as Meal} />
  }
}