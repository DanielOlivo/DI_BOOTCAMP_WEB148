import React, {useState} from "react";
import Garage from "./Garage";

export default function Car(){

    const [model, setModel] = useState('Mustang');
    const [color, setColor] = useState('White');

    return <div>
        <Garage size='small'/> <h1>This is {color} {model}</h1>
    </div>
}