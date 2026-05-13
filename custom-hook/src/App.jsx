import { useState } from 'react'
import './App.css'
import useCounter from './useCounter';


// Custom hooks in React are functions that let you reuse logic across
// multiple components.
// Start with "use"
function App() {
  const {count, increment, decrement, reset} =useCounter(1);


  return (
    <div>
     
     <h2>Count:{count}</h2>

     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
     <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
