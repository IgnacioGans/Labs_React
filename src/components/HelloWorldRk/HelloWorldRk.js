import React from 'react';
import './HelloWorldRk.css';

function HelloWorldRk() {

  function sayHello() {
    const elem = document.getElementById('HelloWorld');
    const text = document.createTextNode("Hello World");
    elem.appendChild(text);
  }
  
  return (
    <button onClick={sayHello}>
      Click me!
    </button>
  );
}

export default HelloWorldRk;
