import React, {useState} from "react";

export default function Events(){
    const clickMe = () => alert('I was clicked');

    const onChange = (e) => {
        if(e.keyCode == 13){
            alert('The enter key was pressed, your input is: ' + e.target.value);
        }
    };

    return (
        <div>
            <button onClick={clickMe}>Click me</button>
            <input onKeyDown={onChange} placeholder="Press the Enter key"/>
        </div>
    )
}