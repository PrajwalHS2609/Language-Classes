import React from "react";
import "./ContactUs.css";
import location from "./../../Media/Location.png";
import mail from "./../../Media/Email.png";
import phone from "./../../Media/Phone.png";
const ContactUsInfo = () => {
  return (
    <div className="contactInfoContainer">
      <h2>Contact Us</h2>
      <div className="contactInfoContent">
        <div className="contactInfoItem1">
          <img src={location} alt="location" />
        </div>
        <div className="contactInfoItem2">
          <p>
            Address:
            <br />
            <span>
              Dr.Shivaram Karanth Nagar, Rachenahalli, RK Hegde Nagar, Bangalore
            </span>
          </p>
        </div>
      </div>
      <div className="contactInfoContent">
        <div className="contactInfoItem1">
          <img src={mail} alt="mail" />
        </div>
        <div className="contactInfoItem2">
          <p>
            Email:
            <br />
            <a href="mailto:info@prizmaacademy.com">info@prizmaacademy.com</a>
          </p>
        </div>
      </div>
      <div className="contactInfoContent">
        <div className="contactInfoItem1">
          <img src={phone} alt="phone" />
        </div>
        <div className="contactInfoItem2">
          <p>
            Phone:
            <br />
            <a href="tel:9538608484">+91 9538608484</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsInfo;
