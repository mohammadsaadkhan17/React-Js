import './App.css'
import MyButton from './MyButton'
import ProfileCard from './ProfileCard/ProfileCard'

function App() {

  const handleHobbyClick =(hobby) =>{
    alert(`Your clicked,${hobby}`);
  }

  const johnProfile ={

  name: "John",
  age: 22,
  isMember: true,
  hobbies:['Reading', 'Writing'],
  onHobbyClick: handleHobbyClick
  }

  const aliceProfile ={

  name: "Alice",
  age: 21,
  isMember: false,
  hobbies:['Swimming','Running'],
  onHobbyClick: handleHobbyClick
  }

  return (
    <>
    <h1>This is h1</h1>
      <ProfileCard {...johnProfile}  />
      <ProfileCard {...aliceProfile}/>
    
  
    </>
  )
};

export default App
