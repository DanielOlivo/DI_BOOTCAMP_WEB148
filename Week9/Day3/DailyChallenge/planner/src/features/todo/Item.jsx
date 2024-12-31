import { useState } from "react"
import { useDispatch } from "react-redux"
import { update, remove } from "./todoSlice"

export default function Todo({item}){
    const dispatch = useDispatch()
    const [onEdit, setOnEdit] = useState(false)

    return (
        <div key={item.id}>
            <input 
                type='checkbox' 
                className="mr-2"
                defaultChecked={!item.active}
                onChange={(e) => {
                    dispatch(update({id: item.id, active: e.currentTarget.checked}))
                }}
            />

            <input 
                type='text' 
                readOnly={!onEdit} 
                value={item.title}
                onDoubleClick={(e) => setOnEdit(true)}
                onBlur={(e) => setOnEdit(false)} 
                onChange={(e) => {
                    e.preventDefault()
                    dispatch(update({id: item.id, title: e.target.value}))
                }}
            />
            <input 
                type='date' 
                value={item.date} 
                readOnly={!onEdit}
                onDoubleClick={(e) => setOnEdit(true)}
                onBlur={(e) => setOnEdit(false)} 
                onChange={(e) => {
                    e.preventDefault()
                    dispatch(update({id: item.id, date: e.target.value}))
                }}
            />
            <button
                className ='
            focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                onClick={(e) => {
                    e.preventDefault()
                    // console.log('delete', item.id)
                    dispatch(remove(item.id))
                }}
            >X</button>
        </div>
    )
}