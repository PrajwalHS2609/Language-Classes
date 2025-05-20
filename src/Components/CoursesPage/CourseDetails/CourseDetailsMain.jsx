import React from 'react'
import "./CourseDetails.css"
import CourseDetailsMenu from './CourseDetailsMenu'
import CourseDetailsDisplay from './CourseDetailsDisplay'
const CourseDetailsMain = () => {
  return (
    <div className='courseDetailsMainContainer'>
      <CourseDetailsMenu/>
      <CourseDetailsDisplay/>
    </div>
  )
}

export default CourseDetailsMain
