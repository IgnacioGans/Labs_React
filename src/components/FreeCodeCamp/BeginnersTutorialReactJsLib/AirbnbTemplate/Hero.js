import React from 'react'
import gridPhotoImg from './grid--photo.png'
export default function Hero() {
  return (
    <section className="hero">
        <img src={gridPhotoImg} alt="gridAirbnb"  className="hero--photo"  /> 
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
