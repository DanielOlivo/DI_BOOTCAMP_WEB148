import { useContext } from "react";
import DblClickField from "./DblClickField";
import { FilterContext } from "../FilterContext";
import { TaskContext } from "../TaskManager";

export default function Item(props){

    const filter = useContext(FilterContext)
    const tasks = useContext(TaskContext)

    const {idx, todo} = props;
    const {todos, dispatch} = tasks;

    const handleLabelChange = (upd) => dispatch({type: 'edit', payload: {idx: idx, value: upd}})
    const handleCheckChange = (e) => dispatch({type: 'edit', payload: {idx: idx, check: e.currentTarget.checked}})
    const handleDelete = (e) => dispatch({type: 'delete', payload: {idx: idx}})

    return (
        <div 
            style={{
                display: 
                    (filter.state.active && !todo.check) 
                    || (filter.state.completed && todo.check) 
                    ? 'block' : 'none'}}
            className="rounded border-grey-300 border-2 mb-2"
        >
            <input 
                type='checkbox'
                value={todo.check}
                onChange={handleCheckChange}
            />

            <DblClickField 
                placeholder='task'
                onChange={handleLabelChange}
                value={todo.value}
                readOnly={todo.check}
            />

            <button 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleDelete}>-</button>
        </div>
    )
}