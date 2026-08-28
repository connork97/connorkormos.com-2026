import "../App.css";
import "./Projects.css";

import type { Project } from "../lib/Projects";

export default function ProjectCard({project}: {project: Project}) {
  return (
    <div className="projectCardContainer">
      <img
        className="projectCardImage"
        src="https://picsum.photos/536/354"
        alt="Project"
      />
      <h3 className="projectCardTitle">{project.title}</h3>
      <p className="projectCardDescription">
        {project.description}
      </p>
      <div className="projectCardLinks">
        <button className="projectCardButton">
          <a
            className="projectCardButtonLink"
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Demo
          </a>
        </button>
        <button className="projectCardButton">
          <a
            className="projectCardButtonLink"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View On GitHub
          </a>
        </button>
      </div>
      <div className="projectCardTechStackWrapper">
         {project.techStack.map((tech) => (
            <span key={tech} className="projectCardTechStackItem">{tech}</span>
         ))}
      </div>
    </div>
  );
}
