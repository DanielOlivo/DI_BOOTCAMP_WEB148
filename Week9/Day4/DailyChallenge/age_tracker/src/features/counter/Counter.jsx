import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counterSlice"


export default function Counter(){
    const age = useSelector(state => state.age.age)
    const onLoading = useSelector(state => state.age.onLoading)
    const dispatch = useDispatch()

    const onLoadingSign = () => (
        <div className='loading'>Loading</div>
    )

    return (
        <div
            className="flex flex-row justify-between mt-4" 
        >
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={(e) => dispatch(decrement(age))} 
            >get younger</button>
            <label>{onLoading ? onLoadingSign() : age}</label>
            <button
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                onClick={(e) => dispatch(increment(age))} 
            >get older</button>
        </div>
    )
}