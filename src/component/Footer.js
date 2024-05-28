import React from 'react';

export default function Footer() {
  return (
    <footer className="" style={{ backgroundColor: '#FF797B' }}>
      <div className="container py-4">
        <div className="row" style={{ backgroundColor: '#FF797B', color: 'white' }}>
          <div className="col-md-6 text-start">
            <h4>CharList</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-md-3 text-start">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light" style={{textDecoration: 'none'}}>
                  Home
                </a>
              </li>
              <li>
                <a href="#character-list" className="text-light" style={{textDecoration: 'none'}}>
                Characters List
                </a>
              </li>
              <li>
                <a href="#characters-by-location" className="text-light" style={{textDecoration: 'none'}}>
                Character By Location
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-start">
            <h4>Address</h4>
            <p>Aryasatya Okta Street, Number 99, Indonesia</p>
            <p className="w-75">
              <b>Phone: </b>+62 1234 567 89 <br/>
              <b>Email: </b> charlist@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
