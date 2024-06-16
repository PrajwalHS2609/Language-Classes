import React from "react";
import "./Form.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FormMain = () => {
  let [data, setData] = useState({
    userName: "",
    email: "",
    phone: "",
    detail: "",
  });

  let { name, email, phone } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // let { name, phone, email, requirement } = data;
    // const mailtoLink = `mailto:hello@buildurspace.com?subject=Message from ${name}&body=${encodeURIComponent(
    //   `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${requirement}`
    // )}`;
    // window.location.href = mailtoLink;
  };
  return (
    <div className="formMainContainer">
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend></legend>
          <table>
            <tr>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Name"
                  onChange={handleData}
                  autoComplete="no"
                  required
                />
              </td>
            </tr>
            <tr>
              {/* <label htmlFor="email">Email :</label> */}
              <td>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleData}
                  autoComplete="no"
                  required
                />
              </td>
            </tr>
            <tr>
              {/* <label htmlFor="phone">Phone :</label> */}
              <td>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  placeholder="Phone"
                  onChange={handleData}
                  autoComplete="no"
                  required
                />
              </td>
            </tr>
            <tr>
              {/* <label htmlFor="detail">Details :</label> */}
              <td>
               <select name="course" id="course">Courses Level
               <option value="">Choose Level</option>
               <option value="">A1 Level</option>
               <option value="">A2 Level</option>
               <option value="">B1 Level</option>
               <option value="">B2 Level</option>
               </select>
              </td>
            </tr>
            <button className="sub" type="handlesubmit">
              Book Now
            </button>
          </table>
        </fieldset>
      </form>
    </div>
  );
};

export default FormMain;
