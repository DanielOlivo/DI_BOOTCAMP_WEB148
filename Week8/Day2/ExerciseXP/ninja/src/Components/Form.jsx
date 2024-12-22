import React, {useState, useEffect} from "react";
import Input from "./Input";

export default function Form(){
    return (
        <div>
            <Input name='First Name' pattern='.*' />
            <Input name='Last Name' pattern='.*' />
            <Input name='Phon Numer' pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$' />
            <Input name='Email' pattern='^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$' />
        </div>
    )
}