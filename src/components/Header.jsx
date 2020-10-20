import React from 'react'
import './Header.css'

const Header = ({ onClick }) => {

  return (
  <div className="header">
    <div className="name">CARL ORRE</div>
    <div className="header-links-container">
      <ul className="header-links-list">
        <li>
          <a class="nav-link" href="https://github.com/carlorre">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a class="nav-link" href="https://www.linkedin.com/in/carl-orre">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a class="nav-link" href="mailto:carl.orre@gmail.com">
            <i class="fas fa-envelope"></i>
          </a>
        </li>

        <li>
          <div onClick={onClick} class="nav-link">
            <i class="fas fa-moon"></i>
          </div>
        </li>

      
      </ul>
    </div>
  </div>
)}

export default Header
