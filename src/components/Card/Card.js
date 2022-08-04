import React from 'react';
import './Card.css';
//https://www.youtube.com/watch?v=eGaaw1Py2aY&t=248s
const Card =  ({data, cardIndex}) => {
  return (
    <div>
      {data[cardIndex].map(item => (
        <div key="{item}" className="Card">
          <p>{item.title}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Card;
