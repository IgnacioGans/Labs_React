import React from "react";
import PlanetEarthThreeJS from "../components/PlanetThreeJS/PlanetEarthThreeJS";
// import ButtonAndListSampleReact from "../components/ButtonAndListSampleReact/ButtonAndListSampleReact";
// import ToDoListComponent from "../components/ToDoList/ToDoListComponent";

const LabsComponentReact = () => (
  <div className="LabsComponentReact">
    <h1>Labs React</h1>
    <ul>
      <li><p>Tratar de hacer ejercicios con Maps y con Hook como UseEffect</p></li>
      <li><p>Hacer ejercicios con APi</p></li>
    </ul>
    {/* <ToDoListComponent/> */}
    <PlanetEarthThreeJS/>
   </div>
);

export default LabsComponentReact;