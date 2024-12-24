import React from "react";
import axios from "axios";
import Label from "./Label";

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
            <div>
                <h1>List of posts</h1>
                {this.state.posts.map(({userId, id, title, body}) => 
                    <div>
                        <Label label='userId'>{userId}</Label>
                        <Label label='id'>{id}</Label>
                        <Label label='title'>{title}</Label>
                        <Label label='body'>{body}</Label>
                    </div>
                )} 
            </div>
        )
    }

}

export default PostList;