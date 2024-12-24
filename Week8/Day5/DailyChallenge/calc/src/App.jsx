import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DigitField from './Components/DigitField'

const ops = [
  {name: 'Add', op: (a,b) => a + b, sym: '+', header: "Adding"},
  {name: 'Sub', op: (a,b) => a - b, sym: '-', header: "Substracting"},
  {name: 'Mul', op: (a,b) => a * b, sym: '*', header: "Multiplying"},
  {name: 'Div', op: (a,b) => a / b, sym: '/', header: "Dividing"},
]

function App() {

  const [opIdx, setOpIdx] = useState(0);
  const [arg1, setArg1] = useState(0);
  const [arg2, setArg2] = useState(0);
  const [result, setResult] = useState(0);

  const handleClick = (e) => {
    e.preventDefault()
    console.log(arg1, arg2)
    setResult(ops[opIdx].op(Number(arg1), Number(arg2)))
  }

  const handleSelection = (e) => {
    setOpIdx(Number(e.target.value))
  }

  const handleArg1 = (arg) => setArg1(arg);
  const handleArg2 = (arg) => setArg2(arg);

  return (
    <div className='calc'>
      <h1>{ops[opIdx].header} Two Numbers</h1>

      <div className='fields'>
        <DigitField onChange={handleArg1}/>
        <select value='0' onChange={handleSelection}>
          {ops.map(({sym}, i) => <option value={i}>{sym}</option>)} 
        </select>
        <DigitField onChange={handleArg2}/>
      </div>

      <div>
        <button onClick={handleClick}>get result</button>
      </div>

      <div>
        <label>{result}</label>
      </div>
    </div>
  )
}

export default App
