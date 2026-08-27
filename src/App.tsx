import { useEffect } from "react";
import "./App.css";
import GitHub from "./components/GitHub";
import TechStack from "./components/TechStack";
import Hello from "./components/Hello";
import TechStackFlow from "./components/TechStackFlow";
import TechStackSecondary from "./components/TechStackSecondary";
import About from "./components/About";
import Terminal from "./components/Terminal";

function App() {

  return (
      <div className="app">
    {/* // <div style={{ height: "100vh", width: "100vw" }}> */}
      <Hello />
      <Terminal />
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
