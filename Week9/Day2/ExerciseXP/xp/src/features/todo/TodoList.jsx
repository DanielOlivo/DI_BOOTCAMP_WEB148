import { useSelector, useDispatch } from "react-redux";
import { edit, del, toggleDone } from "./todoSlice";

const TodoList = () => {

    const todos = useSelector((state) => state.todo.todos)
    const active = useSelector((state) => state.todo.filter.active)
    const completed = useSelector((state) => state.todo.filter.completed)
    const dispatch = useDispatch()

    const getTodo = (todo, idx) => (
        <div
            className="flex flex-row justify-between mb-2"
            style={{
                display:(todo.isDone && completed) || (!todo.isDone && active) ? 'block' : 'none' 
            }}
        >
            <input 
                className="mr-2"
                type='checkbox'
                checked={todo.isDone}
                onChange={() => dispatch(toggleDone(idx))}
            />
            <input
                className="border-2 border-gray-200 rounded"
                type='text'
                value={todo.content}
                // readOnly={true}
                onChange={(e) => dispatch(edit({idx, newContent: e.target.value}))}
            />

            <button
                onClick={(e) => dispatch(del(idx))}
                className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded' 
            >-</button>
        </div>
    )

    return (
        <div
            className="w-1/2 mt-3 flex flex-col justify-start items-center" 
        >
            {todos.map((todo, i) => getTodo(todo, i))}</div>
    )
}

export default TodoList