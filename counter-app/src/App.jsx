import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section id="center">
      <h1>Counter App</h1>

      <div className="counter-container">
        <button 
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <span className="count">{count}</span>

      
        <button 
          className="btn"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </section>
  )
}

export default App