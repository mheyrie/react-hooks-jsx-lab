import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>React seem like it going to be filled with Fun and Enjoyable Learnings</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;
