import React from "react";
import A2WhyCard from "../../A2Page/A2Why/A2WhyCard";
import instructor from "./../../../Media/instructor.png";
import "./../../A2Page/A2Page.css";
const C2WhyMain = () => {
  return (
    <div className="a2WhyMainContainer">
      <A2WhyCard
        img={instructor}
        head=" Experienced and Certified Trainers"
        para="Our C2 German classes in Bangalore are conducted by highly experienced and certified trainers who are native speakers or possess near-native proficiency in German. They bring a wealth of knowledge and practical experience to the classroom, ensuring that you receive top-notch instruction."
      />
      <A2WhyCard
        img={instructor}
        head="Tailored Curriculum"
        para="The curriculum for our C2 German classes in Bangalore is designed to cover all aspects of the German language at an advanced level. From complex grammatical structures to advanced vocabulary and idiomatic expressions, our classes prepare you for real-world scenarios and professional communication."
      />
      <A2WhyCard
        img={instructor}
        head="Interactive Learning Environment"
        para="Our C2 German classes in Bangalore emphasize interactive learning. Through engaging activities, group discussions, and immersive exercises, you will enhance your speaking, listening, reading, and writing skills. Our goal is to make learning enjoyable and effective."
      />
      <A2WhyCard
        img={instructor}
        head="Flexible  Scheduling"
        para="We understand that our students have diverse schedules. Therefore, we offer flexible class timings for our C2 German classes in Bangalore. Whether you prefer weekday or weekend sessions, we have options that fit your lifestyle."
      />
      <A2WhyCard
        img={instructor}
        head="Comprehensive Study Materials"
        para="Prizma Academy provides extensive study materials that complement our C2 German classes in Bangalore. These resources include textbooks, practice exercises, audio-visual aids, and online tools to support your learning journey. "
      />
    </div>
  );
};

export default C2WhyMain;
