import "../App.css";
import "./Projects.css";

import { ProjectsSources } from "../lib/ProjectSources";
import ProjectCard from "./ProjectCard";

export default function Projects() {

   return (
      <div className="projectsContainer">
         <h2 className="titleSecondary">Featured Projects</h2>
         <div className="projectsCardsContainer">

         {ProjectsSources.map((project) => (
            <ProjectCard key={project.id} project={project} />
         ))}
         </div>
      </div>
   )
}