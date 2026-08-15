import { FaServer } from "react-icons/fa6";
import "../App.css";
import "./TechStack.css";
import { MdComputer } from "react-icons/md";
import { useState } from "react";
import { HiOutlineServer } from "react-icons/hi";
import { IoCodeSharp, IoCodeSlashSharp } from "react-icons/io5";

export default function TechStack() {
  const techStackImageSources = {
    javaScript: {
      name: "JavaScript",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    typeScript: {
      name: "TypeScript",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    html: {
      name: "HTML",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    css: {
      name: "CSS",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    react: {
      name: "React",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    redux: {
      name: "Redux Toolkit",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
    reactRouter: {
      name: "React Router",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
    },
    jQuery: {
      name: "jQuery",
      type: "other",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain.svg",
    },
    python: {
      name: "Python",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    flask: {
      name: "Flask",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    postgres: {
      name: "PostgreSQL",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    mySQL: {
      name: "MySQL",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    aws: {
      name: "AWS",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    sqlAlchemy: {
      name: "SQLAlchemy",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
    },
    git: {
      name: "Git",
      type: "other",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    gitHub: {
      name: "GitHub",
      type: "other",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    vsCode: {
      name: "VS Code",
      type: "other",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    ubuntu: {
      name: "Ubuntu",
      type: "other",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
    },
  };

  const techStackItem = (image: {
    name: string;
    type: string;
    src: string;
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div key={image.name} className="techStackItem" tabIndex={0}>
        <img
          src={image.src}
          alt={image.name}
          className="techStackImage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transform: isHovered ? "scale(1)" : "scale(1)",
            transition: "transform 0.2s ease-in-out",
          }}
        />
        <span className="techStackImageLabel" style={{visibility: isHovered ? 'visible' : 'hidden'}}>{image.name}</span>
      </div>
    );
  };
  return (
    <div className="mainContentContainer">
      <h1 className="titleMain">My Primary Tech Stack</h1>
      <div className="flexRow">
        <div className="flexColumn">
          <h2 className="titleSecondary flexRow">
            <MdComputer />
            <span style={{ margin: "auto 1rem" }}>Front-End</span>
            <MdComputer />
          </h2>
          <div className="techStackRow">
            {Object.values(techStackImageSources).map((image) => {
              if (image.type === "frontEnd") return techStackItem(image);
              return null;
            })}
          </div>
        </div>
        <div className="flexColumn">
          <h2 className="titleSecondary flexRow">
            <HiOutlineServer />
            <span style={{ margin: "auto 1rem" }}>Back-End</span>
            <HiOutlineServer />
          </h2>
          <div className="techStackRow">
            {Object.values(techStackImageSources).map((image) => {
              if (image.type === "backEnd") return techStackItem(image);
              return null;
            })}
          </div>
        </div>
      </div>
      <div className="flexColumn">
        <h2 className="titleSecondary flexRow">
          <IoCodeSharp />
          <span style={{ margin: "auto 1rem" }}>Other</span>
          <IoCodeSlashSharp />
        </h2>
        <div className="techStackRow">
          {Object.values(techStackImageSources).map((image) => {
            if (image.type === "other") return techStackItem(image);
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

// const renderImageElements = (
//   imageSources: { name: string; src: string }[],
// ) => {
//   const imageCount = imageSources.length;
//   const minRotation = -45;
//   const maxRotation = 45;
//   const rotationStep =
//     imageCount > 1 ? (maxRotation - minRotation) / (imageCount - 1) : 0;

//   return imageSources.map((image, index) => {
//     return (
//       <img
//         key={`${image.name}-${index}`}
//         className="techStackImage"
//         src={image.src}
//         alt={image.name}
//       />
//     );
//   });
// };

// const handleHoverElement = (e: any) => {
//   const focusedElement = e.currentTarget;
//   focusedElement.style.transition = "transform 0.3s ease";
//   focusedElement.style.transform = "scale(1.5)";
// };

// const handleStopHoverElement = (e: any) => {
//   const focusedElement = e.currentTarget;
//   focusedElement.style.transition = "transform 0.3s ease";
//   focusedElement.style.transform = "scale(1)";
// };

// const frontEndImageSources = [
//   {
//     name: "JavaScript",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
//   },
//   {
//     name: "TypeScript",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
//   },
//   {
//     name: "HTML",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
//   },
//   {
//     name: "CSS",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
//   },
//   {
//     name: "React",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
//   },
//   {
//     name: "jQuery",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain.svg",
//   },
// ];

// const backendImageSources = [
//   {
//     name: "Python",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
//   },
//   {
//     name: "Flask",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
//   },
//   {
//     name: "PostgreSQL",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
//   },
//   {
//     name: "MySQL",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
//   },
//   {
//     name: "AWS",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
//   },
// ];

// const otherImageSources = [
//   {
//     name: "Git",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
//   },
//   {
//     name: "GitHub",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
//   },
//   {
//     name: "VS Code",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
//   },
//   {
//     name: "Ubuntu",
//     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
//   },
// ];

// <h1 className="titleMain">My Primary Tech Stack</h1>
// <div
//   className="flexRow"
//   style={{ width: "100%", justifyContent: "space-around" }}
// >
//   <div
//     className="techStackRow"
//     style={{ height: "20rem", width: "25%", alignItems: "center" }}
//   >
//     {/* <span onMouseEnter={handleHoverElement} className="techStackIcon"> */}
//     {/* <MdComputer onMouseEnter={(e) => {
//         e.currentTarget.style.transition = "transform 0.3s ease";
//         e.currentTarget.style.transform = "scale(2)";
//       }} className="techStackIcon" /> */}
//     {/* </span> */}
//     <MdComputer
//       onMouseEnter={handleHoverElement}
//       onMouseLeave={handleStopHoverElement}
//       style={{ scale: "1.25" }}
//       className="techStackIcon"
//     />
//     <div
//       className="hoveredImageText"
//       style={{
//         position: "absolute",
//         transform: "translate(-200%, 0%)",
//       }}
//     >
//       <img
//         src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
//         className="techStackImage"
//         alt="TypeScript"
//         onMouseEnter={(e) => {
//           setHoveredImageText(e.currentTarget.alt);
//         }}
//         style={
//           {
//             // position: "absolute",
//             // transform: "translate(-200%, 0%)",
//           }
//         }
//       />
//       {hoveredImageText && <span style={{width: 0}}>{hoveredImageText}</span>}
//     </div>
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
//       className="techStackImage"
//       alt="JavaScript"
//       style={{
//         position: "absolute",
//         transform: "translate(-150%, -150%)",
//       }}
//     />
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
//       className="techStackImage"
//       alt="React"
//       style={{ position: "absolute", transform: "translate(0%, -200%)" }}
//     />
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
//       className="techStackImage"
//       alt="Redux"
//       style={{
//         position: "absolute",
//         transform: "translate(150%, -150%)",
//       }}
//     />
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg"
//       className="techStackImage"
//       alt="React Router"
//       style={{ position: "absolute", transform: "translate(200%, 0%)" }}
//     />
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
//       className="techStackImage"
//       alt="HTML"
//       style={{
//         position: "absolute",
//         transform: "translate(-100%, 150%)",
//       }}
//     />
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
//       className="techStackImage"
//       alt="CSS"
//       style={{ position: "absolute", transform: "translate(100%, 150%)" }}
//     />
//     {/* {renderImageElements(frontEndImageSources)} */}
//   </div>
//   <div
//     className="techStackRow"
//     style={{ height: "20rem", width: "50%", alignItems: "center" }}
//   >
//     <FaServer
//       onMouseEnter={handleHoverElement}
//       onMouseLeave={handleStopHoverElement}
//       className="techStackIcon"
//     />

//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
//       className="techStackImage"
//       alt="Python"
//       style={{ position: "absolute", transform: "translate(0%, -200%)" }}
//     />
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
//       className="techStackImage"
//       alt="Flask"
//       style={{
//         position: "absolute",
//         transform: "translate(-150%, -125%)",
//       }}
//     />
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg"
//       className="techStackImage"
//       alt="SQLAlchemy"
//       style={{
//         position: "absolute",
//         transform: "translate(150%, -125%)",
//       }}
//     />
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
//       className="techStackImage"
//       alt="MySQL"
//       style={{ position: "absolute", transform: "translate(200%, 50%)" }}
//     />
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
//       className="techStackImage"
//       alt="PostgreSQL"
//       style={{
//         position: "absolute",
//         transform: "translate(-200%, 50%)",
//       }}
//     />
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
//       className="techStackImage"
//       alt="AWS"
//       style={{ position: "absolute", transform: "translate(0%, 175%)" }}
//     />
//   </div>
// </div>
{
  /* <div className="techStackRow">
        {renderImageElements(backendImageSources)}
      </div>
      <div className="techStackRow">
        {renderImageElements(otherImageSources)}
      </div> */
}

{
  /* //{" "} */
}
{
  /* <div className="techStackWrapper"> */
}
{
  /* <div className="techStackCard" tabIndex={0}>
        {renderImageElements(frontEndImageSources)}
        </div>
        <div className="techStackCard" tabIndex={0}>
        {renderImageElements(backendImageSources)}
        </div>
        <div className="techStackCard" tabIndex={0}>
        {renderImageElements(otherImageSources)}
        </div> */
}
{
  /* //{" "} */
}
{
  /* </div> */
}
