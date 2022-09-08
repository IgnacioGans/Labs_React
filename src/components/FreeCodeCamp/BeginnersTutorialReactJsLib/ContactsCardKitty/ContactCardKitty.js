import React from 'react'

export default function ContactCardKitty(props) {
  return (
    <div className="contact-card">
        <img src={props.img} alt='contact cats'/>
        <h3>{props.name}</h3>
        <div className="info-group">
            <i className="fa-solid fa-phone"></i>
            <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
            <i className="fa-solid fa-envelope"></i>
            <p>mr.whiskaz@catnap.meow</p>
        </div>
    </div>
  )
}
