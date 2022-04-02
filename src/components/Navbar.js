import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';

function Navbar() {
  return (
    <nav>
      <div className="nav-wrap">
        <h1>Bookstore CMS</h1>
        <div className="links">
          <Link to="/">BOOKS</Link>
          <Link to="/Categories">CATEGORIES</Link>
        </div>
      </div>
      <MdAccountCircle className="profile" />
    </nav>
  );
}

export default Navbar;
