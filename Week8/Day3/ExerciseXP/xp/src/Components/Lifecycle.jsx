import React from "react";
import Header from './Header'

class Lifecycle extends React.Component{
    constructor(props){
        super(props)
        this.state = {header: true};
    }

    removeHeader = () => this.setState({header: false});

    button = () => <button onClick={this.removeHeader}>remove header</button>

    render(){
        if(this.state.header === true){
            return <div>
                <Header />
                {this.button()}
            </div>
        } 
        return <div>{this.button()}</div>
    }
}

export default Lifecycle;