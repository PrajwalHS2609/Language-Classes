import React from "react";
import "./CourseDetails.css";
import { Link } from "react-router-dom";
const CourseDetailsMenu = () => {
  return (
    <div className="courseDetailsMenu">
      <li>
        <Link to={"/courses/"}>A1</Link>
      </li>
      <li>
        <Link to={"/courses/a2"}>A2</Link>
      </li>
      <li>
        <Link to={"/"}>B1</Link>
      </li>
      <li>
        <Link to={"/"}>B2</Link>
      </li>
      <li>
        <Link to={"/"}>C1</Link>
      </li>
      <li>
        <Link to={"/"}>C2</Link>
      </li>
    </div>
  );
};

export default CourseDetailsMenu;
