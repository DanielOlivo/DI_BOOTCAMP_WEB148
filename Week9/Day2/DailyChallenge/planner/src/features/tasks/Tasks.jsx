import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import {add} from "./taskSlice"

export default function Tasks(){

    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.selected);

    // const Task = (task) => {
    //     const {title, details} = task
    //     return (
    //         <div
    //             className='border-2 rounded border-gray-200'  
    //         >
    //             <h3>{title}</h3>
    //             <p>{details}</p>
    //         </div>
    //     )
    // }

    return(
        <div
            className="border-2 border-gray-100 w-1/5" 
            onDoubleClick={(e) => {
                e.preventDefault();
                dispatch(add({title: 'TODO', details: 'details'}))
            }}
        >
            <h1>Tasks</h1>
            <div>
                {tasks.map(task => <Task task={task} />)}
            </div>
        </div>
    )
}