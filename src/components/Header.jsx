import React from 'react'
import './Header.css'

const Header = () => (
  <div className="header">
    <div className="name">CARL ORRE</div>
    <div>
      <ul className="header-links">
        <li>
          <a class="nav-link" href="https://github.com/carlorre">
            <i class="header-link-icon fab fa-github"></i>
            Github
          </a>
        </li>
        <li>
          <a class="nav-link" href="https://www.linkedin.com/in/carl-orre">
            <i class="header-link-icon fab fa-linkedin"></i>
            Linkedin
            </a>
        </li>
        <li>
          <a class="nav-link" href="mailto:carl.orre@gmail.com">
          <i class="header-link-icon fas fa-envelope"></i>
            Email
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
