import { useEffect } from "react";
import "./App.css";
import GitHub from "./components/GitHub";
import Hello from "./components/Hello";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="app">
      <Hello />
      <TechStack />
      <GitHub />
    </div>
  );
}

export default App;
