import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
import UserFavoriteAnimals from './UserFavoriteAnimals';


// exercise 1
function MyElement(){
  return (<h1>I love JSX</h1>)
}

function Sum(){
  return <p>React is {5 + 5} times better with JSX</p>
}

// exercise 2
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function FullName(){
  return [
    <h3>{user.firstName}</h3>,
    <h3>{user.lastName}</h3>
  ]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}
        <MyElement />
        <Sum />
        <FullName />
        <UserFavoriteAnimals favAnimals={['dogs', 'cats', 'hedgehogs']}/>
          
      </header>


    </div>
  );
}

export default App;
