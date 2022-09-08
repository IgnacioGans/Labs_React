import React from 'react'
import AirbnbHtml from '../components/FreeCodeCamp/BeginnersTutorialReactJsLib/AirbnbTemplate/AirbnbHtml';
import BeginnersTutorialReactJsLib from '../components/FreeCodeCamp/BeginnersTutorialReactJsLib/BeginnersTutorialReactJsLib'
import ContactsCardKitty from '../components/FreeCodeCamp/BeginnersTutorialReactJsLib/ContactsCardKitty/ContactsCardKitty';
import JokeHomeStatic from '../components/FreeCodeCamp/BeginnersTutorialReactJsLib/Joke/JokeHomeStatic';

export default function LabsFreeCodeCamp() {
  let addComponent
  const urlDefault = window.location.pathname;
    // if (urlDefault === "/freecodecamp/beginner-react") {
    //   addComponent = <BeginnersTutorialReactJsLib/>
    // } else if (urlDefault === "/freecodecamp/beginner-react/airbnb") {
    //   addComponent = <AirbnbHtml/>
    // } else if (urlDefault === "/freecodecamp/beginner-react/airbnb"){
    //   addComponent = <ContactsCardKitty/>
    // }
    switch (urlDefault) {
      case "/freecodecamp/beginner-react":
        addComponent = <BeginnersTutorialReactJsLib/>
        break;
      case "/freecodecamp/beginner-react/airbnb":
        addComponent = <AirbnbHtml/>
        break;
      case "/freecodecamp/beginner-react/contacts-cat":
        addComponent = <ContactsCardKitty/>
        break;  
      case "/freecodecamp/beginner-react/joke":
        addComponent = <JokeHomeStatic/>
        break;  
      default:
        break;
    }   
  return (
    <div>
      { urlDefault && addComponent }
    </div>
  )
}
