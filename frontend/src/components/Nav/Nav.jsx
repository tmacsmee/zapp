import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to="/" className="logo">
        <h2>zapp</h2>
      </Link>
      <div className="nav-items">
        <Link to="/about" className="nav-item">
          about us
        </Link>
        <Link to="/teacher" className="nav-item">
          teacher portal
        </Link>
        
        <Link to="/leaderboard" className="nav-item">
          leaderboard
        </Link>
        
        
        <div className="button-container">
          <Link to="/login" className="primary-btn">
            log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
