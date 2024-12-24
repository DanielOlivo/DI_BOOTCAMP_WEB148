import React from "react";
import myData from './data.json'


export default function PostList() {

    console.log(myData);

    return (
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Hi, This is a Title</h1>

            {myData.map(item => (
                // <div>
                [
                    <h2>{item.title}</h2>,
                    <p>{item.content}</p>
                ]
                // </div>
            ))}
        </div>
    )
}