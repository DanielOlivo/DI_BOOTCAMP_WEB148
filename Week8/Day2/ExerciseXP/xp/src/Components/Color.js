import React, {useState, useEffect} from "react";

export default function Color(){
    const [color, setColor] = useState('red')


    // renders twice, actually
    useEffect(() => {
        alert('useEffect')
    }, [color])

    const changeColor = (e) => setColor('blue');

    return (
        <div>
            <h1 style={{fontWeight:'bold'}}>My favorite color is <span style={{fontStyle:'italic'}}>{color}</span></h1>
            <button onClick={changeColor}>change the color</button>
        </div>
    )
}