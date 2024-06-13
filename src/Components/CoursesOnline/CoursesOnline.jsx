import React from 'react'
import "./CoursesOnline.css"
import CoursesOnlineHead from './CoursesOnlineHead'
import CourseOnlineMain from './CourseOnlineMain'
const CoursesOnline = () => {
  return (
    <div className='coursesOnlineContainer'>
      <CoursesOnlineHead/>
      <CourseOnlineMain/>
    </div>
  )
}

export default CoursesOnline
