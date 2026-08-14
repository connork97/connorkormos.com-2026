import { useEffect } from "react";
import "./App.css";
import GitHubActivity from "./components/GitHubActivity";
import Hello from "./components/Hello";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="app">
      <Hello />
      <GitHubActivity />
      <TechStack />
    </div>
  );
}

export default App;
