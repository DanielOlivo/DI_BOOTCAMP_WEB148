import React from "react";
import data from './data2.json'

class Example3 extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                {data.Experiences.map(({companyName, logo, url, roles}) => (
                    <div style={{display:'flex', flexDirection:'column', alignItems:'start'}}>
                        <img src={logo} />
                        <a href={url}>{companyName}</a>
                        {roles.map(({title, description, startDate, endDate, location}) => (
                            <div>
                                <label style={{fontStyle:'bold'}}>{title}</label>
                                <label>{startDate} - {endDate} {location}</label>
                                <label>{description}</label>
                            </div>
                        ))}
                    </div>
                ))} 
            </>
        )
    }
}

export default Example3;