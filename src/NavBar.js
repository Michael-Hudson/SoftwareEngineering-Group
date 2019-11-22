// src/components/NavBar.js

// standard react components
import React from 'react';
import { Link } from 'react-router-dom';

// css for the NavBar component
import './NavBar.css';

// this is the NavBar component
const NavBar = () => {
  return (
    <div className="NavBar">

      {
        <span>
          <code>CPSC 4430 App</code>
        </span>
      }
      {
        <span>
          <Link to="/">Home</Link>&nbsp;
        </span>
      }
    </div>
  );
};

export default NavBar;
