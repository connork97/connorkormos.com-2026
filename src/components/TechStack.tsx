import "../App.css";

export default function TechStack() {
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
  return (
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
  );
}
