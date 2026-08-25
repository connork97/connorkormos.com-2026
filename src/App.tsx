import { useEffect } from "react";
import "./App.css";
import GitHub from "./components/GitHub";
import Hello from "./components/Hello";
import { TechStackFlow } from "./components/TechStackFlow";

function App() {

  return (
      <div className="app">
    {/* // <div style={{ height: "100vh", width: "100vw" }}> */}
      <Hello />
      <TechStackFlow />
      {/* <TechStack /> */}
      <GitHub />
      {/* </div> */}
    </div>
  );
}

export default App;
