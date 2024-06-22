import React from "react";
import "./ContactUs.css";
import ContactUsMap from "./ContactUsMap";
import contactUs from "./../../Media/contactUs.jpg";
import ContactUsInfo from "./ContactUsInfo";
import ContactUsForm from "./ContactUsForm";
import PrizmaMap from "../PrizmaMap/PrizmaMap";
const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      {/* <div className="contactUsHead">
        <img src={contactUs} alt="" />
        <div className="contactUsCover">
            <h2>Contact Us</h2>
        </div>
      </div> */}
      <div className="contactUsContent1">
        <ContactUsInfo />
      </div>
      <div className="contactUsContent2">
        <ContactUsForm />
      </div>
      <div className="contactUsContent3">
        <PrizmaMap />
      </div>
    </div>
  );
};

export default ContactUs;
