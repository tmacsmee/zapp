import React from "react";
import "../../App.css";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <h2>zapp</h2>
      </div>
      <div className="nav-items">
        <Link to="/about" className="nav-item">
          about us
        </Link>
        <Link to="/teacher" className="nav-item">
          teacher portal
        </Link>
        <Link to="/main" className="nav-item">
          classes
        </Link>
        <Link to="/login" className="nav-item primary-btn">
          log in
        </Link>
      </div>
    </div>
  );
};

export default Nav;
