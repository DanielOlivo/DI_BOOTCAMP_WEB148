import React, {useState} from 'react';
import './Card.css'

export default function Card(props){
    
    const [total, setTotal] = useState(0);

    const inc = (e) => setTotal(total + 1);

    return (
        <div className='card'>
            <label className='total'>{total}</label>
            <label className='lang'>{props.name}</label>
            <button onClick={inc}>Click here</button>
        </div>
    )
}