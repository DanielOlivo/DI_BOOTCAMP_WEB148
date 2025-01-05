import { useRef } from "react"
import { Todo } from "./Todo"
import { MouseEvent } from "react"


const AddField = ({addFn =(arg: Todo) => {}}) => {
    const textRef = useRef<HTMLInputElement>(null)

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newId = Number(Math.floor(Math.random() * 1000000))
        const item: Todo = {id: newId, text: textRef.current.value}
        addFn(item)
        textRef.current.value = '' 
    }

    return (
        <div>
            <input type='text' ref={textRef} />
            <button
                onClick={handleClick} 
            >add</button>
        </div>
    )
}

export default AddField;