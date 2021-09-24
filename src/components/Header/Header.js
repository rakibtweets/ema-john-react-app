import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Brand-logo" />
      <nav className="nav-items d-flex justify-content-center bg-dark p-2  ">
        <a className="nav-link" href="/shop">
          Shop
        </a>
        <a className="nav-link" href="/oders">
          Order Reviews
        </a>
        <a className="nav-link" href="/inventory">
          Manage Inventory
        </a>
      </nav>
    </div>
  );
};

export default Header;
