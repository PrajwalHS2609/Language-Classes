import React from "react";
import "./GermanBegins.css";
import GermanPointsCards from "./GermanPointsCards";
const GermanBeginsPoints = () => {
  return (
    <div className="germanPointsContainer">
      <GermanPointsCards
        head="Expert Instruction"
        para="  Prizma Academy boasts highly experienced instructors who are native speakers or certified professionals in the German language, ensuring top-quality education."
        no="1"
      />
      <GermanPointsCards
        head="Comprehensive Curriculum"
        para="Our curriculum is meticulously designed to cover all aspects of language learning, including grammar, vocabulary, speaking, listening, reading, and writing, to provide a well-rounded learning experience."
        no="2"
      />
      <GermanPointsCards
        head="Flexible Learning Options"
        para="Whether you prefer in-person classes, online sessions, or a combination of both, Prizma Academy offers flexible learning options to suit your schedule and preferences, making it convenient for anyone to learn German effectively."
        no="3"
      />
    </div>
  );
};

export default GermanBeginsPoints;
