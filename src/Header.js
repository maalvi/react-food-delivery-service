import React from 'react';
import logo from './media/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <nav className="header">
      {/* Logo */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>

      {/* 4 Links */}
      <div className="header__links">
        <Link to="/login" className="header__link">
          <span>Login</span>
        </Link>

        <Link to="/orders" className="header__link">
          <span>Orders</span>
        </Link>

        <Link to="/refer" className="header__link">
          <span>Refer a Buddy</span>
        </Link>
      </div>
      {/* Search Box */}
      <div className="header__search">
        <input
          type="text"
          className="header__searchBar"
          placeholder="Enter Restaurant Name..."
        />
        <FontAwesomeIcon
          className="header__searchIcon"
          icon={faSearch}
          size="2x"
        />
      </div>

      {/* Basket icon with number*/}
      <div className="header__bag">
        <Link to="/cart" className="header__bagLink">
          <FontAwesomeIcon
            className="header__bagIcon"
            icon={faShoppingBag}
            size="3x"
          />
          <span className="header__bagCounter">0</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
