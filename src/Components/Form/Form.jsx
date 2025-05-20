import React from "react";
import FormMain from "./FormMain";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Form = () => {
  let handleExit = (e) => {
    e.preventDefault();
    let popDown = document.querySelector(".formCover");
    popDown.style.display = "none";
    window.location.reload();
  };
  return (
    <div className="formCover">
      <div className="formExit">
        <FontAwesomeIcon
          icon={faX}
          className="formExitIcon"
          onClick={handleExit}
        ></FontAwesomeIcon>
      </div>
      <FormMain />
    </div>
  );
};

export default Form;
