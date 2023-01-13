import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sublink.css'; 

const Sublink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sublink">
      <ul className="sublink-menu">
        <li className="sublink-item">
          <Link to="/" className="sublink-link">Home</Link>
        </li>
        <li className="sublink-item">
          <a onClick={handleToggle} className="sublink-link">Destinations</a>
          {isOpen && (
            <ul className="sublink-dropdown">
              <li className="sublink-item">
                <Link to="/destinations/asia" className="sublink-link">Asia</Link>
              </li>
              <li className="sublink-item">
                <Link to="/destinations/europe" className="sublink-link">Europe</Link>
              </li>
              <li className="sublink-item">
                <Link to="/destinations/north-america" className="sublink-link">North America</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="sublink-item">
          <Link to="/about" className="sublink-link">About</Link>
        </li>
        <li className="sublink-item">
          <Link to="/contact" className="sublink-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sublink;
