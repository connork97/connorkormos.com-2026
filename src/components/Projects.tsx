import "../App.css";
import "./Projects.css";

import ProjectCard from "./ProjectCard";

export default function Projects() {

   return (
      <div className="projectsContainer">
         <h2 className="titleSecondary">Featured Projects</h2>
         <div className="projectsCardsContainer">

         <ProjectCard />
         <ProjectCard />
         <ProjectCard />
         </div>
      </div>
   )
}