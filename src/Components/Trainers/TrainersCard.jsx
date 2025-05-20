import React from 'react'
import "./Trainers.css"
const TrainersCard = (props) => {
  return (
    <div className='trainersCardContainer'>
      <ul>
        <h3>{props.head}</h3>
        <li>{props.list}</li>
      </ul>
    </div>
  )
}

export default TrainersCard
