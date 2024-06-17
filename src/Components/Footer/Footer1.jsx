import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer1 = () => {
  return (
    <div className="footer1Container">
      <div className="footer1Content" id="footer1Content1">
        <ul>
          <h3>About Us</h3>
          <li>
            {" "}
            <a href="">About Us</a>
          </li>
          <li>
            {" "}
            <a href="">Corporate Training</a>
          </li>
          <li>
            {" "}
            <a href="">Exam Perpetration</a>
          </li>
          <li>
            {" "}
            <a href="">Blog</a>
          </li>
          <li>
            {" "}
            <a href="">Become a Teacher</a>
          </li>
        </ul>
      </div>
      <div className="footer1Content" id="footer1Content2">
        <ul>
          <h3>Courses</h3>
          <li>
            {" "}
            <a href="">German A1 Level</a>
          </li>
          <li>
            {" "}
            <a href="">German A2 Level</a>
          </li>
          <li>
            {" "}
            <a href="">German B1 Level</a>
          </li>
          <li>
            {" "}
            <a href="">German B2 Level</a>
          </li>
          <li>
            {" "}
            <a href="">German C1 Level</a>
          </li>
          <li>
            {" "}
            <a href="">German C2 Level</a>
          </li>
          <li>
            {" "}
            <a href="">Intensive Course</a>
          </li>
          <li>
            {" "}
            <a href="">Kids Course</a>
          </li>
        </ul>
      </div>
      {/* <div className="footer1Content" id="footer1Content3">
        <ul>
          <h3>Support</h3>
          <li>Need Help</li>
          <li>
            <a href="mailto:sahil@prizmaacademy.com">sahil@prizmaacademy.com</a>
          </li>
        </ul>
      </div> */}
      <div className="footer1Content" id="footer1Content4">
        <ul>
          <h3>Contact Us</h3>
          <li>
            <FontAwesomeIcon
              icon={faPhone}
              className="menuIcon"
            ></FontAwesomeIcon>
            <a href="tel:9538608484">+91 9538608484</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="menuIcon"
            ></FontAwesomeIcon>
            3rd Floor, 4 C-513, above Bandhan Bank, HRBR Layout 2nd Block, HRBR
            Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="menuIcon"
            ></FontAwesomeIcon>
            <a href="mailto:info@prizmaacademy.com">info@prizmaacademy.com</a>
          </li>
        </ul>
      </div>
      <div className="footer1Content" id="footer1Content5">
        <ul>
          <h3>Social Media</h3>
          <li>
            <a href="https://www.facebook.com/PrizmaAcademyfb">
              <FontAwesomeIcon
                icon={faFacebook}
                className="footerIcon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/prizmaacademy/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="footerIcon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/prizmalanguageacademy/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="footerIcon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC_MS3y-5o36akwsI6hNbA9Q">
              <FontAwesomeIcon
                icon={faYoutube}
                className="footerIcon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=919538608484">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="footerIcon"
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer1;
