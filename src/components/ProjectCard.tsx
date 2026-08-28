import "../App.css";
import "./Projects.css";

export default function ProjectCard() {
  return (
    <div className="projectCardContainer">
      <img
        className="projectCardImage"
        src="https://picsum.photos/536/354"
        alt="Project"
      />
      <h3 className="projectCardTitle">Project Title</h3>
      <p className="projectCardDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nunc ut aliquam tincidunt, nunc nisl aliquam nunc, euismod aliquam nunc
        nisl euismod.
      </p>
      <div className="projectCardLinks">
        <button className="projectCardButton">
          <a
            className="projectCardButtonLink"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Demo
          </a>
        </button>
        <button className="projectCardButton">
          <a
            className="projectCardButtonLink"
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View On GitHub
          </a>
        </button>
      </div>
      <div className="projectCardTechStackWrapper">
         <span className="projectCardTechStackItem">React</span>
         <span className="projectCardTechStackItem">TypeScript</span>
         <span className="projectCardTechStackItem">CSS</span>
      </div>
    </div>
  );
}
