import React, { useRef, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Menu = () => {
  let [drop, setDrop] = useState(false);
  let dropRef = useRef();

  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(620px)";
  };

  let handleDropDown = () => {
    if (!drop) {
      setDrop(true);
      dropRef.current.style.display = "flex";
      console.log("down");
    } else {
      setDrop(false);
      dropRef.current.style.display = "none";
      console.log("up");
    }
  };

  return (
    <>
      <div className="menuContainer">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li className="menuDrop">
          <Link to={"/courses"}>Courses</Link>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="menuIcon"
          ></FontAwesomeIcon>
          <ul className="menuDropDown">
            <li>
              <Link className="list" to={"/a1-german-course"}>
                A1 Level
              </Link>
            </li>
            <li>
              <Link className="list" to={"/a2-german-course"}>
                A2 Level
              </Link>
            </li>
            <li>
              <Link className="list" to={"/b1-german-course"}>
                B1 Level
              </Link>
            </li>
            <li>
              <Link className="list" to={"/b2-german-course"}>
                B2 Level
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/exam-preparation"}>Exam Preparation</Link>
        </li>
        <li>
          <Link to={"/about-us"}>About</Link>
        </li>
        <li>
          <Link to={"/contact-us"}>Contact</Link>
        </li>
        <div className="menuContent">
          <li>
            <a href="/">Speak to advisor</a>
          </li>
        </div>
      </div>
      <ul onClick={showSideBar} className="mainMenu">
        <FontAwesomeIcon icon={faBars} className="hamIcon"></FontAwesomeIcon>
      </ul>
      <div className="respMenu">
        <div className="respMenuScroll">
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/"}>
                Home
              </Link>
            </h2>
            <h2 className="cross">
              <FontAwesomeIcon
                icon={faX}
                onClick={hideSideBar}
                className="respIcon"
              ></FontAwesomeIcon>
            </h2>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} to={"/courses"}>
                Courses
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h2>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/a1-german-course"}>
                    A1 Level
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/a2-german-course"}>
                    A2 Level
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/b1-german-course"}>
                    B1 Level
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link onClick={hideSideBar} to={"/b2-german-course"}>
                    B2 Level
                  </Link>
                </h3>
              </li>
            </span>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/exam-preparation"}>
                Exam Preparation
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/about-us"}>
                About
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/contact-us"}>
                Contact
              </Link>
            </h2>
          </ul>
          <div className="respMenuGap">
            <button>
              <a href="/">Speak to advisor</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
