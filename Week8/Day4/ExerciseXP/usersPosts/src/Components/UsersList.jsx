import React from "react";
import axios from "axios";

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
                <ul>
                    {this.state.users.map(({name, email}) => 
                        <li>{name} | {email}</li> 
                    )} 
                </ul>
            </>
        )
    }

}

export default UsersList;