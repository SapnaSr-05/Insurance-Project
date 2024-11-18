import React from 'react';
import './Mission.css'; // Make sure to import your CSS file

function Mission() {
  return (
    <div className="mission-container">
       <div className="mission-image">
        <img src="./Img/o1.jpg" alt="" />
      </div>
      <div className="mission-content">
        <h2 className="mission-title"><span style={{ color: '#5da8f8' }}>Our Mission </span> is to Make Your Business Better Through Technology.</h2>
        <p className="mission-paragraph">
          
        </p>
        <div className="skill-bars">
          <div className="skill-bar">
            <div className="skill-name">Web Development</div>
            <div className="skill-bar-wrapper">
              <div className="skill-progress" style={{ width: '80%' }}></div>
              <span className="skill-value">80%</span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-name">IOS Apps</div>
            <div className="skill-bar-wrapper">
              <div className="skill-progress" style={{ width: '75%' }}></div>
              <span className="skill-value">75%</span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-name">Discovery & Strategy</div>
            <div className="skill-bar-wrapper">
              <div className="skill-progress" style={{ width: '70%' }}></div>
              <span className="skill-value">70%</span>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Mission;
