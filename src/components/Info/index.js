import React from "react";
import "./style.css";
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter, BsGithub } from "react-icons/bs";
import myImage from "../../image/myImage.jpg";

export default function Info() {
  return (
    <div className="infoDiv">
      <img className="myImage" src={myImage} alt=""></img>
      <h2>mohammed almuziny</h2>
      <h2>student in tuwaiq js comps</h2>
      <hr />

      <p>
        <FaLocationArrow /> al-bukairyah, al-qassim, saudi arabia
      </p>
      <p>
        <AiOutlineMail /> mohammed.abdullah.elq.js@tuwaiq.edu.sa
      </p>

      <hr />
      <div className="icons">
        <a href="https://twitter.com/">
          <BsTwitter size="2rem" />
        </a>
        <a href="https://github.com/Mohammed-Almuziny">
          <BsGithub size="2rem" />
        </a>
      </div>

      <h3>
        I built this site with React components and a JSON Resume Schema. The
        full source code can be found in my Github repo.
      </h3>
    </div>
  );
}
