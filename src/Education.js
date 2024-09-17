import React from 'react';
import './Education.css'; // Import the CSS file

const Education = () => {
  return (
    <div className="experience-container">
      <div className="header">
        <span>3/3</span>
        <h2>Enter your educational details.</h2>
      </div>
      <hr className="Line"></hr>

      <div className="add-experience-card">
        <div className="add-button">
          <span>+</span>
        </div>
        <p className="Add">ADD EDUCATION</p>
      </div>

      <div className="footer">
        <button className="back-button">BACK</button>
        <div className="footer-right">
          <button className="skip-button">SKIP</button>
          <button className="next-button">NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default Education;
