import React from 'react'
import './TechIcons.css'

const TechIcons = (stack) => (
  <div className="tech-logo-container">
    <i style={{color: stack.color}} className={stack.icon}></i>
    <p className="tech-logo-text">{stack.name}</p>
  </div>
)

export default TechIcons
