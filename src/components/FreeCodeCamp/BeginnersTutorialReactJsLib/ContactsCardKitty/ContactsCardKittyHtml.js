import React from 'react'
import "./ContactsCardKitty.css"
import imgCat1 from "./cat_1.png"
import imgCat2 from "./cat_2.png"
import imgCat3 from "./cat_3.png"
import imgCat4 from "./cat_4.png"
export default function ContactsCardKittyHtml() {
  return (
    <div className="contacts pt-5">
        <div className="contact-card">
            <img src={imgCat1} alt='contact cats'/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <i className="fa-solid fa-phone"></i>
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <i className="fa-solid fa-envelope"></i>
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
        <div className="contact-card">
            <img src={imgCat2} alt='contact cats'/>
            <h3>Fluffykins</h3>
            <div className="info-group">
                <i className="fa-solid fa-phone"></i>
                <p>(212) 555-2345</p>
            </div>
            <div className="info-group">
                <i className="fa-solid fa-envelope"></i>
                <p>fluff@me.com</p>
            </div>
        </div>
        <div className="contact-card">
            <img src={imgCat3} alt='contact cats'/>
            <h3>Felix</h3>
            <div className="info-group">
            <i className="fa-brands fa-bootstrap"></i>
                <p>(212) 555-4567</p>
            </div>
            <div className="info-group">
                <i className="fa-solid fa-envelope"></i>
                <p>thecat@hotmail.com</p>
            </div>
        </div>
        
        <div className="contact-card">
            <img src={imgCat4} alt='contact cats'/>
            <h3>Pumpkin</h3>
            <div className="info-group">
                <i className="fa-solid fa-phone"></i>
                <p>(0800) CAT KING</p>
            </div>
            <div className="info-group">
                <i className="fa-solid fa-envelope"></i>
                <p>pumpkin@scrimba.com</p>
            </div>
        </div>
        
    </div>
  )
}
