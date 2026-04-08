import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Count App</h1>
      </div>
      <button
        id="btn1"
        onClick={() => setCount((count) => count + 1)}>
          +
        </button>

      <span>{count}</span>
      <button id="btn2" onClick={() => setCount((count) => count - 1)}> -</button>
    </>
  );
}

export default App;
