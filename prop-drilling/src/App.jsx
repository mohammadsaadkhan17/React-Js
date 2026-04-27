import { createContext, useContext, useState } from 'react';
import './App.css'

//  App - Has Data
//   ComponentA
//    ComponentB
//     ThemeComponent -Needs Theme
const ThemeContext = createContext('light'); //Here light is the default value

function App() {

   const [theme, setTheme] =useState('light');

   const toggleTheme =()=>{
    setTheme(prevTheme => (prevTheme ==='light' ? 'dark' : 'light'))
   };

  return (
    <div>
      <GlobalComponent/>

    <ThemeContext.Provider value={theme}>

    <div style={{border: '2px solid black', padding:'20px'}}>
    <h2>App(Parent)</h2>
      <ComponentA />
      <button onClick={toggleTheme}>Theme</button>
     </div>
    </ThemeContext.Provider>

    <ThemeContext.Provider value ='dark'>
      <GlobalComponent/>
    </ThemeContext.Provider>
    </div>
  )
}

function ComponentA(){

  return (
    
    <div style={{border: '2px solid black'}}>
    <h2>ComponentA(Child)</h2>
      <ComponentB />
    </div>
  );
}
function ComponentB(){

  return (
    <div style={{border: '2px solid black'}}>
<h2>ComponentB(Child)</h2>
      <ThemeComponent />
    </div>
  );
}

function ThemeComponent(){

  const theme =useContext(ThemeContext);
  return(
    <div>
     <h2>ThemeComponent(Great-GrandChild)</h2>
    <div>The current theme is:{theme}</div>
    </div>
  );
}  

function GlobalComponent(){

  const theme =useContext(ThemeContext);
  return(
    <div>
     <h2>GlobalComponent(Great-GrandChild)</h2>
    <div>The current theme is:{theme}</div>
    </div>
  );
}   

export default App;
