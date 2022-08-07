import React, { useState } from 'react';
import './FunctionRk.css';


function FunctionRk() {
  const names = ["Chetha", "Rotha", "Kimly"];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnChangeNameClick = () => {
    let index = activeIndex;
    // console.log(names)
    // console.log(names.length)
    // console.log(index)
    // console.log(index === names.length - 1)
    if (index === names.length - 1) index = 0;
    else index++;
    setActiveIndex(index);
  };
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div>
        <h1>{names[activeIndex]}</h1>
        <button onClick={handleOnChangeNameClick}>Change name</button>
      </div>
    </div>
  );
}
export default FunctionRk;
