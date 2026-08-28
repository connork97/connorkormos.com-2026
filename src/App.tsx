import { useEffect, useState } from "react";
import "./App.css";
import GitHub from "./components/GitHub";
import TechStack from "./components/TechStack";
import Hello from "./components/Hello";
import TechStackFlow from "./components/TechStackFlow";
import TechStackSecondary from "./components/TechStackSecondary";
import About from "./components/About";
import Terminal from "./components/Terminal";

function App() {

  const [terminalIsExpanded, setTerminalIsExpanded] = useState(false);

  return (
      <div className="app">
    {/* // <div style={{ height: "100vh", width: "100vw" }}> */}
    <div className={`${terminalIsExpanded ? "flexColumnContentContainer" : "flexRowContentContainer"}`}>
    {/* <div className='flexRowContentContainer'> */}
      <Hello terminalIsExpanded={terminalIsExpanded} />
      <Terminal terminalIsExpanded={terminalIsExpanded} setTerminalIsExpanded={setTerminalIsExpanded} />
    </div>
      <About />
      <TechStackFlow />
      <TechStackSecondary />
      <TechStack />
      <GitHub />
      {/* </div> */}
    </div>
  );
}

export default App;
