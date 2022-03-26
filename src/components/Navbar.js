import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <div className="links">
        <Link to="/">BOOKS</Link>
        <Link to="/Categories">CATEGORIES</Link>
      </div>
    </nav>
  );
}

export default Navbar;
