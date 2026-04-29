import { useEffect, useState } from "react";
import "./App.css";
import ParentComponent from "./ParentComponent";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `Count:${count}`;
  // }, [count]);

  // const increment = () => {
  //   setCount(count + 2);
  // };
  // return (
  //   <>
  //     <h2>UseEffect Hook</h2>
  //     <button onClick={increment}>Button</button>
  //   </>
  // );



  return(
    <div className="container">
      <ParentComponent/>
    </div>
  );
}

export default App;
