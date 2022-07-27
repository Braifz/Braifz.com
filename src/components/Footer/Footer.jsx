import React from "react";

import githubIMG from "../../assets/img/github.svg";
import linkedinIMG from "../../assets/img/linkedin.svg";
import instagramIMG from "../../assets/img/instagram.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul className="footer-container">
        <li className="col col-1">
          <a
            href="https://github.com/Braifz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIMG} alt="" />
            <h1 className="text">Github</h1>
          </a>
        </li>
        <li className="col col-2">
          <a
            href="https://www.linkedin.com/in/braian-f-ba90291a8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIMG} alt="" />
            <h1 className="text">Linkedin</h1>
          </a>
        </li>
        <li className="col col-3">
          <a
            href="https://www.instagram.com/braifz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIMG} alt="" />
            <h1 className="text">Instagram</h1>
          </a>
        </li>
      </ul>
      <div className="rights-reserved">
        <p>&copy;{new Date().getFullYear()} Braifz</p>
      </div>
    </footer>
  );
}

export default Footer;
