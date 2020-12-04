import React from 'react'
import './Card.scss'

const Card = ({ image, text, active }) => {
  return (
    <div className={`card ${active && 'active'}`} style={{ backgroundImage: URL(image) }}>
      <h3>{text}</h3>
    </div>
  )
}

export default Card
