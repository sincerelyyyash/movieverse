import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
        Step into a realm where every flicker of the screen and each dialogue exchanged shape a narrative tapestry. Our reviews delve deep into the heart of cinema and television, unraveling the essence of storytelling. From captivating performances to intricate plotlines, we dissect every element to guide you through the vast landscape of visual storytelling, ensuring your viewing experience is nothing short of extraordinary.
        </div>
        <div className="socialIcons">
          <a href="https://www.linkedin.com/in/sincerelyyyash/">
          <span className="icon">
            <FaFacebookF />
          </span>
          </a>
          <a href="https://www.linkedin.com/in/sincerelyyyash/">
          <span className="icon">
            <FaInstagram />
          </span>
          </a>
          <a href="https://www.linkedin.com/in/sincerelyyyash/">
          <span className="icon">
            <FaTwitter />
          </span>
          </a>
          <a href="https://www.linkedin.com/in/sincerelyyyash/">
          <span className="icon">
            <FaLinkedin />
          </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;