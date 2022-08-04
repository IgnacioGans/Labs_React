import React,  { useState } from 'react';
import './ButtonAndListSampleReact.css';
import ButtonComponent from './ButtonComponent';
import ListComponent from './ListComponent';
//https://upmostly.com/tutorials/calling-a-react-component-on-button-click

/*
                                                                           
                                                                           
           .---.                                                           
          /. ./|                              ,--,                         
      .--'.  ' ;           __  ,-.     ,---,,--.'|        ,---,            
     /__./ \ : |         ,' ,'/ /| ,-+-. /  |  |,     ,-+-. /  | ,----._,. 
 .--'.  '   \' . ,--.--. '  | |' |,--.'|'   `--'_    ,--.'|'   |/   /  ' / 
/___/ \ |    ' '/       \|  |   ,|   |  ,"' ,' ,'|  |   |  ,"' |   :     | 
;   \  \;      .--.  .-. '  :  / |   | /  | '  | |  |   | /  | |   | .\  . 
 \   ;  `      |\__\/: . |  | '  |   | |  | |  | :  |   | |  | .   ; ';  | 
  .   \    .\  ;," .--.; ;  : |  |   | |  |/'  : |__|   | |  |/'   .   . | 
   \   \   ' \ /  /  ,.  |  , ;  |   | |--' |  | '.'|   | |--'  `---`-'| | 
    :   '  |--;  :   .'   ---'   |   |/     ;  :    |   |/      .'__/\_: | 
     \   \ ;  |  ,     .-./      '---'      |  ,   /'---'       |   :    : 
      '---"    `--`---'                      ---`-'              \   \  /  
                                                                  `--`-'   
  Error con Map, posiblemente usar UseEffect o algun Hook que permite 
  añadir la reiteración del map como objectos unico.

  Mensaje de Error: Fix - Encountered two children with the same key (React)
  Posible solución: https://bobbyhadz.com/blog/react-encountered-two-children-with-the-same-key

  No es el mismo ejercicio... se debe practicar mas creando componentes con map y usando hook.


*/


const ButtonAndListSampleReact = (props) => { 
  const planets = [
    {id: 1, name: 'Mercury'},
    {id: 2, name: 'Venus'},
    {id: 3, name: 'Earth'},
    {id: 4, name: 'Mars'},
    {id: 5, name: 'Jupiter'},
    {id: 6, name: 'Saturn'},
    {id: 7, name: 'Uranus'},
    {id: 8, name: 'Neptune'},
  ];
  const [components, setComponents] = useState([]); 
  const [componentNames] = useState(planets); 
  

  function addComponent() { 
    if (componentNames.length > 0) { 
      setComponents([...components, componentNames[0]]);
      console.log(componentNames[0])
      componentNames.splice(0, 1);
    } else { 
      window.alert("No more planets to add!");
    } 
  } 
  return ( 
    <div> 
      <ButtonComponent onClick={addComponent} text="Call Component"/> 
      {components.map((item, i) => {
        return (
          <ListComponent key="{item.id}" text={item.name} idPlanet={item.id} />
        )} 
      )} 
    </div> 
  ); 
} 
export default ButtonAndListSampleReact;