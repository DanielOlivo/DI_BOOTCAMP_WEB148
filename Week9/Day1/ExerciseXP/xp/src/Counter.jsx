import React, { useRef, useState} from "react";


export default function Counter(props){

    const inputRef = useRef('') 
    const [length, setLength] = useState(0)

    const onChange = (e) => setLength(inputRef.current.value.length)

    return (
        <div>
            <input type='text' ref={inputRef} onChange={onChange}/>
            <p>Length: {length}</p>
        </div>
    )
}