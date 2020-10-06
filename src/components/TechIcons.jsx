import React from 'react'
import './TechIcons.css'

const TechIcons = (stack) => (
  <div className="tech-logo-container">
    <img className="tech-logo" src={stack.url} alt={stack.name}/>
  </div>
)

export default TechIcons
