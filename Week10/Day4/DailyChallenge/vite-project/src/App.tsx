import './App.css'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import UserCard, { User } from './components/UserCard';
import UserList from './components/UserList';

const people: User[] = [
  { name: "Alice", age: 25, role: "Developer" },
  { name: "Bob", age: 30 },
  { role: "Designer" },
  { name: "Charlie", role: "Manager" },
  { name: "Diana", age: 22 },
  { age: 40, role: "Team Lead" },
  { name: "Eve" },
  { name: "Frank", age: 35, role: "QA Engineer" },
  { age: 28 },
  { role: "Intern" },
];


function App() {

  return (
    <>
      <Greeting name='dude'/>
      <Counter />
      {people.map(person => 
        <UserCard {...person} />)}
      <UserList />
    </>
  )
}

export default App
