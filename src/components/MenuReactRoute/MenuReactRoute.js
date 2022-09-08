import React from 'react';
import './MenuReactRoute.css';
import {
  Routes,
  Route,
} from "react-router-dom";
//Routes Link
import Home from '../../routes/Home';
import About from '../../routes/About';
import RoulettePage from '../../routes/RoulettePage';
import App from '../../App';
import LabsComponentReact from '../../routes/LabsComponentReact';
import LabsBootstrapRemking from '../../routes/LabsBootstrapRemking';
import LabsFreeCodeCamp from '../../routes/LabsFreeCodeCamp';
import LabsTailwindRemking from '../../routes/LabsTailwindRemking';

const MenuReactRoute = () => {
  return(
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/" element={<LabsComponentReact/>} ></Route>
        <Route path="/labs-react" element={<LabsComponentReact/>} ></Route>
        <Route path="/template-bootstrap" element={<LabsBootstrapRemking/>} ></Route>
        <Route path="/template-tailwind" element={<LabsTailwindRemking/>} ></Route>
        <Route path="/freecodecamp/beginner-react" element={<LabsFreeCodeCamp/>} ></Route>
        <Route path="/freecodecamp/beginner-react/contacts-cat" element={<LabsFreeCodeCamp/>} ></Route>
        <Route path="/freecodecamp/beginner-react/joke" element={<LabsFreeCodeCamp/>} ></Route>
        <Route path="/freecodecamp/beginner-react/airbnb" element={<LabsFreeCodeCamp/>} ></Route>
        <Route path="/roulettepage" element={<RoulettePage/>} ></Route>
      </Route>
    </Routes>
  )
};
export default MenuReactRoute;
