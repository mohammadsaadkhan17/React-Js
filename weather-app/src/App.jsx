import { useEffect, useState } from 'react'
import './App.css'
import Weather from './Weather/Weather'
function App() {

  // const[weather, setWeather] = useState(null);
  // const[loading, setLoading] = useState(true);

  // const API_KEY = "4b1afbaaf52a4c49b4d101044262603";

  // useEffect(()=>{

  //   fetch("")
  //   .then((response)=> response.json())
  //   .then((data) => {
  //     setWeather(data);
  //     setLoading(false);
  //   });

  // },[]);

  // if(loading){
  //   return <h2>Loading...</h2>
  // }

  return (
    <div className="container">

      <Weather />
  
    </div>
  )
}

export default App


