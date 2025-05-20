import React from "react";
import "./GermanBegins.css";
import GermanPointsCards from "./GermanPointsCards";
import flexible from "./../../Media/Flexible Learning Options.png";
import certified from "./../../Media/Certified Trainer.png";
import cefr from "./../../Media/CEFR Standard.png";
import modules from "./../../Media/4 Modules of Learning.png";
import price from "./../../Media/Affordable Prices.png";

const GermanBeginsMain = () => {
  return (
    <div className="germanBeginsMain">
      <GermanPointsCards
        img={flexible}
        head="Flexible Learning Options"
        para="Whether you prefer in-person classes, online sessions, or a combination of both, Prizma Academy offers flexible learning options to suit your schedule and preferences, making it convenient for anyone to learn German effectively."
      />
      <GermanPointsCards
        img={certified}
        head="Certified Trainer"
        para="At Prizma Academy, our German classes are led by certified trainers who are proficient in the language and possess extensive teaching experience. With their expertise, students receive top-quality instruction, ensuring effective learning and mastery of the German language."
      />
      <GermanPointsCards
        img={cefr}
        head="CEFR Standard"
        para="At Prizma Academy, our German classes adhere to the CEFR (Common European Framework of Reference for Languages) standard. This ensures that our students receive structured and comprehensive language instruction, enabling them to achieve proficiency in German according to internationally recognized benchmarks"
      />
      <GermanPointsCards
        img={modules}
        head="4 Modules of Learning"
        para="At Prizma Academy, our German classes are structured around the four essential language skills: reading, writing, listening, and speaking. Through a balanced curriculum, students develop proficiency in all aspects of the German language, equipping them for effective communication and comprehension in real-world situations."
      />
      <GermanPointsCards
        img={price}
        head="Affordable Prices"
        para="Discover the secrets of mastering German without emptying your wallet at Prizma Academy! Whether you’re starting from scratch or aiming for advanced fluency, our courses provide cost-effective solutions, guaranteeing that language excellence aligns perfectly with your financial plan."
      />
    </div>
  );
};

export default GermanBeginsMain;
