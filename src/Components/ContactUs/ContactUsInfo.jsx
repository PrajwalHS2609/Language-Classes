import React from "react";
import "./ContactUs.css";
const ContactUsInfo = () => {
  return (
    <div className="contactInfoContainer">
      <div className="contactInfoContent">
        <div className="contactInfoItem1">
          <img
            src="https://keenitsolutions.com/products/wordpress/educavo/wp-content/uploads/2020/10/address.png"
            alt=""
          />
        </div>
        <div className="contactInfoItem2">
          <p>
            Address:
            <br />
            <span>
              #4 C-513,HRBR 2nd Block,Above Bandhan Bank,3rd Floor, Kalyan
              Nagar, Bengaluru, Karnataka 560043
            </span>
          </p>
        </div>
      </div>
      <div className="contactInfoContent">
        <div className="contactInfoItem1">
          <img
            src="https://keenitsolutions.com/products/wordpress/educavo/wp-content/uploads/2020/10/open-email.png"
            alt=""
          />
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
          <img
            src="https://keenitsolutions.com/products/wordpress/educavo/wp-content/uploads/2020/10/smartphone.png"
            alt=""
          />
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
