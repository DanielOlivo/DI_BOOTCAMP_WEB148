import React, {useState, useEffect} from "react";

export default function BuggyCounter(){
    const [count, setCount] = useState(0);

    const inc = (e) => {
        setCount(count + 1);
    }

    if(count > 4){
        throw new Error('BUGGY COUNTER');
    }

    return <button onClick={inc}>count up {count}</button>
}