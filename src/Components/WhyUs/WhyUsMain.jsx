import React from 'react'
import "./WhyUs.css"
import WhyUsCard from './WhyUsCard'
import img1 from "./../../Media/Flexible Timings.png"
import img2 from "./../../Media/Interactive Classes.png"
import img3 from "./../../Media/Study Material.png"
import img4 from "./../../Media/Practical Skills.png"
import img5 from "./../../Media/Customized Courses.png"
import img6 from "./../../Media/Proven Results.png"
import img7 from "./../../Media/Affordable Fees.png"
import img8 from "./../../Media/Personalized Attention.png"
import img9 from "./../../Media/Conversation Practice.png"
import img10 from "./../../Media/Exam Preparation.png"
import img11 from "./../../Media/Cultural Insights.png"
import img12 from "./../../Media/Personalized Coaching.png"

const WhyUsMain = () => {
  return (
    <div className='whyUsMainContainer'>
      <WhyUsCard img={img1} para="Flexible Timings"/>
      <WhyUsCard img={img2} para="Interactive Classes"/>
      <WhyUsCard img={img3} para="Study Material"/>
      <WhyUsCard img={img4} para="Practical Skills"/>
      <WhyUsCard img={img5} para="Customized Courses"/>
      <WhyUsCard img={img6} para="Proven Results"/>
      <WhyUsCard img={img7} para="Affordable Fees"/>
      <WhyUsCard img={img8} para="Personalized Attention"/>
      <WhyUsCard img={img9} para="Conversation Practice"/>
      <WhyUsCard img={img10} para="Exam Preparation"/>
      <WhyUsCard img={img11} para="Cultural Insights"/>
      <WhyUsCard img={img12} para="Personalized Coaching"/>
    </div>
  )
}

export default WhyUsMain
