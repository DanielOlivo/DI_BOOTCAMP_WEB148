import React, {useState} from "react";
import Card from "./Card";

export default function Cards(){

    const [langs, setLangs] = useState([
        {name: 'PHP', votes: 0},
        {name: 'Python', votes: 0},
        {name: 'JavaScript', votes: 0},
        {name: 'Java', votes: 0},
    ])

    const click = (idx) => setLangs(langs.map((item, i) => 
        idx == i ? {name: item.name, votes: item.votes + 1} : item));

    return (
        <div>
            {langs.map((item, idx) => 
                <div className="card">
                    <label className="total">{langs[idx].votes}</label>
                    <label className="lang">{item.name}</label>
                    <button onClick={() => click(idx)}>Click here</button>
                </div> 
            )}
        </div>
    )
}