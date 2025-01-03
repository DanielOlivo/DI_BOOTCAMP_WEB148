import { useDispatch } from "react-redux"
import { add } from "./taskSlice"
import { useState, useRef, useEffect } from "react"
import ItemCategorySelector from "../categories/ItemCategorySelector";

export default function AddField(){
    
    // just to trigger useEffect
    const [toggle, setToggle] = useState(false)

    const [isValid, setIsValid] = useState(false);

    const titleRef = useRef()
    const dateRef = useRef()
    const categoryRef = useRef(0)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('title', titleRef.current.value, 'date', dateRef.current.value, 'cat', categoryRef)

        setIsValid(
            (titleRef.current.value.length > 0) &&
            (dateRef.current.value.length > 0))
    }, [toggle])

    return (
        <div
            className="flex flex-row" 
        >
            <ItemCategorySelector ref={categoryRef}/>
            <input type='text' placeholder='task title' ref={titleRef} onChange={(e) => setToggle(!toggle)}/>
            <input type='date' ref={dateRef} onChange={(e) => setToggle(!toggle)}/>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    if(isValid){
                        dispatch(add({
                            title: titleRef.current.value, 
                            date: dateRef.current.value,
                            category: categoryRef.current.value
                        }))
                        return
                    }
                    console.log('data is not valid')
                }}
            >Add</button>
        </div>
    )
}