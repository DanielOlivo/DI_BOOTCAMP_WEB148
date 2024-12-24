import React from "react";

async function postData(data){
    console.log('POST', data)
    const response = await fetch('https://jsonplaceholder.typicode.com/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const json = await response.json()
    console.log(json);
}

class PostJson extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            email: '',
        }
    }

    handleChange = (field) => (e) => this.setState({...this.state, [field]: e.target.value});
    handleClick = (e) => postData(this.state)

    render(){
        return (
            <>
                <input type='text' onChange={this.handleChange('user')} />
                <input type='text' onChange={this.handleChange('email')} />
                <button onClick={this.handleClick}>post</button> 
            </>
        )
    }
}

export default PostJson;