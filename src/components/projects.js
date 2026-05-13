import GitHubIcon from "@mui/icons-material/GitHub";
import "./projects.css";
import projects from "../data/projectData";

const ProjectCard = ({ img, title, description, gitHub }) => {
  return (
    <div className="project-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={gitHub} target="_blank" rel="noopener noreferrer">
        <GitHubIcon fontSize="large" color="secondary"/>
      </a>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          img={project.img}
          title={project.title}
          description={project.description}
          gitHub={project.gitHub}
        />
      ))}
    </div>
  );
};
