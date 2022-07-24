import React from "react";
import "../App.css";
import "./Leaderboard.css";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const Leaderboard = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="current-class">
          <span>▼ </span>
          Y4 Science
        </div>
        <div className="class-stats">87 rounds | 493 zaps</div>
      </div>
      <div className="podium">
        <div className="podium-winner">
          <div className="place">3rd</div>
          <div className="profile-icon">
            <img src={avatar1} alt="" />
          </div>
          <div className="podium-name">Yuwen H.</div>
          <div className="podium-pts">227pts</div>
        </div>
        <div className="podium-winner first-winner">
          <div className="place">1st</div>
          <div className="profile-icon">
            <img src={avatar2} alt="" />
          </div>
          <div className="podium-name ">Blake P.</div>
          <div className="podium-pts">227pts</div>
        </div>
        <div className="podium-winner">
          <div className="place">2nd</div>
          <div className="profile-icon">
            <img src={avatar3} alt="" />
          </div>
          <div className="podium-name">Stuart L.</div>
          <div className="podium-pts">227pts</div>
        </div>
      </div>
      <div className="leaderboard-section">
        <h2>Top 10 Leaderboard</h2>
        <div className="period-section">
          <div className="period">today</div>
          <div className="period">this week</div>
          <div className="period active">this semester</div>
          <div className="period">all time</div>
        </div>
        <div className="leaderboard">
          <div className="leaderboard-item">
            <div className="item-left">
              <div className="rank">1</div>
              <div className="name">Blake Peterson</div>
            </div>
            <div className="pts">518 pts</div>
          </div>
          <div className="leaderboard-item">
            <div className="item-left">
              <div className="rank">2</div>
              <div className="name">Yuwen Heon</div>
            </div>
            <div className="pts">492 pts</div>
          </div>
          <div className="leaderboard-item">
            <div className="item-left">
              <div className="rank">3</div>
              <div className="name">Stuart Littlest</div>
            </div>
            <div className="pts">488 pts</div>
          </div>
          <div className="leaderboard-item">
            <div className="item-left">
              <div className="rank">4</div>
              <div className="name">Juulia Young</div>
            </div>
            <div className="pts">459 pts</div>
          </div>
          <div className="leaderboard-item">
            <div className="item-left">
              <div className="rank">5</div>
              <div className="name">Bottle Dogg</div>
            </div>
            <div className="pts">420 pts</div>
          </div>
          <div className="leaderboard-item">
            <div className="item-left">
              <div className="rank">6</div>
              <div className="name">Harry Qu</div>
            </div>
            <div className="pts">411 pts</div>
          </div>
          <div className="leaderboard-item self">
            <div className="item-left">
              <div className="rank">7</div>
              <div className="name">Jimmy Student (You)</div>
            </div>
            <div className="pts">408 pts</div>
          </div>
          <div className="leaderboard-item">
            <div className="item-left">
              <div className="rank">8</div>
              <div className="name">Stacy Woo</div>
            </div>
            <div className="pts">513 pts</div>
          </div>
          <div className="leaderboard-item">
            <div className="item-left">
              <div className="rank">9</div>
              <div className="name">Nasser Giacaman</div>
            </div>
            <div className="pts">511 pts</div>
          </div>
          <div className="leaderboard-item">
            <div className="item-left">
              <div className="rank">10</div>
              <div className="name">Huy Nguyen</div>
            </div>
            <div className="pts">386 pts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
