import React from "react";
import Testimonial from './../Testimonial/Testimonial';
import CourseTestimonial from "./CourseTestimonial/CourseTestimonial";

const CoursePgGermanClass = () => {
  return (
    <div className="coursePgGerman">
      <div className="coursePgGermanHead">
        <h1>
          <span>German Courses </span> in Bangalore: Your Gateway to a World of
          Opportunities
        </h1>
      </div>
      <div className="coursePgGermanPara">
        <p>
          Learning a new language is always a rewarding experience, opening
          doors to new cultures, career opportunities, and personal growth.
          Among the many languages one can learn, German stands out due to its
          significant influence in the realms of science, business, and culture.
          If you're looking to embark on this linguistic journey, Prizma Academy
          offers the best German course in Bangalore, tailored to meet the needs
          of every learner.
        </p>
        <CourseTestimonial/>

      </div>
    </div>
  );
};

export default CoursePgGermanClass;
