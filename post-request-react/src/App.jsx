import { useState } from 'react';
import axios from 'axios';
import './App.css'
import api from './api/api';


function App() {

  const [data, setData] = useState()
  
 const handleSubmit =(event) =>{

  event.preventDefault();

  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1
  }

  api.post('/posts', newPost)
  .then(response =>{
    console.log('New post added:', response.data);
    setData([response.data]);
  })
 };

  return (
    <div>

    <h2>Post Request</h2>
    <form onSubmit={handleSubmit}>
      <button type='submit'>Add Post</button>
    </form>
      
    </div>
  )
}

export default App
