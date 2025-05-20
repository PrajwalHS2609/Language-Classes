import React from 'react'
import { Outlet } from 'react-router-dom'
import "./CourseDetails.css"
const CourseDetailsDisplay = () => {
  return (
    <div className='courseDetailsDisplay'>
      <Outlet/>
    </div>
  )
}

export default CourseDetailsDisplay
