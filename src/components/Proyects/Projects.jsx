import ProjectCard from "./ProjectCard";
import { dataProjectCard } from "./dataProjectCard.js";
import "./Projects.css";

const Proyects = () => {
  return (
    <div className="my-works-container">
      <h1 className="text-projects">My works</h1>
      <div className="projects-container">
        <ProjectCard className="project-card" data={dataProjectCard} />
      </div>
    </div>
  );
};

export default Proyects;
