export type Project = {
   id: string;
   title: string;
   description: string;
   liveDemoUrl: string;
   githubUrl: string;
   techStack: string[];
};

export const ProjectsArr: Project[] = [
   {
      id: "resumeBuilder",
      title: "Resume Builder",
      description:
         "A web application that allows users to create and customize their resumes with ease. Users can choose from various templates, add their personal information, and download the final resume in PDF format.",
      liveDemoUrl: "https://resume-builder.example.com",
      githubUrl: "",
      techStack: ["React", "TypeScript", "HTML", "CSS", "Redux", "React Router", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Railway"],
   },
   {
      id: "peakSync",
      title: "PeakSync",
      description:
         "A web application that allows users to track their fitness progress and set goals. Users can log their workouts, monitor their performance, and visualize their progress over time.",
      liveDemoUrl: "https://peaksync.example.com",
      githubUrl: "",
      techStack: ["React", "TypeScript", "HTML", "CSS", "Redux", "React Router", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Railway"],
   },
   {
      id: "iogearProductPages",
      title: "IOGEAR Product Pages",
      description:
         "A web application that provides detailed information about IOGEAR products. Users can browse through various product categories, view product specifications, and read customer reviews.",
      liveDemoUrl: "https://iogear-product-pages.example.com",
      githubUrl: "",
      techStack: ["React", "TypeScript", "HTML", "CSS", "Redux", "React Router", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Railway"],
   },
   {
      id: "iogearCesLandingPage",
      title: "IOGEAR CES Landing Page",
      description:
         "A landing page for IOGEAR's CES event. The page provides information about the event, showcases IOGEAR's products, and allows users to register for the event.",
      liveDemoUrl: "https://iogear-ces-landing-page.example.com",
      githubUrl: "",
      techStack: ["React", "TypeScript", "HTML", "CSS", "Redux", "React Router", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Railway"],
   }
];