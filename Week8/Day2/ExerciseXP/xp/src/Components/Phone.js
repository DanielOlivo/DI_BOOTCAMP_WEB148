import React, {useState} from "react";

export default function Phone(){

    const colors = ['black', 'white', 'blue']

    const [idx, setIdx] = useState(0);
    const [brand, setBrand] = useState('Samsung')
    const [model, setModel] = useState('Galaxy S20')
    const [color, setColor] = useState(colors[idx])
    const [year, setYear] = useState(2020)


    const nextIdx = () => {
        setIdx((idx + 1) % colors.length);
        console.log(idx);
        return idx;
    }

    const changeColor = (e) => setColor(colors[nextIdx()])

    return (
        <div style={{border: '1px solid black'}}>
            <h1>My phone is a {brand}</h1>
            <p>It is a {color} {model} from {year}.</p>
            <br/>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}