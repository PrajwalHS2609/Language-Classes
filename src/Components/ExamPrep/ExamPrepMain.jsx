import React from 'react'
import A1ExamPrep from './A1ExamPrep'
import A2ExamPrep from './A2ExamPrep'
import "./ExamPrep.css"
import B2ExamPrep from './B2ExamPrep'
import B1ExamPrep from './B1ExamPrep'
import C1ExamPrep from './C1ExamPrep'
import C2ExamPrep from './C2ExamPrep'

const ExamPrepMain = () => {
  return (
    <div className='examPrepMain'>
      <A1ExamPrep/>
      <A2ExamPrep/>
      <B1ExamPrep/>
      <B2ExamPrep/>
      <C1ExamPrep/>
      <C2ExamPrep/>
    </div>
  )
}

export default ExamPrepMain
