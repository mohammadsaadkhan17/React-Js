import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {

  const [count, setCount] = useState(0);

  function handleClick (){
 
    setCount(count +1);
    
  }
  return (
    <div>

    <div>
      Count:{count}
    </div>
      
      <div>

        <button onClick={handleClick}>Increment</button>
      </div>

      <div>
        <ChildComponent buttonName ="Click Me"/>
        handleClick ={handleClick}
      </div>
    </div>
  )
}

export default App;
