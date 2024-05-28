import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isNavOpen, toggleNav }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: '#FF797B', fontWeight: 'bold', fontSize: '40px' }}>CHARLIST</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav} aria-expanded={isNavOpen ? "true" : "false"} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav" style={{ gap: '10px', fontSize: '23px' }}>
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#character-list">Characters List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#characters-by-location">Character By Location</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
