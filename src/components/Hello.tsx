import { useEffect, useRef, useState } from "react";
import "../App.css";
import "./Hello.css";

export default function Hello({
  terminalIsExpanded,
}: {
  terminalIsExpanded: boolean;
}) {
  const fullHelloString = "Hi, I'm Connor Kormos.";
  const [helloString, setHelloString] = useState("");

  const fullIAmStringBase = "And I am ";
  const fullIAmStringExtension = "a Software Engineer.";
  const [iAmStringBase, setIAmStringBase] = useState("");
  const [iAmStringExtension, setIAmStringExtension] = useState("");

  const timeoutRef = useRef<number | null>(null);

  const typingDelay = 75;

  const pauses: Record<string, number> = {
    "Hi, ": 1000,
    "And I am ": 1000,
  };

  useEffect(() => {
    if (helloString.length >= fullHelloString.length) {
      return;
    }

    const nextValue = fullHelloString.slice(0, helloString.length + 1);
    const delay = pauses[nextValue] ?? typingDelay;

    timeoutRef.current = setTimeout(() => {
      setHelloString(nextValue);
    }, delay);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [fullHelloString, helloString]);

  useEffect(() => {
    if (helloString.length < fullHelloString.length) {
      return;
    }

    if (
      iAmStringBase.length >= fullIAmStringBase.length &&
      iAmStringExtension.length >= fullIAmStringExtension.length
    ) {
      return;
    }

    const waitForSecondLine =
      iAmStringBase.length === 0 && iAmStringExtension.length === 0;

    if (waitForSecondLine) {
      timeoutRef.current = window.setTimeout(() => {
        setIAmStringBase(fullIAmStringBase.slice(0, 1));
      }, 2000);

      return () => {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    }

    if (iAmStringBase.length < fullIAmStringBase.length) {
      const nextValue = fullIAmStringBase.slice(0, iAmStringBase.length + 1);
      const delay = pauses[nextValue] ?? typingDelay;

      timeoutRef.current = window.setTimeout(() => {
        setIAmStringBase(nextValue);
      }, delay);

      return () => {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    }

    if (iAmStringExtension.length < fullIAmStringExtension.length) {
      const nextValue = fullIAmStringExtension.slice(
        0,
        iAmStringExtension.length + 1,
      );

      timeoutRef.current = window.setTimeout(() => {
        setIAmStringExtension(nextValue);
      }, typingDelay);

      return () => {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    }
  }, [
    fullHelloString,
    fullIAmStringBase,
    fullIAmStringExtension,
    helloString,
    iAmStringBase,
    iAmStringExtension,
    pauses,
    typingDelay,
  ]);

  const caret = <span className="caret">_</span>;

  return (
    <div className={`flexColumn spaceEvenly helloContainer${terminalIsExpanded ? " expanded" : ""}`}>
      <div>
        <h1 className="titleMain helloString">Connor Kormos</h1>
        <h2 className="titleSecondary iAmString">Software Engineer</h2>
        {/* <h1
          className="titleMain helloString"
        >
          {helloString}
          {iAmStringBase.length === 0 && caret}
        </h1>
        <h2 className="titleSecondary iAmString">
          {iAmStringBase}
          {iAmStringExtension}
          {iAmStringBase.length > 0 && caret}
        </h2> */}
      </div>
      <div style={{marginTop: 'auto', width: '80%', textAlign: 'justify'}}>
        I'm a full-stack software engineer who enjoys building modern, practical
        web applications and solving problems through clean, thoughtful code.
      </div>
      <div className="flexRow spaceBetween" style={{ marginTop: 'auto', width: '80%', gap: '1rem' }}>
        <a
          className="mainButtonLink"
          href="https://www.github.com/connork97"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My GitHub
        </a>
        <a
          className="mainButtonLink"
          href="https://www.connorkormos.com/resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
}
