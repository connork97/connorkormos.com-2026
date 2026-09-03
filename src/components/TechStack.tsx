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

  const usedImageSources = new Set<string>();
  const uniqueTechStack = Object.values(techStackSources).filter((tech) => {
    if (usedImageSources.has(tech.src)) {
      return false;
    }

    usedImageSources.add(tech.src);
    return true;
  });

  return (
    <div className="techStackContainer">
      <h1>Technologies</h1>
      <div className="techStackItemsWrapper">
        {uniqueTechStack.map((tech) => (
          <TechStackItem key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  );
}
