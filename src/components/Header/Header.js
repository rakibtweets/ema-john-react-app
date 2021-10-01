import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Brand-logo" />
      <nav className="nav-items d-flex justify-content-center bg-dark p-2  ">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/review">
          Order Reviews
        </Link>
        <Link className="nav-link" to="/inventory">
          Manage Inventory
        </Link>
      </nav>
    </div>
  );
};

export default Header;
