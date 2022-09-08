import React from 'react'
import "./ContactsCardKitty.css"
import imgCat1 from "./cat_1.png"
import imgCat2 from "./cat_2.png"
import imgCat3 from "./cat_3.png"
import imgCat4 from "./cat_4.png"
import ContactCardKitty from './ContactCardKitty'
export default function ContactsCardKitty() {
  return (
     <div className="contacts">
            <ContactCardKitty 
                img={imgCat1} 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <ContactCardKitty 
                img={imgCat2}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <ContactCardKitty 
                img={imgCat3}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <ContactCardKitty 
                img={imgCat4}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
  )
}
