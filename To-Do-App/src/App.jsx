import { useState } from 'react'
import './App.css'

function App() {
  
  const [task, setTask] = useState("");  //input value
  const [tasks, setTasks] = useState([]); //list of tasks

  function addTask(e){

    e.preventDefault(); //It prevents the page reloading when submitting the form

    if(task == "")
      return;

    setTasks([...tasks, task]); //Adding new task using the spread operator into the old task list
    setTask(""); //It clears the input
  }


  function deleteTask(index){

   const newTasks = tasks.filter((item, currentIndex)=> currentIndex !== index)

       setTasks(newTasks);

  }

  return (
    
       <div className="box">
           <h2>To-Do-App</h2>

           <form onSubmit={addTask}>
          
          <input type="text" placeholder='Add Task' value={task} onChange={(e)=> setTask(e.target.value)}/>

          <button type='submit' className="btn">
           Add
          </button>
           </form>

           <ol>
            {tasks.map((items, index) =>(
              <li key={index}> 
              {items}

              <button onClick={() => deleteTask(index)}> Delete</button>
              </li>
            ))}
           </ol>
       </div>
    
  )
}

export default App
