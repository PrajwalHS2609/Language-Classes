import React from "react";
import "./Form.css";
import Swal from "sweetalert2";

const FormMain = () => {
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
    <div className="formMainContainer">
      <form action="" onSubmit={onSubmit}>
        <fieldset>
          <legend>Start Speaking German</legend>
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
                <select name="course" id="course" required>
                  <option value="">Choose Level</option>
                  <option value="A1 Level">A1 Level</option>
                  <option value="A2 Level">A2 Level</option>
                  <option value="B1 Level">B1 Level</option>
                  <option value="B2 Level">B2 Level</option>
                </select>
              </td>
            </tr>
            <button className="sub" type="onSubmit">
              Book Now
            </button>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default FormMain;
