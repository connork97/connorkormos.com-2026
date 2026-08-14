import { FaServer } from "react-icons/fa6";
import "../App.css";
import "./TechStack.css";
import { MdComputer } from "react-icons/md";

export default function TechStack() {
  const techStackImageSources = {
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    jQuery:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    Flask:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    GitHub:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "VS Code":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    Ubuntu:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
  };
  const frontEndImageSources = [
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "jQuery",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain.svg",
    },
  ];

  const backendImageSources = [
    {
      name: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "Flask",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    {
      name: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "AWS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
  ];

  const otherImageSources = [
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Ubuntu",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
    },
  ];

  const renderImageElements = (
    imageSources: { name: string; src: string }[],
  ) => {
    const imageCount = imageSources.length;
    const minRotation = -45;
    const maxRotation = 45;
    const rotationStep =
      imageCount > 1 ? (maxRotation - minRotation) / (imageCount - 1) : 0;

    return imageSources.map((image, index) => {
      return (
        <img
          key={`${image.name}-${index}`}
          className="techStackImage"
          src={image.src}
          alt={image.name}
        />
      );
    });
  };
  return (
    <div className="mainContentContainer">
      <h1 className="titleMain">My Primary Tech Stack</h1>
      <div
        className="flexRow"
        style={{ width: "100%", justifyContent: "space-around" }}
      >
        <div
          className="techStackRow"
          style={{ height: "20rem", width: "25%", alignItems: "center" }}
        >
          <MdComputer className="techStackIcon" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            className="techStackImage"
            alt="TypeScript"
            style={{ position: "absolute", transform: "translate(-200%, 0%)" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            className="techStackImage"
            alt="JavaScript"
            style={{
              position: "absolute",
              transform: "translate(-150%, -150%)",
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            className="techStackImage"
            alt="React"
            style={{ position: "absolute", transform: "translate(0%, -200%)" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
            className="techStackImage"
            alt="Redux"
            style={{
              position: "absolute",
              transform: "translate(150%, -150%)",
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg"
            className="techStackImage"
            alt="React Router"
            style={{ position: "absolute", transform: "translate(200%, 0%)" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            className="techStackImage"
            alt="HTML"
            style={{
              position: "absolute",
              transform: "translate(-100%, 150%)",
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            className="techStackImage"
            alt="CSS"
            style={{ position: "absolute", transform: "translate(100%, 150%)" }}
          />
          {/* {renderImageElements(frontEndImageSources)} */}
        </div>
        <div
          className="techStackRow"
          style={{ height: "20rem", width: "50%", alignItems: "center" }}
        >
          <FaServer className="techStackIcon" />
 
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            className="techStackImage"
            alt="Python"
            style={{ position: "absolute", transform: "translate(0%, -200%)" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
            className="techStackImage"
            alt="Flask"
            style={{
              position: "absolute",
              transform: "translate(-150%, -125%)",
            }}
          />
          {/* SQLALCHEMY image
           */}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg"
            className="techStackImage"
            alt="SQLAlchemy"
            style={{ position: "absolute", transform: "translate(150%, -125%)" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            className="techStackImage"
            alt="MySQL"
            style={{ position: "absolute", transform: "translate(200%, 50%)" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            className="techStackImage"
            alt="PostgreSQL"
            style={{
              position: "absolute",
              transform: "translate(-200%, 50%)",
            }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            className="techStackImage"
            alt="AWS"
            style={{ position: "absolute", transform: "translate(0%, 175%)" }}
          />
        </div>
      </div>
      {/* <div className="techStackRow">
        {renderImageElements(backendImageSources)}
      </div>
      <div className="techStackRow">
        {renderImageElements(otherImageSources)}
      </div> */}

      {/* //{" "} */}
      {/* <div className="techStackWrapper"> */}
      {/* <div className="techStackCard" tabIndex={0}>
        {renderImageElements(frontEndImageSources)}
        </div>
        <div className="techStackCard" tabIndex={0}>
        {renderImageElements(backendImageSources)}
        </div>
        <div className="techStackCard" tabIndex={0}>
        {renderImageElements(otherImageSources)}
        </div> */}
      {/* //{" "} */}
      {/* </div> */}
    </div>
  );
}
