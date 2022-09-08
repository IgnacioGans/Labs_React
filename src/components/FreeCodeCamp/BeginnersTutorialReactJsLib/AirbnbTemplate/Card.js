import React from 'react'
import cardswimming from './card_swimming.png'
import cardstar from './card_star.png'
export default function Card() {
  return (
    <div className='card'>
        <img src={cardswimming} alt="Swiming Card" /> 
        <div className="card--stats">
            <img src={cardstar} alt="Star" className="card--star" />
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className="bold">From $136</span> / person</p>
    </div>
  )
}
