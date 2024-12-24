import React, { useState } from 'react'
// import './App.css'

async function fetchHello(fn){
  try{
    const response = await fetch("http://localhost:5000/api/hello")
    const json = await response.json()
    fn(json.msg)
  }
  catch(err){
    fn(err);
  }
}

async function postData(data, fn){
  try {
    console.log('data', data, 'fn', fn)
    const response = await fetch("http://localhost:5000/api/world", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({msg: data})
    })
    console.log('response', response)
    const json = await response.json()
    console.log('json', json.msg)
    fn(json.msg);
  }
  catch(err){
    fn(err)
  }
}

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      response: '', 
      toSend: '', 
      response2: ''
    };
    console.log('this.state', this.state)

  }

  componentDidMount(){
    console.log('mount')
    fetchHello(r => this.setState({...this.state, response: r}));
  }

  handleChange = (e) => {
    this.setState({...this.state, toSend: e.target.value});
  }

  handleClick = (e) => {
    e.preventDefault()
    postData(this.state.toSend, r => this.setState({...this.state, response2: r}));
  }

  render(){
    return (
      <>
        <div>Hey, dude</div>
        <div>response: {String(this.state.response)}</div>

        <h1>Post to server</h1>
        <input type='text' onChange={this.handleChange} />
        <button onClick={this.handleClick}>post</button>
        <p>{this.state.response2}</p>
      </>
    )
  }
}

export default App
