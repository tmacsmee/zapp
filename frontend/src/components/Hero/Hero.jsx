import React from "react";
import { Link } from "react-router-dom";
import smileyMascot from "../../assets/cloudy-smiley.png";
import "../../App.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="mascot animate__animated animate__bounceInLeft">
        <img src={smileyMascot} alt="happy cloudy" />
      </div>
      <div className="text-content break-normal animate__animated animate__bounceInRight">
        <div className="tag-line">
          <h3>seamlessly mix learning and fun&nbsp;&nbsp;</h3>
          <div className="-mt-7 p-3 bg-[color:#e8e8e8] w-[80%]"></div>
        </div>
        <div className="value-list">
          <div className="value-item">
            ■ facilitate active listening and recall
          </div>
          <div className="value-item">■ combat cognitive fatigue</div>
          <div className="value-item">■ boost class participation</div>
        </div>
        <div className="cta">
          <Link to="/main" className="cta-btn">
            get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
