import React, { useState } from "react";

import "../App.css";
import "./Terminal.css";

export default function Terminal({terminalIsExpanded, setTerminalIsExpanded}: {terminalIsExpanded: boolean, setTerminalIsExpanded: React.Dispatch<React.SetStateAction<boolean>>}) {
  const connor = {
    name: "Connor Kormos,",
    role: "Software Engineer,",
    yearsExperience: "3,",
    skills: "[Full Stack Development],",
    education: "[UCLA, Flatiron School],",
    email: "connorkormos@gmail.com,",
    phone: "(714) 795-9351,",
    location: "Orange County, CA,",
    github: "www.github.com/connorkormos,",
    linkedin: "www.linkedin.com/in/connorkormos,",
  };

  const terminalOutputLines = Object.entries(connor).map(([key, value]) => (
    <p className="terminalOutputLine" key={key}>
      <span className="greenText">{key}: </span>
      {value}
    </p>
  ));


  return (
    <div className={`terminalContainer${terminalIsExpanded ? " expanded" : ""}`}>
      <div className="terminalGhost"></div>
      <div className="terminalTopBar">
        <div className="terminalButtons">
          <div className="terminalButton red"><span>X</span></div>
          <div className="terminalButton yellow"><span>-</span></div>
          <div className="terminalButton green" onClick={() => setTerminalIsExpanded(!terminalIsExpanded)}><span>+</span></div>
        </div>
        <div className="terminalContent">
          <p className="terminalPrompt">
            <span className="greenText">connor@kormos:&nbsp;</span>
            <span>cat ~/about.json</span>
          </p>
          <div className="terminalOutput">
            {"{"}
            {terminalOutputLines}
            {"}"}
          </div>
          <p className="terminalPrompt">
            <span className="greenText">connor@kormos:&nbsp;</span>
            <span contentEditable style={{ outline: "none", flex: "1" }}>
              test
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
