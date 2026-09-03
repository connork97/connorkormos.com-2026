export type TechStackSource = {
  name: string;
  type: "frontEnd" | "backEnd" | "other" | "deployment";
  yearsExperience: number;
  src: string;
};

export const techStackSources: Record<string, TechStackSource> = {
  javaScript: {
    name: "JavaScript",
    type: "frontEnd",
    yearsExperience: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  typeScript: {
    name: "TypeScript",
    type: "frontEnd",
    yearsExperience: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  html: {
    name: "HTML",
    type: "frontEnd",
    yearsExperience: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  css: {
    name: "CSS",
    type: "frontEnd",
    yearsExperience: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  bootstrap: {
    name: "Bootstrap",
    type: "frontEnd",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  reactBootstrap: {
    name: "React Bootstrap",
    type: "frontEnd",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  react: {
    name: "React",
    type: "frontEnd",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  redux: {
    name: "Redux",
    type: "frontEnd",
    yearsExperience: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  reduxToolkit: {
    name: "Redux Toolkit",
    type: "frontEnd",
    yearsExperience: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  contextApi: {
    name: "Context API",
    type: "frontEnd",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  reactRouter: {
    name: "React Router",
    type: "frontEnd",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
  },
  nextJs: {
    name: "Next.js",
    type: "frontEnd",
    yearsExperience: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  jQuery: {
    name: "jQuery",
    type: "frontEnd",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain.svg",
  },
  python: {
    name: "Python",
    type: "backEnd",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  flask: {
    name: "Flask",
    type: "backEnd",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  sqlAlchemy: {
    name: "SQLAlchemy",
    type: "backEnd",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
  },
  php: {
    name: "PHP",
    type: "backEnd",
    yearsExperience: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  postgres: {
    name: "PostgreSQL",
    type: "backEnd",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  mySql: {
    name: "MySQL",
    type: "backEnd",
    yearsExperience: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  aws: {
    name: "AWS",
    type: "other",
    yearsExperience: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  socketIo: {
    name: "Socket.IO",
    type: "backEnd",
    yearsExperience: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  },
  git: {
    name: "Git",
    type: "other",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  gitHub: {
    name: "GitHub",
    type: "other",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  vsCode: {
    name: "VS Code",
    type: "other",
    yearsExperience: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  ubuntu: {
    name: "Ubuntu",
    type: "other",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
  },
  railway: {
    name: "Railway",
    type: "deployment",
    yearsExperience: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg",
  },
  vercel: {
    name: "Vercel",
    type: "deployment",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
  render: {
    name: "Render",
    type: "deployment",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/render/render-original.svg",
  },
  firebase: {
    name: "Firebase",
    type: "deployment",
    yearsExperience: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  vite: {
    name: "Vite",
    type: "other",
    yearsExperience: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },

};
