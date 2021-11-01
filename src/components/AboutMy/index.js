import React from "react";
import "./style.css";
import About from "../About";
import Skills from "../Skills";
import Education from "../Education";

export default function AboutMy() {
  return (
    <div className="aboutDiv">
      <About />
      <Skills />
      <Education />
    </div>
  );
}
