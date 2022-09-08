import React from 'react'
import logoAirbnb from './airbnb_logo.png'

export default function Navbar() {
  return (
    <nav>
        <img src={logoAirbnb}  alt='airbnb' className="nav--icon" />
    </nav>
  )
}
