import React from "react";
import './Exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};
                
class Exercise extends React.Component {
    constructor(props){
        super()
        this.props = props
    }

    render(){
        return (
            <div>
                {/* <h1 style={{color:'red', backgroundColor:'lightblue'}}>This is Header</h1> */}
                <h1 style={style_header}>This is a header</h1>
                <p className="para"> This is a paragraph</p>
                <a href='http://localhost:3000'>I am the link</a>

                <h3>Form</h3>
                <form style={{display:'flex', flexDirection:'row'}}>
                    <input type="text" placeholder="email"/>
                    <button>submit</button>
                </form>

            </div>
        )
    }

}

export default Exercise;