import React from "react";
import "./ExamPrep.css";
import listening from "./../../Media/listening.png";
import reading from "./../../Media/reading.png";
import writing from "./../../Media/writing.png";
import speaking from "./../../Media/speaking.png";
import ExamPrepMain from "./ExamPrepMain";
const ExamPrepPattern = () => {
  return (
    <div className="examPatternContainer">
      <h2>Goethe Exam Pattern</h2>
      <p>
        The Goethe Exams align with the six-level scale (A1 to C2) of the Common
        European Framework of Reference for Languages (CEFR). Depending on the
        level, it takes around 40 to 100 hours of guided study to prepare for
        the Goethe exam.
      </p>
      <h3>The exam is divided into four parts:</h3>

      <ul>
        <li>
          <div className="examPatternItem">
            <img src={listening} alt="listening" />
          </div>
          <h4>Listening (Hören)</h4>
        </li>
        <li>
          <div className="examPatternItem">
            <img src={reading} alt="reading" />
          </div>
          <h4>Reading (Lesen)</h4>
        </li>
        <li>
          <div className="examPatternItem">
            <img src={writing} alt="writing" />
          </div>
          <h4>Writing (Schreiben)</h4>
        </li>
        <li>
          <div className="examPatternItem">
            <img src={speaking} alt="speaking" />
          </div>
          <h4>Speaking (Sprechen)</h4>
        </li>
      </ul>
      <p>
        Each part of the exam is designed to evaluate specific language
        competencies. To pass the Goethe exam, you must earn at least 60%, and
        all sections of the exam must be completed.
      </p>
      <div className="examPrepPatternContent">
        <h3>
          German Exam Preparation in Bangalore – A1, A2, B1, B2, C1, and C2
        </h3>
        <p>
          The different levels in the Goethe exam represent a specific stage of
          language proficiency in German. These levels start from A1 and go up
          to C2. Let’s see how to prepare for the Goethe exam based on these
          levels:
        </p>
      </div>
    </div>
  );
};

export default ExamPrepPattern;
