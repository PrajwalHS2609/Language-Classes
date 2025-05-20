import React from "react";
import Swal from "sweetalert2";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopUpForm = () => {
      let hideSideBar = () => {
    const sideBar = document.querySelector(".popup-container");
    sideBar.style.display = "none";
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "8e8187ed-fc3e-4bd8-b553-0755da89ab07");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
      });
      form.reset(); // Clear the form after successful submission
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div className="popUpForm-wrapper">
      <div className="popUpFormContainer">
        <h2>Speak To Advisor</h2>
        <FontAwesomeIcon
          icon={faX}
          onClick={hideSideBar}
          className="popXIcon"
        ></FontAwesomeIcon>
        <form action="" onSubmit={onSubmit}>
          <fieldset>
            <table>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                    autoComplete="off"
                  />
                </td>
              </tr>
              <tr>
                {/* <label htmlFor="email">Email :</label> */}
                <td>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                    autoComplete="off"
                  />
                </td>
              </tr>
              <tr>
                {/* <label htmlFor="phone">Phone :</label> */}
                <td>
                  <input
                    type="phone"
                    placeholder="Phone number"
                    required
                    autoComplete="off"
                    name="phone"
                  />
                </td>
              </tr>
              <tr>
                {/* <label htmlFor="detail">Details :</label> */}
                <td>
                  <textarea
                    placeholder="Your Message"
                    required
                    autoComplete="off"
                    name="message"
                  ></textarea>{" "}
                </td>
              </tr>
              <button className="sub" type="onSubmit">
                Book Now
              </button>
            </table>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PopUpForm;
