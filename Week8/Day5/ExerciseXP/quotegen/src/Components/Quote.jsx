import React, {useState, useEffect} from "react";
import quotes from "./quotes";
import colors from "./colors";

function getRandom(current, max){
    let next;
    do{
        next = Number(Math.floor(Math.random() * max))
    } while(next === current)
    return next;
}

export default function Quote(){

    const [idx, setIdx] = useState(getRandom(0, quotes.length));
    const [idx2, setIdx2] = useState(getRandom(0, colors.length));
    console.log(quotes)

    const handleClick = (e) => {
        setIdx(getRandom(idx, quotes.length));
        setIdx2(getRandom(idx2, colors.length));
    }

    return (
        <div className="back" style={{backgroundColor: colors[idx2].hex}}>
            <div className="card">
                <label className="quote" style={{color: colors[idx2].hex}}>{quotes[idx].quote}</label>  
                <label className="author" style={{color: colors[idx2].hex}}>{quotes[idx].author}</label>
                <button onClick={handleClick} style={{backgroundColor: colors[idx2].hex}}>next</button>
            </div>
        </div>
    )
}