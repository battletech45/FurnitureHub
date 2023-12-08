import React from 'react';
import './navbarStyle.css';
import { Link } from 'react-router-dom';
import { IoMdPerson, IoMdSearch, IoMdHeartEmpty, IoMdCart } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar__left">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="navbar__right">
        <Link to={`/profile`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <IoMdPerson />
        </Link>  
          <IoMdSearch />
          <IoMdHeartEmpty />
          <IoMdCart />
        </div>
    </nav>
  );
};

export default Navbar;
