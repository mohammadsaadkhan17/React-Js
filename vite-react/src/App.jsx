import './App.css'

function WelcomeMessage(name){

  return <h1>Hello, {name}!</h1>
}

function Greeting(isMorning){
  if(isMorning){
    return <h1>Good Morning.</h1>
  } return <h1>Good Evening</h1>
}

function AlertBox(message){
  return <div className='alert'> {message}</div>

}
function showAlert(condition, message){
  if(condition){
    return AlertBox(message);
  }

  return null;
}
function App() {

  const time = new Date();

  const isMorning = time.getHours < 12;
  
  const name ="Alice";
  const buttonLabel ='Click me';
  const imageUrl = "https://placehold.co/600x400";
  
  return (
    <div>
    <h1 className='greet'>Hello, {name}</h1>
    <button style={{}}>{buttonLabel}</button>
    <button onClick={()=>{
      alert('Button Clicked.')
    }}>Alert</button>

    <img src={imageUrl} alt="image" />

    </div>
  )

  //Conditional Rendering

  const isLoggedIn =false;

  if(isLoggedIn){
    return <h1>Welcome back!</h1>
  }
  return <h1>Please Log In</h1>

  const element = <h1>
                 {isLoggedIn ? "Welcome" : "Please Login!"}
                 </h1>

   const messages =[1,'a'];

  {element}
  {messages.length >= 0 && <h2> You have {messages.length} unread messages... </h2>}
  return (
    <div>
   
            {WelcomeMessage("Alice")}
            {WelcomeMessage("Bob")}
            {WelcomeMessage("John")}

            {Greeting(isMorning)}
            {showAlert(true, "This is message")}
    </div>
  )
}


// function App(){
//   const name = "Mohammad Saad";
//   const profession = "Full Stack Developer";
//   const projects =[
//     {
//       title: "ECOMMERCE HUB: SPRING BOOT E-COMMERCE PLATFORM",
//       desc: "Built e-commerce application using Spring Boot.",
//       link: "https://github.com/mohammadsaadkhan17"
//     },
//     {
//       title: "ChefGPT: AI-Driven Recipe & Image Generation Platform",
//       desc: "Architected a multi-feature generative AI platform using Spring Boot and Spring AI.",
//       link: "https://github.com/mohammadsaadkhan17"
//     },
//   ]

//   return(
//     <div className="App">
//     {/* Header Section */}
//       <header className="header">
//         <h1>{name}</h1>
//         <p>{profession}</p>
//         <nav>
//           <a href="#about">About</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </nav>
//       </header>

//       {/* About Section */}
        
//         <section id='about' className="about-section">

//           <h2>About Me</h2>
//           <p>Hello! I am {name}</p>
//         </section>


//     </div>
//   )

// }

//  export default App
