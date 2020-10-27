import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ currentTheme, onClick }) => {
  return (
    <div className="header">
      <div className="name">CARL ORRE</div>
      <div className="header-links-container">
        <ul className="header-links-list">
          <li>
            <a className="nav-link" href="https://github.com/carlorre">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a className="nav-link" href="https://www.linkedin.com/in/carl-orre">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a className="nav-link" href="mailto:carl.orre@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          {currentTheme === 'light' ? (
            <li>
              <div onClick={onClick} className="nav-link">
                <i className="fas fa-moon"></i>
              </div>
            </li>
          ) : (
            <li>
              <div onClick={onClick} className="nav-link">
                <i className="fas fa-sun"></i>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  currentTheme: PropTypes.string,
  onClick: PropTypes.func,
};
