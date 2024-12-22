import React, {useState} from "react";

export default function Events(){
    const clickMe = () => alert('I was clicked');

    const [toggle, setToggle] = useState(false);

    const onChange = (e) => {
        if(e.keyCode == 13){
            alert('The enter key was pressed, your input is: ' + e.target.value);
        }
    };

    const onToggle = (e) => {
        setToggle(!toggle);
    }

    return (
        <div>
            <div>
                <button onClick={clickMe}>Click me</button>
            </div>
            <input onKeyDown={onChange} placeholder="Press the Enter key"/>
            <div>
                <button onClick={onToggle}>{toggle ? 'ON' : 'OFF'}</button>
            </div>
        </div>
    )
}