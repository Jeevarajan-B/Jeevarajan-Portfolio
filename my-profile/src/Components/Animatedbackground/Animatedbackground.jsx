
import React from "react";
import "./Animatedbackground.css";

const Animatedbackground = () => {
  return (
    <ul className="background">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  );
};

export default Animatedbackground;
