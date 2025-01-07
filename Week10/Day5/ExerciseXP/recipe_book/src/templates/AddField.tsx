import { MouseEvent, ReactNode, useRef } from "react";
import { AddFieldProp, RecipeAdder } from "../typeDeclarations";
import RecipeItem from "../model/RecipeItem";

function isBlank(str: string): boolean {
    return (!str || /^\s*$/.test(str))
}

const AddField = ({adder}: AddFieldProp): ReactNode => {

    const titleRef = useRef<HTMLInputElement>(null);
    const ingredientsRef = useRef<HTMLTextAreaElement>(null);
    const instructionsRef = useRef<HTMLTextAreaElement>(null);


    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(!titleRef.current || !ingredientsRef.current || !instructionsRef.current){
            return;
        }

        if(
            isBlank(titleRef.current.value) 
            || isBlank(ingredientsRef.current.value)
            || isBlank(instructionsRef.current.value)){
                return;
            } 

        const id = Number(Math.floor(Math.random() * 100000))
        const ingItems: string[] = ingredientsRef.current.value.split('\n')

        adder.add(new RecipeItem(
            {
                id, 
                title: titleRef.current.value, 
                ingredients: ingItems, 
                instructions: instructionsRef.current.value, 
                isFavorite: false,
            },
            () => {}
        ))
    
        titleRef.current.value = ''
        ingredientsRef.current.value = ''
        instructionsRef.current.value = ''
    }

    return (
        <form 
            className="
                w-2/3
                flex flex-col 
            " 
            id='recipeEntryForm'>
            <input 
                type='text'
                id='recipeTitle'
                placeholder="Recipe Title"
                required 
                ref={titleRef}
                className="border border-gray-200 my-2 rounded"
            />
            <textarea
                id='ingredients'
                placeholder="Enter ingredients (one per line)"
                required
                ref={ingredientsRef}
                className='border border-gray-200 my-2 rounded'
            />
            <textarea 
                id='instructions'
                placeholder="Enter cooking instructions" 
                required
                ref={instructionsRef}
                className="border border-gray-200 my-2 rounded"
            />
            <button 
                type='submit' 
                onClick={handleClick}
                className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            >Add recipe</button>
        </form>
    )
}

export default AddField;