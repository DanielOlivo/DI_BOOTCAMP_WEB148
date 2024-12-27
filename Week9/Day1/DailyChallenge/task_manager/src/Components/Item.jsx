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
        <div style={{
            display: 
                (filter.state.active && !todo.check) 
                || (filter.state.completed && todo.check) 
                ? 'block' : 'none'
        }}>
            <input 
                type='checkbox'
                value={todo.check}
                onChange={handleCheckChange}
            />

            <DblClickField 
                placeholder='task'
                onChange={handleLabelChange}
                value={todo.value}
                readOnly={todos[idx].check}
            />

            <button onClick={handleDelete}>-</button>
        </div>
    )
}