
import React from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  return (
    <ul className="background">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  );
};

export default AnimatedBackground;
