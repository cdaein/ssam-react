import React, { useState } from "react";
import Ssam from "../src/index.tsx";
import { sketch, settings } from "./sketch";

export default function App() {
  const [isMounted, setIsMounted] = useState(true);

  const handleClick = () => {
    setIsMounted(!isMounted);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          padding: "10px",
          flex: "1 0 20%",
          minHeight: "20%",
          fontFamily: "sans-serif",
          fontSize: "1rem",
          color: "white",
        }}
      >
        <h1>Ssam React</h1>
        <p>Use Ssam.js sketch in a React application.</p>
        <button onClick={handleClick}>Mount/unmount</button>
      </div>
      {isMounted && (
        <div style={{ flex: "1 0 80%", minHeight: "80%" }}>
          <Ssam sketch={sketch} settings={settings} />
        </div>
      )}
    </div>
  );
}
