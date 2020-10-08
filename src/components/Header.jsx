import React from 'react'
import './Header.css'

const Header = () => (
  <div className="header">
    <div className="name">CARL ORRE</div>
    <div className="header-links-container">
      <ul className="header-links-list">
        <li>
          <a class="nav-link" href="https://github.com/carlorre">
            <i class="header-link-icon fab fa-github"></i>
            <span className="header-link-text">Github</span>
          </a>
        </li>
        <li>
          <a class="nav-link" href="https://www.linkedin.com/in/carl-orre">
            <i class="header-link-icon fab fa-linkedin"></i>
            <span className="header-link-text">Linkedin</span>
            </a>
        </li>
        <li>
          <a class="nav-link" href="mailto:carl.orre@gmail.com">
          <i class="header-link-icon fas fa-envelope"></i>
          <span className="header-link-text">Email</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
