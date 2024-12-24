import React from "react";
import data from './data2.json'

class Example2 extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {data.Skills.map(({Area, SkillSet}) => (
                    <>
                        <h4>{Area}</h4>
                        <ul>
                            {SkillSet.map(({Name}) => <li>{Name}</li>)}
                        </ul>
                    </>
                ))} 

            </div>
        )
    }
}

export default Example2;