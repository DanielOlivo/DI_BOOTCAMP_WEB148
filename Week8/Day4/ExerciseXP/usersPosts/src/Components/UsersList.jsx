import React from "react";
import axios from "axios";
import Label from "./Label";

class UsersList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users: [],
            loaded: false
        }
    }

    async fetchPosts(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({users: response.data, loaded: true});
    }

    componentDidMount(){
        this.fetchPosts();
    }

    render(){
        return (
            <>
                <h1>List of posts</h1>
                {this.state.loaded ? <></> : <div>Loading...</div>}
                <div>
                    {this.state.users.map(({id, name, username, email, address: {city}}) => 
                        <div>
                            <Label label='id'>{id}</Label>
                            <Label label='name'>{name}</Label>
                            <Label label='username'>{username}</Label>
                            <Label label='email'>{email}</Label>
                            <Label label='city'>{city}</Label>
                        </div>
                    )} 
                </div>
            </>
        )
    }

}

export default UsersList;