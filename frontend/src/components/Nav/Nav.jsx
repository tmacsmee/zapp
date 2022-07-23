import React from 'react'
import '../../App.css';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className="logo">
            <h2>zapp</h2>
        </div>
        <div className="nav-items">
            <div className="nav-item">
                about us
            </div>
            <div className="nav-item">
                teacher portal
            </div>
            <div className="nav-item">
                classes
            </div>
            <div className="nav-item primary-btn">
                log in
            </div>
        </div>
    </div>
  )
}

export default Nav