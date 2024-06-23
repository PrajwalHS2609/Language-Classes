import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUsMain = () => {
  return (
    <div className="aboutUsMainContainer">
      <p>
        Welcome to Prizma Academy, a leading foreign language institute renowned
        for providing comprehensive online courses in a variety of languages,
        including German, French, Japanese, Spanish, and many more. Whether your
        goal is to study or work abroad, or you simply wish to immerse yourself
        in different cultures, our courses are tailored to assist you every step
        of the way.
        <ul>
          <h3>
            At Prizma Academy, we offer specialized foreign language courses for
            diverse needs:
          </h3>
          <div className="aboutusCardMain">
            <AboutUsCard
              head="Business Professionals: "
              para="Courses designed for those aiming to conduct business internationally."
            />
            <AboutUsCard
              head="Students :"
              para="Preparatory courses for AP language exams"
            />
            <AboutUsCard
              head="Language Enthusiasts: "
              para="Programs to enhance grammar and writing skills."
            />
          </div>
        </ul>
        Our online learning platform allows you to attend foreign language
        classes from anywhere in the world, eliminating the need to visit a
        physical center. Our virtual classrooms enable interactive sessions
        where you and our expert trainers can meet online, leveraging integrated
        audio and webcam tools for an engaging learning experience.
      </p>
    </div>
  );
};

export default AboutUsMain;
