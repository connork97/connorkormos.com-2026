import "../App.css";
import "./Projects.css";

import type { ProjectSource } from "../lib/ProjectSources";
import { techStackSources } from "../lib/TechStackSources";

export default function ProjectCard({ project }: { project: ProjectSource }) {
  const techStackColors: Record<string, string> = {
    frontEnd: "rgb(76, 66, 126)",
    backEnd: "rgb(76, 66, 200)",
    // backEnd: "green",
    other: "blue",
    deployment: "gray",
  };

  const getTechStackColor = (tech: string) => {
    const techStackSource = Object.values(techStackSources).find(
      (techStackItem) =>
        techStackItem.name.toLowerCase() === tech.toLowerCase(),
    );
    if (techStackSource) {
      return techStackColors[techStackSource.type];
    }
    return "gray";
  };
  return (
    <div className="projectCardContainer">
      {project.mediaType === "image" ? (
        <img
          className="projectCardMedia"
          src={project.mediaSource}
          alt="Project"
        />
      ) : (
        <video
          className="projectCardMedia"
          controls={false}
          //  autoPlay
          loop
          muted
          preload="auto"
        >
          <source src={project.mediaSource} type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>
      )}
      <h3 className="projectCardTitle">{project.title}</h3>
      <p className="projectCardDescription">{project.description}</p>
      <div className="flexColumn" style={{ gap: '1rem', height: '35%', marginTop: "auto" }}>
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
          <button
            className="projectCardButton"
            style={{ opacity: project.githubUrl === "N/A" ? 0.5 : 1 }}
          >
            <a
              className="projectCardButtonLink"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.githubUrl === "N/A"
                ? "GitHub Unavailable"
                : "View On GitHub"}
            </a>
          </button>
        </div>
        <div className="projectCardTechStackWrapper">
          {project.techStack.map((tech) => (
            <span
              style={{ borderColor: getTechStackColor(tech) }}
              key={tech}
              className="projectCardTechStackItem"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
