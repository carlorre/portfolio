import React from 'react';
import './TechIcons.css';

const TechIcons = (stack) => (
  <div className="tech-logo-container">
    <i style={{ color: stack.color }} className={stack.icon}></i>
    <img style={{ width: stack.size }} src={stack.logo} alt="" srcSet="" />
    <p className="tech-logo-text">{stack.name}</p>
  </div>
);

export default TechIcons;
