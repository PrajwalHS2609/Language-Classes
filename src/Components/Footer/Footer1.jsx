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
import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <div className="footer1Container">
      <div className="footer1Content" id="footer1Content1">
        <ul>
          <h3>Our Links</h3>
          <li>
            {" "}
            <a href="/about-us">About Us</a>
          </li>
          <li>
            {" "}
            <a href="/exam-preparation">Exam Perpetration</a>
          </li>
          <li>
            {" "}
            <a href="/blog">Blog</a>
          </li>
          <li>
            {" "}
            <a href="/contact-us">Become a Teacher</a>
          </li>
        </ul>
      </div>
      <div className="footer1Content" id="footer1Content2">
        <ul>
          <h3>Courses</h3>
          <li>
            {" "}
            <Link to={"/a1-german-course"}>German A1 Level</Link>
          </li>
          <li>
            {" "}
            <Link to={"/a2-german-course"}>German A2 Level</Link>
          </li>
          <li>
            {" "}
            <Link to={"/b1-german-course"}>German B1 Level</Link>
          </li>
          <li>
            {" "}
            <Link to={"/b2-german-course"}>German B2 Level</Link>
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
            Dr.Shivaram Karanth Nagar, Rachenahalli, RK Hegde Nagar, Bangalore
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
