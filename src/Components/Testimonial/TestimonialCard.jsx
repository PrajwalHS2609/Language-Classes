import React from "react";
import "./Testimonial.css";

const TestimonialCard = (props) => {
  return (
    <div className="testimonialCardContainer">
      <div className="testimonialBorder1"></div>
      <div className="testimonialBorder2"></div>
      <div className="testimonialBorder3"></div>
      <div className="testimonialBorder4"></div>
      <p>
        {props.para}
        <br />
        <span>{props.by}</span>
      </p>
    </div>
  );
};

export default TestimonialCard;
