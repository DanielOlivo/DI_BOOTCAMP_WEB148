import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import {add} from "./taskSlice"

export default function Tasks(){

    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.selected);
    const date = useSelector(state => state.month.selected)

    return(
        <div
            className="border-2 border-gray-100 w-1/5 flex flex-col justify-start items-center" 
        >
            <h1>Tasks</h1>
            <>
                {tasks.map(task => <Task task={task} />)}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(add({title: 'TODO', details: 'details', date}))
                    }}
                >Add</button>
            </>
        </div>
    )
}