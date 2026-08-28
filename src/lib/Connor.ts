import type { TechStackSource } from "./TechStackSources";
import { techStackSources } from "./TechStackSources";

export const Connor = {
  firstName: "Connor",
  lastName: "Kormos",
  age: 29,
  sex: "Male",
  roles: [
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
    "Front End Engineer",
    "Back End Engineer",
    "Full Stack Engineer",
  ],
  yearsExperience: 3,
  education: [
    { name: "UCLA", degree: "B.A.", fieldOfStudy: "History" },
    {
      name: "Flatiron School",
      degree: "Certificate",
      fieldOfStudy: "Software Engineering",
    },
  ],
  workHistory: [
    { company: "IOGEAR", role: "Software Engineer", years: 2 },
    { company: "Self Employed", role: "Freelance Web Developer", years: 1 },
  ],
  skills: Object.values(techStackSources).map((source: TechStackSource) => source.name),
  location: "Orange County, CA",
  phone: "(714)795-9351",
  email: "connorkormos@gmail.com",
  gitHub: "https://github.com/connork97",
  linkedIn: "https://www.linkedin.com/in/connorkormos/",
};
