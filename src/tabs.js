import React from "react";
import "./Tabs.css";
import { useState } from "react";

export default function Tabs() {
  const [currentState, setState] = useState(0);

  const func = (index) => {
    setState(index);
  };

  return (
    <div className="container">
      <div className="btn--container">
        <button
          className={currentState === 0 ? "tablink active" : "tablink"}
          onClick={func(0)}
        >
          Tabs
        </button>
        <button
          className={currentState === 1 ? "tablink active" : "tablink"}
          onClick={func(1)}
        >
          Tabs2
        </button>
        <button
          className={currentState === 2 ? "tablink active" : "tablink"}
          onClick={func(2)}
        >
          Tabs
        </button>
      </div>

      <div className="content--tabs ">
        <p className={currentState === 0 ? "content active" : "content"}>
          Tabs1
        </p>
        <p className={currentState === 1 ? "content active" : "content"}>
          Tabs2
        </p>
        <p className={currentState === 2 ? "content active" : "content"}>
          Tabs
        </p>
      </div>
    </div>
  );
}
