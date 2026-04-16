import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

function App() {

  const name = "Mohammad Saad";
  const profession = "Full Stack Developer";
  const projects = [
    {
      title: "ECOMMERCE HUB: SPRING BOOT E-COMMERCE PLATFORM",
      desc: "Built e-commerce application using Spring Boot. Implemented advanced features including pagination, sorting and search. Architected relational database schema using JPA with MySQL. Integrated enterprise-level authentication using Spring Security with JWT tokens and role-based access control (RBAC) for customers, sellers and admins. Implemented Swagger UI documentation for Spring Boot REST APIs, enabling interactive endpoint testing and improving API usability for frontend teams and API consumers",
      link: "https://github.com/mohammadsaadkhan17"
    },
    {
      title: "ChefGPT: AI-Driven Recipe & Image Generation Platform",
      desc: "Architected a multi-feature generative AI platform using Spring Boot and Spring AI. Integrated OpenAI LLMs and DALL-E for text-to-image synthesis, recipe generation and conversational functionality.",
      link: "https://github.com/mohammadsaadkhan17"
    },
  ]

  return (
        <div className="App">
        {/* Header Section */}
          <Header />

          {/* About Section */}
            <About/>
        
          {/* Project Section */}

          <ProjectList/>

          {/* Contact Section */}

          <Contact />

          {/* Footer Section */}

          <Footer />
          
        </div>
    
  );
}

export default App
