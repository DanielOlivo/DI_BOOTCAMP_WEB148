import { memo, ReactNode, useState } from "react";
import RecipeItem from "../model/RecipeItem";
import { ItemProp } from "../typeDeclarations";

const RecipeTemplate = ({item}: ItemProp): ReactNode => {

    const [trigger, setTrigger] = useState(false) 
    const toggleTrigger = () => setTrigger(!trigger)

    return (
        <div 
            key={item.id}
            className="
                w-2/3 my-4
                border-2 border-gray-100 rounded 
            "
        >
            <div
                className='flex flex-row justify-between' 
            >
                <h3>{item.title}</h3>
                <div>
                    <input 
                        type='checkbox' 
                        checked={item.isFavorite} 
                        onChange={(e) => {
                            item.isFavorite = e.target.checked
                            toggleTrigger()
                        }}
                    />
                    <label>favorite</label>

                </div>
            </div>

            <details open={true}>
                <summary>Ingredients</summary>
                <ul
                    className="mx-5" 
                >
                    {item.ingredients.map((ing, i) => 
                        <li>{ing}</li>
                    )}
                </ul>
            </details>

            <details open={true}>
                <summary>Instructions</summary>
                <p
                    className="mx-2 mt-4" 
                >{item.instructions}</p>
            </details>

            <button
                className='
                    mt-6
                    text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900' 
                onClick={(e) => {
                    item.removeFn()
                    toggleTrigger()
                }}
            >Remove</button>
        </div>
    )
}

export default RecipeTemplate