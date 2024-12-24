import React from "react";

export default function Label(props){

    return (
        <p><label style={{fontWeight: 'bold'}}>{props.label}:</label> {props.children}</p>
    )
}