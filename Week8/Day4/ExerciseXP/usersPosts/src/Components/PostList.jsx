import React from "react";
import axios from "axios";

class PostList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    async fetchPosts(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.setState({...this.state, posts: response.data});
        console.log(this.state)
    }

    componentDidMount(){
        this.fetchPosts();
    }

    render(){
        return (
            <>
                <h1>List of posts</h1>
                {this.state.posts.map(({title}) => 
                    <p>{title}</p> 
                )} 
            </>
        )
    }

}

export default PostList;