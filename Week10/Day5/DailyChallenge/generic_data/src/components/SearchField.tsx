import { ReactNode, useRef } from "react";
import { useAppDispatch, useSearch } from "../features/food/hooks";
import { useDispatch } from "react-redux";
import { fetchMeals } from "../features/food/foodSlice";

const SearchField = (): ReactNode => {

    const fieldRef = useRef(null)
    // const searchFn = useSearch()

    // const dispatch = useDispatch()
    const dispatch = useAppDispatch()

    const handleSearch = (arg: string) => {
        dispatch(fetchMeals(arg))
    }

    return (
        <div
            className="w-2/3 flex flex-row justify-between items-center mx-14" 
        >
            <input 
                className="
                    border border-gray-200 rounded w-2/3 px-4 py-4 
                "
                ref={fieldRef}
                placeholder="pasta, salad..." 
            />
            <button 
                className="
                text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
                "
                type='submit'
                onClick={(e) => {
                    const value = fieldRef.current!.value!
                    handleSearch(value);
                }}
            >Search</button>
        </div>
    )
}

export default SearchField;