function About(){

    const name = "Mohammad Saad";
  const profession = "Full Stack Developer";

    return (

         <section className="about-section" id="about">
          <h2>About Me</h2>
          <p>Hello, I am {name}, a passionate {profession}. I have Designed and developed scalable RESTful APIs using Java and Spring Boot, handling secure 
data transactions and user authentication. 
Implemented input validation using Spring Validation to enforce strict business rules and 
preventing invalid data entry. 
Implemented Spring Data JPA repositories to handle database operations with MySQL, 
ensuring data integrity. 
Implemented a centralized exception handling mechanism to ensure consistent API error 
responses across the application.</p>
         </section>

    );
}

export default About;