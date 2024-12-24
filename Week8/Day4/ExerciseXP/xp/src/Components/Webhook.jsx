import React, {useState, useEffect} from "react";


const toPost = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
}

export default function Webhook(props){

    const [data, setData] = useState(null);
 
    async function fetchData() {
        try{
            const response = await fetch('https://webhook.site/7a7ee5aa-0bea-4152-84db-08182e652a31', {
                method: 'POST',
                body: JSON.stringify(toPost)
            })
            console.log(response)
            // const json = await response.json()
            // console.log(json);
        }
        catch(err){
            console.log(err)
        }
    }

    const handleClick = () => fetchData();

    return (
        <>
            <button onClick={handleClick}>press me</button> 
        </>
    )
}