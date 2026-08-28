export type ProjectSource = {
   id: string;
   title: string;
   description: string;
   mediaType: "image" | "video";
   mediaSource: string;
   liveDemoUrl: string;
   githubUrl: string;
   techStack: string[];
};

export const ProjectsSources: ProjectSource[] = [
   {
      id: "resumeBuilder",
      title: "Resume Builder",
      description:
         "A web application that allows users to create and customize their resumes with ease. Users can choose from various templates, add their personal information, and download the final resume in PDF format.",
         mediaType: "image",
      mediaSource: "src/assets/resumeBuilder/ResumeBuilderEditorPage.jpg",
      liveDemoUrl: "https://free-resume-builder.up.railway.app/home",
      githubUrl: "https://github.com/connork97/Resume-Builder",
      techStack: ["React", "TypeScript", "HTML", "CSS", "Redux", "React Router", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Railway"],
   },
   {
      id: "peakSync",
      title: "PeakSync",
      description:
         "A web application that allows users to track their fitness progress and set goals. Users can log their workouts, monitor their performance, and visualize their progress over time.",
         mediaType: "image",
      mediaSource: "src/assets/peaksync/PeakSyncHomePage.png",
      liveDemoUrl: "https://peaksync.onrender.com/",
      githubUrl: "https://github.com/connork97/peaksync",
      techStack: ["React", "TypeScript", "HTML", "CSS", "Redux", "React Router", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Railway"],
   },
   {
      id: "iogearProductPages",
      title: "IOGEAR Product Pages",
      description:
         "A web application that provides detailed information about IOGEAR products. Users can browse through various product categories, view product specifications, and read customer reviews.",
      mediaType: "video", 
      mediaSource: "src/assets/iogear/iogear_product_pages.mp4",
      liveDemoUrl: "https://support.iogear.com/product/ghdsw8k4",
      githubUrl: "N/A",
      techStack: ["React", "TypeScript", "HTML", "CSS", "Redux", "React Router", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Railway"],
   },
   {
      id: "iogearCesLandingPage",
      title: "IOGEAR CES Landing Page",
      description:
         "A landing page for IOGEAR's CES event. The page provides information about the event, showcases IOGEAR's products, and allows users to register for the event.",
      mediaType: "video",
      mediaSource: "src/assets/iogear/iogear_ces_2024.mp4",
      liveDemoUrl: "https://support.iogear.com/ces2024",
      githubUrl: "N/A",
      techStack: ["React", "TypeScript", "HTML", "CSS", "Redux", "React Router", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Railway"],
   },
   {
      id: "shadle",
      title: "Shadle",
      description:
         "A web application that allows users to share and discover short videos. Users can upload their own videos, browse through trending videos, and interact with other users through comments and likes.",
      mediaType: "image",
      mediaSource: "src/assets/shadle/ShadleHomepage.jpg",
      liveDemoUrl: "https://shadle.web.app",
      githubUrl: "https://github.com/connork97/shadle",
      techStack: ["React", "TypeScript", "HTML", "CSS", "Redux", "React Router", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "Railway"],
   }
];