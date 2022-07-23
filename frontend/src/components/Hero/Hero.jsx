import React from "react";
import smileyMascot from "../../assets/cloudy-smiley.png";
import "../../App.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="mascot">
        <img src={smileyMascot} alt="happy cloudy" />
      </div>
      <div className="text-content">
        <div className="tag-line">
          <h3>seamlessly mix learning and fun</h3>
        </div>
        <div className="value-list">
          <div className="value-item">
            ■  facilitate active listening and recall
          </div>
          <div className="value-item">■  combat cognitive fatigue</div>
          <div className="value-item">■  boost class participation</div>
        </div>
        <div className="cta">
          <div className="cta-btn">get started</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
