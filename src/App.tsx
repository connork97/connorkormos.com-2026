import { useEffect } from "react";
import "./App.css";
import GitHubActivity from "./components/GitHubActivity";

function App() {
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
// const getAllPublicEvents = async (username: string) => {
//   const allEvents = [];
//   let page = 1;

//   while (true) {
//     const response = await fetch(
//       `https://api.github.com/users/${username}/events/public?per_page=100&page=${page}`,
//       {
//         headers: {
//           Accept: "application/vnd.github+json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`GitHub API error: ${response.status}`);
//     }

//     const events = await response.json();

//     if (!Array.isArray(events) || events.length === 0) {
//       break;
//     }

//     allEvents.push(...events);

//     if (events.length < 100) {
//       break;
//     }

//     page += 1;
//   }

//   return allEvents;
// };

// useEffect(() => {
//   const fetchEvents = async () => {
//     return await getAllPublicEvents("connork97");
//   };
//   fetchEvents().then(events => console.log(events));
// }, []);
  // const getGitHubContributions = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://api.github.com/users/connork97/events/public",
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching GitHub contributions:", error);
  //   }
  // }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await getGitHubContributions();
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="app">
      <h1 className="titleMain">Connor Kormos</h1>
      <h2 className="titleSecondary">Software Engineer</h2>
      <div className="techStackWrapper">
        <div className="techStackCard" tabIndex={0}>
          {renderImageElements(frontEndImageSources)}
        </div>
        <div className="techStackCard" tabIndex={0}>
          {renderImageElements(backendImageSources)}
        </div>
        <div className="techStackCard" tabIndex={0}>
          {renderImageElements(otherImageSources)}
        </div>
      </div>
      <div>
        <GitHubActivity />
        {/* <iframe src="https://pages.codeadam.ca/github-contributions/connork97" width="800" height="190" frameborder="0" allowtransparency id="iframe"></iframe> */}
        {/* <iframe src="https://github.com/connork97" title="GitHub Profile" width="100%" height="400px" style={{ border: "none" }}></iframe> */}
      </div>
    </div>
  );
}

export default App;
