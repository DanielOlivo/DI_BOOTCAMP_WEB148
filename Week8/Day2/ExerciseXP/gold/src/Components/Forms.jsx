import React, {useEffect, useState} from "react";
import './Forms.css'

export default function Forms(){

    const [name, setName] = useState('')
    const [visibility, setVisibility] = useState(false);
    const [age, setAge] = useState(null);
    const [isValidAge, setIsValidAge] = useState(false);
    const [text, setText] = useState('content')
    const [car, setCar] = useState('Volvo');

    const changeName = (e) => setName(e.target.value)
    const changeAge = (e) => setAge(e.target.value);
    const onSubmit = (e) => alert('You are submitting ' + name);
    const textChange = (e) => console.log(e.target.value);
    const selectCar = (e) => console.log('car', e.target.value);

    useEffect(() => setVisibility(name.length > 0 ? 'visible' : 'hidden'), [name]);
    useEffect(() => setIsValidAge(/^\d+$/i.test(age)), [age])

    return (
        <div className="container">
            <h1 style={{visibility: visibility}}>Hello {name}</h1>
            <label>Enter your name:</label>
            <input type='text' onChange={changeName}/>
            <label>Enter your age</label>
            <input type='text' onChange={changeAge}/>
            <label style={{display: isValidAge ? 'none' : 'block'}}>This field must be an integer</label>
            <button onClick={onSubmit}>Submit</button>
            <textarea onChange={textChange}></textarea>
            <select name='cars' defaultValue={car} onChange={selectCar}>
                <option value='Ford'>Ford</option>
                <option value='Volvo' >Volvo</option>
                <option value='Fiat'>Fiat</option>
            </select>
        </div>
    )
}