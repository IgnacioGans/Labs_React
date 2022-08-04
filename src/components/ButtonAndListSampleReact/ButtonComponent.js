import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = (props) => { 
  return ( 
    <div className="ButtonComponent">
      <button className="AddButton" onClick={props.onClick}>{props.text}</button> 
    </div>
  ); 
} 
// 👇️ assign to variable
// const objButtonComponent = {
//   ButtonComponent
// };
export default ButtonComponent;