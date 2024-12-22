import React, {useState} from "react";

export default function Garage(props){
    const [size, setSize] = useState(props.size);

    const changeSize = (e) => setSize(e.target.value);

    return <span>Who lives in my {size} Garage?</span>
}