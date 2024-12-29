import { useSelector, useDispatch } from "react-redux";
import { toggleActive, toggleCompleted } from "./todoSlice";

export default function Filter(){

    const dispatch = useDispatch()
    const active = useSelector((state) => state.todo.filter.active);
    const completed = useSelector((state) => state.todo.filter.completed)

    return (
        <div className="flex flex-row justify-between w-4/12 m-2">

            <div>
                <input 
                    type='checkbox'
                    checked={active}
                    onChange={() => dispatch(toggleActive())}
                    className="m-2"
                />
                <label>active</label>
            </div>

            <div>
                <input 
                    type='checkbox'
                    checked={completed}
                    onChange={() => dispatch(toggleCompleted())}
                    className="m-2"
                />
                <label>completed</label>
            </div>

        </div>
    )
}