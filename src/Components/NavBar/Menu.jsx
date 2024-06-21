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
              <Link className="list" to={"/a1"}>
                A1 Level
              </Link>
            </li>
            <li>
              <Link className="list" to={"/a2"}>
                A2 Level
              </Link>
            </li>
            <li>
              <Link className="list" to={"/b1"}>
                B1 Level
              </Link>
            </li>
            <li>
              <Link className="list" to={"/b2"}>
                B2 Level
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="">Exam Preparation</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <Link to={"/contact-us"}>Contact</Link>
        </li>
        <div className="menuContent">
          <li>
            <a href="">Speak to advisor</a>
          </li>
        </div>
      </div>
      <ul onClick={showSideBar} className="mainMenu">
        <FontAwesomeIcon icon={faBars} className="hamIcon"></FontAwesomeIcon>
      </ul>
      <div className="respMenu">
        <div className="respMenuScroll">
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                Home
              </Link>
            </h1>
            <h1 className="cross">
              <FontAwesomeIcon
                icon={faX}
                onClick={hideSideBar}
                className="respIcon"
              ></FontAwesomeIcon>
            </h1>
          </ul>
          <ul className="serviceDrop">
            <h1>
              <Link onClick={hideSideBar} to={"/courses"}>
                Courses
              </Link>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h1>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/a1"}>
                    A1 Level
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/a2"}>
                    A2 Level
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/b1"}>
                    B1 Level
                  </Link>
                </h2>
              </li>
              <li>
                <h2>
                  <Link onClick={hideSideBar} to={"/b2"}>
                    B2 Level
                  </Link>
                </h2>
              </li>
            </span>
          </ul>
          <ul>
            <h1>
              <a onClick={hideSideBar} to={"/salon-membership"}>
                Exam Preparation
              </a>
            </h1>
          </ul>
          <ul>
            <h1>
              <a onClick={hideSideBar} to={"/shop"}>
                About
              </a>
            </h1>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/contact-us"}>
                Contact
              </Link>
            </h1>
          </ul>
          <div className="respMenuGap">
            <button>
              <a href="">Speak to advisor</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
