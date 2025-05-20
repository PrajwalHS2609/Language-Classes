import React from "react";
import "./WhatsApp.css";
import Prizma from "./../../Media/favIcon.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  return (
    <div className="whatsAppContainer">
      <FloatingWhatsApp
        phoneNumber="919538608484"
        accountName="Prizma"
        avatar={Prizma} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="Learn German Online with Certified Trainers at Prizma Academy — Flexible Timings, Expert Guidance & Real Results!"
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default WhatsApp;
