import React from 'react';
import './MenuReactRoute.css';
import {
  Routes,
  Route,
} from "react-router-dom";
//Routes Link
import Home from '../../routes/Home';
import About from '../../routes/About';
import App from '../../App';
import LabsComponentReact from '../../routes/LabsComponentReact';
import TemplateBootstrapRemking from '../TemplateBootstrapRemking/TemplateBootstrapRemking';

const MenuReactRoute = () => {
  return(
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/" element={<LabsComponentReact/>} ></Route>
        <Route path="/template-bootstrap" element={<TemplateBootstrapRemking/>} ></Route>
      </Route>
    </Routes>
  )
};
export default MenuReactRoute;
