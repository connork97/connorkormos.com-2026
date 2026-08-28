import React, { useRef, useState } from "react";

import { Connor } from "../lib/Connor.ts";

import "../App.css";
import "./Terminal.css";

export default function Terminal({
  terminalIsExpanded,
  setTerminalIsExpanded,
}: {
  terminalIsExpanded: boolean;
  setTerminalIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  console.log("Connor:", Connor);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = {
      x: event.clientX - dragOffset.x,
      y: event.clientY - dragOffset.y,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;

    setDragOffset({
      x: event.clientX - dragStart.current.x,
      y: event.clientY - dragStart.current.y,
    });
  };

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  const connor = {
    name: "Connor Kormos,",
    role: "Software Engineer,",
    yearsExperience: "3,",
    education: "[UCLA, Flatiron School],",
    email: "connorkormos@gmail.com,",
    phone: "(714) 795-9351,",
    location: "Orange County, CA,",
  };

  const terminalOutputLines = Object.entries(connor).map(([key, value]) => (
    <p className="terminalOutputLine" key={key}>
      <span className="greenText">{key}: </span>
      {value}
    </p>
  ));

  const promptInputLabel = (
    <span className="greenText">
      connor@kormos<span style={{ color: "white" }}>:
      <span style={{ color: "blue" }}>~</span>
        $&nbsp;</span>
      {/* <span style={{ color: "blue" }}>$&nbsp;</span> */}
    </span>
  );

  return (
    <div
      className={`terminalContainer${terminalIsExpanded ? " expanded" : ""}`}
      style={{
        transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0)`,
        transition: isDragging ? "none" : undefined,
      }}
    >
      {/* <div className="terminalGhost"></div> */}
      <div
        className="terminalTopBar"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "none",
          userSelect: "none",
        }}
      >
        <div
          className="terminalButtons"
          onPointerDown={(event) => event.stopPropagation()}
        >
          <div className="terminalButton red">
            <span>X</span>
          </div>
          <div className="terminalButton yellow">
            <span>-</span>
          </div>
          <div
            className="terminalButton green"
            onClick={() => setTerminalIsExpanded((isExpanded) => !isExpanded)}
          >
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="terminalContent">
        <p className="terminalPrompt">
          {promptInputLabel}
          <span>cat ~/about.json</span>
        </p>
        <div className="terminalOutput">
          {"{"}
          {terminalOutputLines}
          {"}"}
        </div>
        <p className="terminalPrompt">
          {promptInputLabel}
          <span contentEditable style={{ outline: "none", flex: "1" }}>
            
          </span>
        </p>
      </div>
    </div>
  );
}
