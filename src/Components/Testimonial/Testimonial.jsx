import React from 'react'
import "./Testimonial.css";
import TestimonialHead from './TestimonialHead';
import TestimonialMain from './TestimonialMain';
import TestimonialFooter from './TestimonialFooter';

const Testimonial = () => {
  return (
    <div className='testimonialContainer'>
      <TestimonialHead/>
      <TestimonialMain/>
      <TestimonialFooter/>
    </div>
  )
}

export default Testimonial
