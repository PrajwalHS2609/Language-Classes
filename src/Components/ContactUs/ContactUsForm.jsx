import React, { useState } from "react";
import "./ContactUs.css";
import { useNavigate } from "react-router-dom";
const ContactUsForm = () => {
  let navigate = useNavigate();
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
    navigate("/thank-you");
  };
  return (
    <div className="contactUsFormContainer">
      <h2>Get in Touch</h2>
      <p>
        Have some suggestions or just want to say hi? Our support team are ready
        to help you 24/7.
      </p>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
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
                <textarea name="" id=""></textarea>
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

export default ContactUsForm;
