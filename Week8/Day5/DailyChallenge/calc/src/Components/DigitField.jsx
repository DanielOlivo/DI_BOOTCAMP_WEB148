import React, {useState, useEffect} from "react";

export default function DigitField(props){
    const [val, setVal] = useState('')

    const handleChange = (e) => {
        const upd = e.target.value.replace(/\D/g, '');
        setVal(upd);
        if(props.onChange){
            props.onChange(upd)
        }
    }

    return (
        <input onChange={handleChange} style={props.style} value={val}/>
    )
}