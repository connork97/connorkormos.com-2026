import { useState } from "react";

import GitHub from "./components/GitHub";
import TechStack from "./components/TechStack";
import Hello from "./components/Hello";
import TechStackFlow from "./components/TechStackFlow";
import TechStackSecondary from "./components/TechStackSecondary";
import About from "./components/About";
import Terminal from "./components/Terminal";

import "./App.css";

function App() {
  const [terminalIsExpanded, setTerminalIsExpanded] = useState(false);

  return (
    <div className="app">
      <div
        className={`${terminalIsExpanded ? "flexColumnContentContainer" : "flexRowContentContainer"}`}
      >
        <Hello terminalIsExpanded={terminalIsExpanded} />
        <Terminal
          terminalIsExpanded={terminalIsExpanded}
          setTerminalIsExpanded={setTerminalIsExpanded}
        />
      </div>
      <About />
      <TechStackFlow />
      <TechStackSecondary />
      <TechStack />
      <GitHub />
    </div>
  );
}

export default App;
