import React from "react";

import "../App.css";
import "./Terminal.css";

export default function Terminal() {
  type TerminalProps = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };

  const connor: TerminalProps = {
    firstName: "Connor",
    lastName: "Kormos",
    email: "connorkormos@gmail.com",
    phone: "(714) 795-9351",
    location: "Orange County, CA",
    github: "www.github.com/connorkormos",
    linkedin: "www.linkedin.com/in/connorkormos",
  };

  const renderTerminalOutputLines = (props: TerminalProps) => {
    return Object.entries(props).map(([key, value]) => (
      <p className="terminalOutputLine" key={key}>
        <span className="greenText">{key}: </span>
        {value}
      </p>
    ));
  };

  return (
    <div className="containerMain">
      <div className="terminalContainer">
        <div className="terminalTopBar">
          <div className="terminalButtons">
            <div className="terminalButton red"></div>
            <div className="terminalButton yellow"></div>
            <div className="terminalButton green"></div>
          </div>
          <div className="terminalContent">
            <p className="terminalPrompt">
              <span className="greenText">connor@kormos: </span>
              <span>cat ~/about.json</span>
            </p>
            <div className="terminalOutput">
              {"{"}
              {renderTerminalOutputLines(connor)}
              {"}"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
