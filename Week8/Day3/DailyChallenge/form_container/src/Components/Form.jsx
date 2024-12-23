import React, {useState, useEffect} from "react";
import './Form.css'

export default function Form(){

    const [state, setState] = useState({
        first: '',
        last: '',
        age: '',
        gender: '',
        destination: '',
        restrictions: []
    })

    const updateFirst = (e) => setState({...state, first: e.target.value});
    const updateLast = (e) => setState({...state, last: e.target.value});
    const updateAge = (e) => setState({...state, age: e.target.value});

    const handleDestination = (e) => setState({...state, destination: e.target.value})
    const handleGender = (e) => setState({...state, gender: e.target.value});
    const handleDietary = (e) => {
        setState({
            ...state, 
            restrictions: e.target.checked 
                ? [...state.restrictions, e.target.value]
                : state.restrictions.filter(i => i != e.target.value)
        })
    }

    const search = (e) => {
        e.preventDefault()
        const query = Object.entries(state).join('&').replace(/,/g, '=');
        console.log(query);
        window.location.href = 'http://localhost:5173/?' + query
    }

    return (
        <div>
            <h1 className="header">Sample form</h1>
            <div className="form">
                <form onSubmit={search}>
                    <input type='text' placeholder="First Name" onChange={updateFirst}/>
                    <input type='text' placeholder="Last Name" onChange={updateLast}/>
                    <input type='text' placeholder="Age" onChange={updateAge}/>

                    <div>
                        <input type='radio' name='gender' value='male' onChange={handleGender}/>Male
                    </div>
                    <div>
                        <input type='radio' name='gender' value='female' onChange={handleGender}/>Female
                    </div>
                    <label>Select your Destination</label>
                    <select defaultValue="none" onChange={handleDestination}> 
                        <option value="none">--Please Choose a Destination--</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Japan">Japan</option>
                        <option value="Brazil">Brazil</option>
                    </select>
                    <label>Dietary restrictions</label>
                    <div>
                        <input type='checkbox' value='Nuts free' onChange={handleDietary}/> Nuts free
                    </div>
                    <div>
                        <input type='checkbox' value='Lactose free' onChange={handleDietary}/> Lactose free
                    </div>
                    <div>
                        <input type='checkbox' value='Vegan' onChange={handleDietary}/> Vegan meal
                    </div>
                    <button type='submit' value='Submit'>Submit</button>
                </form>
            </div>
            <div className='result'>
                <h1>Entered information</h1>
                <label>Your name: {state.first} {state.last}</label>
                <label>Your age: {state.age}</label>
                <label>Your gender: {state.gender}</label>
                <label>Your destination: {state.destination}</label>
                <label>Your dietary restrictions:</label>
                <label>**Nuts free: {state.restrictions.includes('Nuts free') ? 'Yes' : 'No'}</label>
                <label>**Lactose free: {state.restrictions.includes('Lactose free') ? 'Yes' : 'No'}</label>
                <label>**Vegan meal: {state.restrictions.includes('Vegan') ? 'Yes' : 'No'}</label>
            </div>
        </div>
    )
    
}