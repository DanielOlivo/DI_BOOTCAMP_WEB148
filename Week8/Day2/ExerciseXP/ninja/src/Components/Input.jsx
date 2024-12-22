import React, {useState, useEffect} from "react";
import './Input.css'

export default function Input(props){

    const [pattern, setPattern] = useState(new RegExp(props.pattern))
    const [text, setText] = useState(''); 
    const [isValid, setIsValid] = useState('visible');
    const [isEmpty, setIsEmpty] = useState('visible');

    const changeText = (e) => setText(e.target.value);

    useEffect(() => setIsValid(pattern.test(text) ? 'hidden' : 'visible'), [text])
    useEffect(() => setIsEmpty(text.length == 0 ? 'visible' : 'hidden'), [text]);

    return (
        <div>
            <input onChange={changeText}/>
            <label className="warning" style={{visibility: isEmpty}}>{props.name} is required</label>
            <label className='warning' style={{visibility: isValid}}>{props.name} is invalid</label>
        </div>
    )
}