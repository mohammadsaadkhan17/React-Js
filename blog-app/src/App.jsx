import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {

  return (
  <nav className="nv">
    <Link to="/">Home</Link>

    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
  </nav>
  );
}

function Home() {
  return (
    <div>
      <h2>This is Home Page</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>This is about page.</h2>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <h2>This is Blog.</h2>
    </div>
  );
}

function App() {
  return(
    
    <BrowserRouter>

      <div className="container">
        <h1>THis is Router</h1>

        <Navbar/>

        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path="/blog" element ={<Blog/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// // HOME COMPONENT
// function Home() {
//   return (
//     <div>
//       <h2>Home Page</h2>
//       <p>Welcome to the Home Page</p>
//     </div>
//   );
// }

// // ABOUT COMPONENT
// function About() {
//   return (
//     <div>
//       <h2>About Page</h2>
//       <p>This is the About Page</p>
//     </div>
//   );
// }

// // BLOG COMPONENT
// function Blog() {
//   return (
//     <div>
//       <h2>Blog Page</h2>
//       <p>This is the Blog Page</p>
//     </div>
//   );
// }

// // NAVBAR COMPONENT (LINKING PAGES)
// function Navbar() {
//   return (
//     <nav style={{ marginBottom: "20px" }}>
//       <Link to="/" style={{ marginRight: "10px" }}>
//         Home
//       </Link>

//       <Link to="/about" style={{ marginRight: "10px" }}>
//         About
//       </Link>

//       <Link to="/blog">Blog</Link>
//     </nav>
//   );
// }

// // MAIN APP COMPONENT
// export default function App() {
//   return (
//     <BrowserRouter>
//       <div style={{ padding: "20px" }}>
//         <h1>My React App</h1>

//         {/* NAVIGATION */}
//         <Navbar />

//         {/* ROUTES */}
//         <Routes>
//           <Route path="/" element={<Home />} />

//           <Route path="/about" element={<About />} />

//           <Route path="/blog" element={<Blog />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

