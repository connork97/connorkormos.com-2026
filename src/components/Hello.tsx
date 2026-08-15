import { useEffect, useRef, useState } from "react";
import "../App.css";
import "./Hello.css";

export default function Hello() {
  const fullHelloString = "Hi, I'm Connor Kormos.";
  const [helloString, setHelloString] = useState("");

  const fullIAmStringBase = "And I am ";
  const fullIAmStringExtension = "a Software Engineer.";
  const [iAmStringBase, setIAmStringBase] = useState("");
  const [iAmStringExtension, setIAmStringExtension] = useState("");

  const timeoutRef = useRef<number | null>(null);

  const typingDelay = 100;

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

    const waitForSecondLine = iAmStringBase.length === 0 && iAmStringExtension.length === 0;

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
      const nextValue = fullIAmStringExtension.slice(0, iAmStringExtension.length + 1);

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

  const caret = <span className="caret">_</span>

  return (
    <div className="mainContentContainer">
      <h1
        className="titleMain helloString"
        // style={{ width: `${helloString.length}ch` }}
      >
        {helloString}
        {iAmStringBase.length === 0 && caret}
      </h1>
      <h2 className="titleSecondary iAmString">
         {iAmStringBase}
         {iAmStringExtension}
         {iAmStringBase.length > 0 && caret}
      </h2>
    </div>
  );
}
