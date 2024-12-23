import React from "react";

class Color extends React.Component {
    constructor(props){
        super(props)
        this.state = {color: 'red'};
    }

    shouldComponentUpdate(){
        // return false;
        return true;
    }

    componentDidMount(){
        this.setState({color: 'yellow'});
    }

    getSnapshotBeforeUpdate(){
        console.log('in getSnapshotBeforeUpdate');
    }

    componentDidUpdate(){
        console.log('after update');
    }


    changeColor = () => this.setState({color: 'blue'})

    render(){
        return (
            <div>
                <label>My favorite color is <i>{this.state.color}</i></label>
                <button onClick={this.changeColor}>other color</button>
            </div>
        )
    }
}

export default Color;