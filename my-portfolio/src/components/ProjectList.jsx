function ProjectList(){

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
          <section className="projects-section" id="projects">
            <h2>Projects</h2>
            <div className="projects-list">

              {projects.map((project, index) => (
                <div className="project-item">
                  <h3>{project.title}</h3>
                  <h3>{project.desc}</h3>
                  <a href={project.link} target ='_blank' rel='noopener noreferrer'>View Project</a>
                </div>
              ))}
            </div>
          </section>
    );
}

export default ProjectList;