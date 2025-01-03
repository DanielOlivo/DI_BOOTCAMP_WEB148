import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit, remove } from "./taskSlice";
import Time from "../time/Time";
import { selectAllCategories } from "../categories/categorySlice";
import ItemCategorySelector from "../categories/ItemCategorySelector";

export default function Task({task}){

    const dispatch = useDispatch()

    const {id, title, category, date} = task;
    const [onEdit, setOnEdit] = useState(false)
    const categories = useSelector(selectAllCategories);

    const categoryColor = (function(){
        if(task.category in categories){
            return categories[task.category];
        }
        return 'blue';
    })()

    return (
        <div
            key={task.id}
            className="flex flex-row w-full justify-between items-center rounded py-2" 
            // style={{border: `2px solid black`}}
            style={{'borderBottom': `2px solid ${categoryColor}`}}
        >
            {/* <label
                style={{color: categoryColor, opacity: 0.7}} 
            >{category}</label> */}

            <ItemCategorySelector value={category}/>
            <input 
                type='checkbox' 
                checked={task.checked} 
                onChange={(e) => dispatch(edit({id, checked: e.target.checked}))}
            />

            {/* <Time /> */}

            <input 
                defaultValue={title} 
                onDoubleClick={(e) => setOnEdit(true)}
                onBlur={(e) => {
                    e.preventDefault()
                    dispatch(edit({id, title: e.target.value}))
                    setOnEdit(false)
                }}
                readOnly={!onEdit}
            />
            <input 
                type='date' 
                defaultValue={date} 
                onDoubleClick={(e) => setOnEdit(true)}
                onBlur={(e) => {
                    e.preventDefault()
                    dispatch(edit({id, date: e.target.value}))
                    setOnEdit(false)
                }}
                readOnly={!onEdit}
            />

            {/* I found this on the internet and I think this one is cool */}
            <button
                onClick={(e) => dispatch(remove({id}))}
            >&#x2421;</button>
        </div>
    )
}