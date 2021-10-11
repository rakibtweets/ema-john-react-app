import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  // const { user, handleSignOut } = useFirebase();
  const { user, handleSignOut } = useAuth();
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
        {!user.email ? (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        ) : (
          <div>
            <img
              className="w-25 p-1 rounded-circle me-1"
              src={user.photoURL}
              alt=""
            />
            <button onClick={handleSignOut} className="btn btn-warning">
              SignOut
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
