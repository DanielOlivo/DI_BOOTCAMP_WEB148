import { useSelector, useDispatch } from "react-redux"
import { add } from "./todoSlice"
import { useState } from "react"

export default function AddTodoField() {
    const dispatch = useDispatch()

    const [val, setVal] = useState('')

    const handleEnter = (e) => {
        e.preventDefault()
        if(e.keyCode == 13){
            dispatch(add(val));
            setVal('')
        }
    }

    return (
        <input 
            placeholder='todo'
            onChange={(e) => setVal(e.target.value)}
            onKeyUp={(e) => handleEnter(e)}
            className="border-2 border-gray-200 w-4/12 rounded"
            value={val}
        />
    )
}