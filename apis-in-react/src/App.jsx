import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  
  //Using axios

useEffect(()=>{
 setLoading(true)
//Doing multiple get requests

axios.all([
  axios.get(`https://jsonplaceholder.typicode.com/posts`),
  axios.get(`https://jsonplaceholder.typicode.com/users`)
])

 .then(axios.spread((posts, users)=>{  //spread lets us handle two request separately

  console.log(`This is Post:`,posts)
  setData(posts.data);
  console.log(`This is User:`,users)
  
  setLoading(false);
 }))

 .catch((error)=>{
      console.error(`Error in fetching the data`, error);
      setError(`Failed to fetch the data`); 
      setLoading(false);
 })

},[])

  // Using fetch


  // useEffect(()=>{
    
  //   setLoading(true);
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   //.then(json =>console.log(json));
  //   .then(json => {
  //     setData(json);
  //     setLoading(false);
  //    // throw new Error(`Something went wrong.`)
  //    })
  //    .catch((error)=>{
  //     console.error(`Error in fetching the data`, error);
  //     setError(`Failed to fetch the data`); 
  //     setLoading(false);
  //    });

  // },[]);

  if(loading){

    return <h2>Loading...</h2>
  }

  if(error){

    return <h2>{error}</h2>
  }

  return (
    <div>
      
      {/* For the single data  */}


      {/* <p>User Id = {data.userId}</p>
      <p>Id = {data.id}</p>
      <p>Title = {data.title}</p> */}



{/* For the multiple data ie. iterate through the list of the data */}

      <ul>
        {data.map((post)=>(
         <li key ={post.id}>
         <p>{post.id}</p>
          <p><strong>{post.title}</strong></p>
          <p>{post.body}</p>
         </li>
        ))}
      </ul>
    </div>
  )
}

export default App
