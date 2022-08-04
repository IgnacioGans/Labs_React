import React from 'react';

const ButtonClickSample = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log('The button was clicked.');
      }
    return (
        <div className="ButtonClickSample">
            <h1>Button Click Sample (Console.log)</h1>
            <button onClick={handleClick}>
                Click me
            </button>
            <hr />
        </div>
    )
};

export default ButtonClickSample;
