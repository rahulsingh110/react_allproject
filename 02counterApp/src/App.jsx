import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let counter = 15;
  // hooks-------------------------usestate--

    let [counter,setCounter] = useState(15)

  const addValue=()=>{
    console.log("clicked", counter);
    counter = counter+1;
    setCounter(counter)
  }

   const removeValue = ()=>{
      setCounter(counter-1)
   }

  return (
    <>
      
      <h1>My CounterApp</h1>
      <h2>Add counter Value:{counter}</h2>
       
       <button onClick={addValue}>Add value</button>
       <br/><br />
       <button onClick={removeValue}>RemoveValue</button>
      
    </>
  )
}

export default App
