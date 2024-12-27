import { useContext, useState } from "react";
import { TaskContext } from "../TaskManager";

export default function AddField(props){


    const {dispatch} = useContext(TaskContext);
    const [val, setVal] = useState('')

    const handleChange = (e) => setVal(e.target.value);
    const handleEnter = (e) => {
        if(e.keyCode == 13){
            e.preventDefault();
            dispatch({type: 'create', payload: {value: val}})
            setVal('');
        }
    }

    return (
        <input 
            placeholder="type a task"
            value={val}
            onChange={handleChange}
            onKeyUp={handleEnter}
        />
    )
}