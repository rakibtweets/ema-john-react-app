import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container container">
      <h3 className="text-center my-3 text-primary">
        Register : Create Account{' '}
      </h3>
      <form>
        <div className="w-50 mx-auto">
          <input
            className="form-control"
            type="email"
            placeholder="Your Email"
          />
          <br />
          <input
            className="form-control"
            type="password"
            placeholder="Your Password "
          />
          <br />
          <input
            className="form-control"
            type="password"
            placeholder="Re-enter Password "
          />
          <br />
          <button className="btn btn-primary" type="submit" value="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="text-center">
        <p>
          Already have an Account?
          <Link className="text-decoration-none ps-1" to="/login">
            Login
          </Link>
        </p>
        <button className="btn btn-primary">
          Sigin with <i className="fab fa-google"></i>
        </button>
      </div>
    </div>
  );
};

export default Register;
