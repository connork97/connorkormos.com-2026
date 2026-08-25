import { useEffect } from "react";
import "./App.css";
import GitHub from "./components/GitHub";
import Hello from "./components/Hello";
import { TechStackFlow } from "./components/TechStackFlow";
import { TechStackSecondary } from "./components/TechStackSecondary";

function App() {

  return (
      <div className="app">
    {/* // <div style={{ height: "100vh", width: "100vw" }}> */}
      <Hello />
      <TechStackFlow />
      <TechStackSecondary />
      {/* <TechStack /> */}
      <GitHub />
      {/* </div> */}
    </div>
  );
}

export default App;
