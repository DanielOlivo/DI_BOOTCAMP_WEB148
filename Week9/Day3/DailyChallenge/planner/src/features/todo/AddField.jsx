import { useDispatch } from "react-redux";
import { useRef } from "react";
import { add } from "./todoSlice";

export default function AddField(){

    const titleRef = useRef()
    const dateRef = useRef()
    const dispatch = useDispatch()

    return (
        <div
            className="border-b-2 border-gray-300 mb-5" 
        >
            <input placeholder="title" ref={titleRef}/>
            <input 
                className='mr-2'
                type='date' 
                ref={dateRef} 
            />
            <button
                className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900' 
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(add({title: titleRef.current.value, date: dateRef.current.value}));
                    titleRef.current.value = ''
                    dateRef.current.value = ''
                }}
            >add</button>
        </div>
    )
}