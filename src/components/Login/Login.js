import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const { handleSignWithGoogle } = useAuth();
  return (
    <div className="login-user-container container">
      <h3 className="text-center text-primary my-3">Please Login</h3>
      <form>
        <div className="w-50 mx-auto">
          <input
            className="form-control"
            type="email"
            placeholder="Enter Email"
          />
          <br />
          <input
            className="form-control"
            type="password"
            placeholder="Enter Password "
          />
          <br />
          <button className="btn btn-primary" type="submit" value="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="text-center">
        <p>
          New to ema-john ?{' '}
          <Link className="text-decoration-none" to="/register">
            Create New Account
          </Link>
        </p>
        <button onClick={handleSignWithGoogle} className="btn btn-primary">
          Sigin with <i className="fab fa-google"></i>
        </button>
      </div>
    </div>
  );
};

export default Login;
