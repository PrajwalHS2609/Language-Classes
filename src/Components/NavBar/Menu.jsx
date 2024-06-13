import React, { useRef, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faX } from "@fortawesome/free-solid-svg-icons";
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
          <a href="">Home</a>
        </li>
        <li className="menuDrop">
          <a href="">Courses</a>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="menuIcon"
          ></FontAwesomeIcon>
          <ul className="menuDropDown">
            <li>
              <a className="list" href="">
                A1 Level
              </a>
            </li>
            <li>
              <a className="list" href="">
                A2 Level
              </a>
            </li>
            <li>
              <a className="list" href="">
                B1 Level
              </a>
            </li>
            <li>
              <a className="list" href="">
                B2 Level
              </a>
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
          <a href="">Contact</a>
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
              <a onClick={hideSideBar} to={"/"}>
                Home
              </a>
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
              <a onClick={hideSideBar} to={"/service"}>
                Courses
              </a>
              <FontAwesomeIcon
                onClick={handleDropDown}
                icon={faAngleDown}
                className="respDropIcon"
              ></FontAwesomeIcon>
            </h1>
            <span className="respMenuSpan" ref={dropRef}>
              <li>
                <h2>
                  <a onClick={hideSideBar} to={"/hair-salon"}>
                    A1 Level
                  </a>
                </h2>
              </li>
              <li>
                <h2>
                  <a onClick={hideSideBar} to={"/nails-salon"}>
                    A2 Level
                  </a>
                </h2>
              </li>
              <li>
                <h2>
                  <a onClick={hideSideBar} to={"/facial"}>
                    B1 Level
                  </a>
                </h2>
              </li>
              <li>
                <h2>
                  <a onClick={hideSideBar} to={"/beauty-essentials"}>
                    B2 Level
                  </a>
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
              <a onClick={hideSideBar} to={"/franchise"}>
                Contact
              </a>
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
