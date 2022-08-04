import React, {useEffect} from 'react';
import ButtonClickSample from './buttonClickSample';
import './PracticeReact.css';

function Greet({ name }) {
  const message = `Hello, ${name}!`;   // Calculates output
  useEffect(() => {
    // Good!
    document.title = `Greetings to ${name}`; // Side-effect!
  }, [name]);
  return <div>{message}</div>;         // Calculates output
}
const PracticeReact = () => (
  <div className="PracticeReact">
    <hr />
      <Greet name={"Nacho"} /> 
    <hr />
    <ButtonClickSample/>
  </div>
);

export default PracticeReact;
