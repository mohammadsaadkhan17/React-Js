import { useState } from 'react'
import './App.css'

//You can store arrays, objects or even more complex data structures in state


// COUNTER = {id: 1, value: 0}
// When 1 counter: [{id: 1, value: 0}]
// When 2 counter: [{id: 1, value: 0}, {id: 2, value: 0}]
// When 3 counter: [{id: 1, value: 0}, {id: 2, value: 0}, {id: 3, value: 0}]
// and so on...

function App() {

  const [counters, setCounters] = useState([{id: 1, value: 0}]);

  const addCounter = () =>{
    setCounters([...counters, {id: counters.length +1, value:0}]);
  }

  const incrementCounter =(id)=>{
     
    setCounters(counters.map(counter=> 
      counter.id === id ? {...counter, value: counter.value + 1} : counter
    )
  );
  };
  const decrementCounter =(id)=>{

    setCounters(counters.map(counter=>
      counter.id === id ? {...counter, value:counter.value -1} : counter
    ))
  }

  return (
    <div>

    <button onClick={addCounter}>Add Counters</button>

    <ul>
      {counters.map(counter =>(
        <li key={counter.id}>
          Counter:{counter.id}:{counter.value}
          <button onClick={()=>incrementCounter(counter.id)}>Increment</button>
          <button onClick={()=>decrementCounter(counter.id)}>Decrement</button>
        </li>
       
      ))}
    </ul>
     
    </div>
  )
}

export default App
