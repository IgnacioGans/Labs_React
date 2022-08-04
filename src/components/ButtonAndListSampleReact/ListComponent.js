import React from 'react'; 
import './ButtonAndListSampleReact.css';

const ListComponent = (props, props2) => { 
  console.log(props, props2)
  return ( 
    <div> 
      <h1>{props.text}</h1> 
    </div> 
  ); 
}; 
// const objListComponent = {
//   ListComponent
// };
export default ListComponent;
