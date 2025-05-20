import React from "react";
import "./../../Testimonial/Testimonial.css"
import TestimonialCard from "../../Testimonial/TestimonialCard";

const CourseTestimonialMain = () => {
  return (
    <div className="testimonialMainContainer">
      <TestimonialCard
        para="“Enrolling in the German course in Bangalore at Prizma Academy was one of the best decisions of my life. The instructors were knowledgeable, and the course material was comprehensive. Today, I am pursuing my master's degree in Germany, thanks to the solid foundation I received here.” "
        by="- Ravi Kumar"
      />

      <TestimonialCard
        para="“The flexible timings and personalized attention at Prizma Academy made it possible for me to learn German while working full-time. The cultural insights provided were invaluable, and I feel confident using German in my daily interactions.” "
        by="- Sneha Patel"
      />
    </div>
  );
};

export default CourseTestimonialMain;
