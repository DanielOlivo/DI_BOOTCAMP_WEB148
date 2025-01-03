import { useState } from "react"

export default function Time(props){

    const readOnly = props.readOnly || false;

    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const handler = (deltaHour, deltaMinutes) => (e) => {
        e.preventDefault();
        let nextHour = hour + deltaHour;
        let nextMinutes = minutes + deltaMinutes;


        if(nextMinutes < 0) {
            nextMinutes = 59;
            nextHour--;
        }
        else if(nextMinutes > 59){
            nextMinutes = 0;
            nextHour++;
        }

        if(nextHour < 0) nextHour = 23;
        else if(nextHour > 23) nextHour = 0;

        setHour(nextHour)
        setMinutes(nextMinutes)
    } 

    return (
        <div
            className="flex flex-row" 
        >
            <button
                style={{visibility: readOnly ? 'hidden' : 'visible'}}
                onClick={handler(-1, 0)} 
            >⮜</button>
            <label>{hour}</label>
            <button
                style={{visibility: readOnly ? 'hidden' : 'visible'}}
                onClick={handler(1, 0)} 
            >⮞</button>

            <button
                style={{visibility: readOnly ? 'hidden' : 'visible'}}
                onClick={handler(0, -1)} 
            >⮜</button>
            <label>{minutes}</label>
            <button
                style={{visibility: readOnly ? 'hidden' : 'visible'}}
                onClick={handler(0, 1)} 
            >⮞</button>
        </div>
    )
}