import { useState } from 'react'
import './App.css'



function App() {
  
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment =()=>{

  setCount(count + step);
  //setCount(count + step);  //It will not update the value twice bcoz state updates are async

  //State updates are async. You need to use the updater function for the multiple state updates
  }

  const incrementTwice =()=>{
    setCount(prevCount => prevCount +1);
    setCount(prevCount => prevCount +1);
  }
  return (
    <div className='container'>
      
      <h1>Counter value:{count}</h1>

      <input type="number" value={step} onChange={(e)=> setStep(parseInt(e.target.value))} />
      <button onClick={increment}>Increment</button>
      <button onClick={()=> setCount(count - step)}>Decrement</button>

      <button onClick={incrementTwice}>+2</button>
       
    </div>
  )
}

export default App
