import React from "react";
import axios from "axios";

async function postData(data){
    console.log('POST', data)
    const response = await axios.post('https://jsonplaceholder.typicode.com/users/', data)
    console.log(response.data);
}

class PostJson2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = (field) => (e) => this.setState({...this.state, [field]: e.target.value});
    handleClick = (e) => postData(this.state)

    render(){
        return (
            <>
                <input type='text' onChange={this.handleChange('userId')} />
                <input type='text' onChange={this.handleChange('title')} />
                <input type='text' onChange={this.handleChange('body')} />
                <button onClick={this.handleClick}>post</button> 
            </>
        )
    }
}

export default PostJson2;