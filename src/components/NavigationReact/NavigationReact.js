import { NavLink } from "react-router-dom";
import React from "react";
import "./NavigationReact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const NavigationReact = () => (
  <div className="NavigationReact">
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="!#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive? "nav-link active": "nav-link"} to="/" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive? "nav-link active": "nav-link"} to="/about" aria-current="page">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive? "nav-link active": "nav-link"} to="/labs-react" aria-current="page">Lab React</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Template
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={({ isActive }) => isActive? "nav-link active": "nav-link"} to="/template-bootstrap" aria-current="page">Bootstrap</NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive? "nav-link active": "nav-link"} to="/template-tailwind" aria-current="page">Tailwind</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Course
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={({ isActive }) => isActive? "nav-link active": "nav-link"} to="/freecodecamp/beginner-react" aria-current="page">Beginner React</NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive? "nav-link active": "nav-link"} to="/freecodecamp/beginner-react/contacts-cat" aria-current="page">Contacts Cat</NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive? "nav-link active": "nav-link"} to="/freecodecamp/beginner-react/joke" aria-current="page">Joke</NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive? "nav-link active": "nav-link"} to="/freecodecamp/beginner-react/airbnb" aria-current="page">Airbnb React</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Test Roulette
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={({ isActive }) => isActive? "nav-link active": "nav-link"} to="/roulettepage" aria-current="page">Roulette Basic</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default NavigationReact;
