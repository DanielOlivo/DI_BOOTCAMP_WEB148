import { useSelector, useDispatch } from "react-redux";
import { setNextMonth, setPrevMonth } from "./pickerSlice";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'
];

export default function Header(){

    const dispatch = useDispatch()
    const {year, month} = useSelector((state) => state.month.first);

    return (
        <header
            className="w-full h-11 flex flex-row justify-around
            bg-green-700 text-white" 
        >
            <h1
                className='text-4xl' 
            >Planner</h1>
            <div
                className="flex flex-row w-44 justify-between items-center" 
            >
                <button
                    onClick={() => dispatch(setPrevMonth())} 
                >{'<'}</button>
                <div>{months[month]} {year}</div>
                <button
                    onClick={() => dispatch(setNextMonth())} 
                >{'>'}</button>
            </div>
        </header>
    )
}