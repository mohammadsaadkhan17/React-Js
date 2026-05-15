import './App.css'
import ProfileCard from './Profile Card/ProfileCard'
import johnImg from "./Images/john.jpg";
import aliceImg from "./Images/alice.jpg";
import harryImg from "./Images/harry.jpg";
import davidImg from "./Images/david.jpg";
function App() {
  
  const profiles =[{

    name: "John",
    userName: "john123",
    bio: "Software Engineer",
    image: johnImg
  },
  
  {
    name: "Alice",
    userName: "alice123",
    bio: "Manager",
    image: aliceImg
  },

  {
    name: "Harry",
    userName: "harry123",
    bio: "CEO",
    image: harryImg
  },

   {
    name: "David",
    userName: "david123",
    bio: "Civil Engineer",
    image: davidImg
  },
{

    name: "John",
    userName: "john123",
    bio: "Software Engineer",
    image: johnImg
  },
  
  {
    name: "Alice",
    userName: "alice123",
    bio: "Manager",
    image: aliceImg
  },

  {
    name: "Harry",
    userName: "harry123",
    bio: "CEO",
    image: harryImg
  },

   {
    name: "David",
    userName: "david123",
    bio: "Civil Engineer",
    image: davidImg
  },

  {

    name: "John",
    userName: "john123",
    bio: "Software Engineer",
    image: johnImg
  },
  
  {
    name: "Alice",
    userName: "alice123",
    bio: "Manager",
    image: aliceImg
  },

  {
    name: "Harry",
    userName: "harry123",
    bio: "CEO",
    image: harryImg
  },

   {
    name: "David",
    userName: "david123",
    bio: "Civil Engineer",
    image: davidImg
  },
  
  {

    name: "John",
    userName: "john123",
    bio: "Software Engineer",
    image: johnImg
  },
  
  {
    name: "Alice",
    userName: "alice123",
    bio: "Manager",
    image: aliceImg
  },

  {
    name: "Harry",
    userName: "harry123",
    bio: "CEO",
    image: harryImg
  },

  {
    name: "David",
    userName: "david123",
    bio: "Civil Engineer",
    image: davidImg
  }
]

  return (
    
    <div>
      {profiles.map((profile, index) =>(
        <ProfileCard
        key={index}
        name={profile.name}
      
        bio ={profile.bio}
        image={profile.image}
        />
      ))}
    </div>
  )
}

export default App
