import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  fetchUsers = async () => {
    const response = await axios.get('http://localhost:5000/users')
    this.setState({users: response.data})
  }

  componentDidMount(){
    this.fetchUsers()
  }


  render() {
    return (
      <>
        <h1>Users</h1>
        <ol>
          {this.state.users.map(({id, username}) => 
            <li>{id} {username}</li>
          )} 
        </ol>
      </>
    )
  }
}

export default App
