import { techStackSources } from "../lib/TechStackSources";

import "./TechStack.css";
import TechStackItem from "./TechStackItem";

export default function TechStack() {
   const techStackOrder: typeof techStackSources[keyof typeof techStackSources][] = [];

   const renderTechStack = (category: string) => Object.values(techStackSources).forEach((tech) => {
       if (!techStackOrder.includes(tech) && tech.category === category) {
         techStackOrder.push(tech);
       }
   });

   renderTechStack("language");
   renderTechStack("framework");
   renderTechStack("library");
   renderTechStack("database");
   renderTechStack("tool");
   renderTechStack("other");

  const techToExclude: string[] = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Redux', 'React Router', 'Python', 'Flask', 'SQLAlchemy', 'PostgreSQL'];
  techToExclude.push("React Bootstrap", "Ubuntu", "Render", "Firebase", );

  const usedImageSources = new Set<string>();
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg");
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg");
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg");
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg");
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg");
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg");
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg");
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg");
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg");
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg");
  // usedImageSources.add("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg");
  const uniqueTechStack = Object.values(techStackSources).filter((tech) => {
    if (usedImageSources.has(tech.src) || techToExclude.includes(tech.name)) {
      return false;
    }

    usedImageSources.add(tech.src);
    return true;
  });

  return (
    <div className="techStackContainer">
      <h1>Additional Technologies</h1>
      <div className="techStackItemsWrapper">
        {uniqueTechStack.map((tech) => (
          <TechStackItem key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  );
}
