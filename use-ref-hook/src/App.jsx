import { useEffect, useRef, useState } from 'react'
import './App.css'


// useRef
//persist values across renders
// Does not cause the component to.
//re-render when the value changes
function App() {
  // const [stateCount, setStateCount] = useState(0);
  // const refCount =useRef(0);

  // useEffect(()=>{
  //   console.log('Component re-rendered');

  // })


  // const incrementStateCount = () =>{

  //   setStateCount(stateCount+1);
  // }

  // const incrementRefCount = () =>{

  //   refCount.current +=1;
  //   console.log(`Ref Count: ${refCount.current}`)
  // }

  // return (
  //   <div>

  //   <p>State Count: {stateCount}</p>
  //   <button onClick={incrementStateCount}>Increment State Count</button>
  //   <p>Ref Count:{refCount.current}</p>
  //   <button onClick={incrementRefCount}>Increment Ref Count</button>
     
  //   </div>
  // )


  const inputRef =useRef(null);
  const inputRefNext = useRef(null);

  
  useEffect (()=>{
  
    console.log("Component re-rendered");
    
  });
  const focusInput = ()=> {

    inputRef.current.focus();
    inputRef.current.style.backgroundColor ='yellow';
  }

  const focusInputNext =() =>{
    inputRefNext.current.focus();
    inputRefNext.current.style.backgroundColor ='blue';

  }

  const reset = ()=>{
    inputRef.current.style.backgroundColor = 'white';
    inputRefNext.current.style.backgroundColor = 'white';
  }

  return(
    <div>
       <h2>Use Ref</h2>
      <input ref={inputRef} type="text" placeholder='focus me' />
      <button onClick={focusInput}>Focus & highlight</button>


      <input ref={inputRefNext} type="text" placeholder='focus me' />
      <button onClick={focusInputNext}> Focus & highlight</button>

      <button onClick={reset} >Reset</button>
    </div>
    
  );
}

export default App;


