import React from 'react'
import { BsCodeSlash } from "react-icons/bs";
import "./style.css"

export default function Skills() {
  const skillList = ["HTML", "CSS", "JS", "jQuery", "Github", "Heroku", "Booststrap", "Node", "Git"]
  return (
    <div>
      <h2><BsCodeSlash /> SKILLS</h2>
      <hr/>
      {skillList.map((skill, i) => (<p className="skillsLi" key={i}>{skill}</p>))}
      <br/>
      <br/>
    </div>
  )
}
