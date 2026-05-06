import './App.css'
import {Routes, Route, Link, Outlet, BrowserRouter} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Team from './Team'
import Contact from './Contact'
import NotFound from './NotFound'
import CurrentLocation from './CurrentLocation'
import Dashboard from './Dashboard'
//Routing enables to navigate between different pages or components 
//Without reloading the entire page
function App() {
  

  return (
    <BrowserRouter>
<div className='min-h-screen bg-gray-100'>
  <nav className='bg-amber-500 p-4'>
    
    <ul className='flex justify-center space-x-6'>
      <li><Link className='text-amber-100 hover:text-black font-medium transition duration-200' to='/'>Home</Link></li>
      <li><Link className='text-amber-100 hover:text-black font-medium transition duration-200' to='/about'>About</Link></li>
      <li><Link className='text-amber-100 hover:text-black font-medium transition duration-200' to='/contact'>Contact</Link></li>
    </ul>
  </nav>

<CurrentLocation/>
  <div className='container mx-auto py-8'>

      <Routes>
        <Route path ='/' element ={<Home/>}/>
        <Route path ='/about' element ={<About/>}>
        <Route path='team' element ={<Team/>}/>
        </Route>
        <Route path ='/contact' element ={<Contact/>}/>
        <Route path='/dashboard'element ={<Dashboard/>}></Route>
        <Route path='*' element ={<NotFound/>}/>
      </Routes>
  </div>

      </div>
    </BrowserRouter>
  )
}

export default App;
