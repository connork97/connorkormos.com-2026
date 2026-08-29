import React, { useLayoutEffect, useRef, useState } from "react";

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

  const initialConnorData = {
    name: `${Connor.firstName} ${Connor.lastName}`,
    role: Connor.roles[0],
    yearsExperience: Connor.yearsExperience,
    email: Connor.email,
    phone: Connor.phone,
    location: Connor.location,
  };

  const terminalOutputLines = Object.entries(initialConnorData).map(
    ([key, value]) => (
      <p className="terminalOutputLine" key={key}>
        <span className="greenText">{key}: </span>
        {value},
      </p>
    ),
  );

  const promptInputLabel = (
    <span className="greenText">
      connor@kormos
      <span style={{ color: "white" }}>
        :<span style={{ color: "blue" }}>~</span>
        $&nbsp;
      </span>
      {/* <span style={{ color: "blue" }}>$&nbsp;</span> */}
    </span>
  );

  // const [entries, setEntries] = useState<string[]>([]);

  const [terminalTextContent, setTerminalTextContent] = useState(
    <>
      {" "}
      <p className="terminalPrompt">
        {promptInputLabel}
        <span>cat ~/about.json</span>
      </p>
      <div className="terminalOutput">
        {"{"}
        {terminalOutputLines}
        {"}"}
      </div>
    </>,
  );
  const [promptInputValue, setPromptInputValue] = useState("");
  const handleTerminalInputSubmit = (input: string) => {
    const connorData = Connor[input as keyof typeof Connor];
    console.log("Terminal input submitted:", input, connorData);
    setTerminalTextContent((prevContent) => (
      <>
        {prevContent}
        <p className="terminalPrompt">
          {promptInputLabel}
          <span>{input}</span>
        </p>
        <div className="terminalOutput">
          {"{"}
          {connorData ? (
            Array.isArray(connorData) ? (
              connorData.map((item, index) => (
                <p className="terminalOutputLine" key={index}>
                  {JSON.stringify(item)},
                </p>
              ))
            ) : typeof connorData === "object" ? (
              Object.entries(connorData).map(([key, value]) => (
                <p className="terminalOutputLine" key={key}>
                  <span className="greenText">{key}: </span>
                  {JSON.stringify(value)},
                </p>
              ))
            ) : (
              <p className="terminalOutputLine">{JSON.stringify(connorData)}</p>
            )
          ) : (
            <p className="terminalOutputLine">Command not found</p>
          )}
          {"}"}
        </div>
      </>
    ));
  };

  const terminalContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const terminal = terminalContentRef.current;

    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [terminalTextContent]);
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
      <div className="terminalContent" ref={terminalContentRef}>
        {/* <p className="terminalPrompt">
          {promptInputLabel}
          <span>cat ~/about.json</span>
        </p> */}
        {terminalTextContent}
        {/* <div className="terminalOutput">
          {"{"}
          {terminalOutputLines}
          {"}"}
        </div> */}
        <p className="terminalPrompt">
          {promptInputLabel}
          <input
            className="terminalInput"
            style={{ border: "none", background: "transparent" }}
            value={promptInputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleTerminalInputSubmit(promptInputValue);
                setPromptInputValue("");
              }
            }}
            onChange={(e) => setPromptInputValue(e.target.value)}
          />
        </p>
      </div>
    </div>
  );
}
