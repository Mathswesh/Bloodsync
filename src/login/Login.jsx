import React, { useState } from 'react';
import '../assets/css/logindesign.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle the password field visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <h1>Login Page</h1>
      
      <div className="container vh-100 d-flex justify-content-center align-items-center text-center">
        <div className="col-lg-6 d-flex justify-content-center align-items-center rightsection">
          <div className="w-75 pt-5">
            <h2 className="mb-4 text-center login-text pb-3">Login</h2>
            
            <div className="wave-group p-2">
              <input required="" type="text" className="input" />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char" style={{ '--index': 0 }}>E</span>
                <span className="label-char" style={{ '--index': 1 }}>M</span>
                <span className="label-char" style={{ '--index': 2 }}>a</span>
                <span className="label-char" style={{ '--index': 3 }}>i</span>
                <span className="label-char" style={{ '--index': 4 }}>l</span>
              </label>
            </div>

            <div className="wave-group p-2">
              <input
                required=""
                id="passwordField"
                type={passwordVisible ? 'text' : 'password'}
                className="input"
              />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char" style={{ '--index': 0 }}>P</span>
                <span className="label-char" style={{ '--index': 1 }}>a</span>
                <span className="label-char" style={{ '--index': 2 }}>s</span>
                <span className="label-char" style={{ '--index': 3 }}>s</span>
                <span className="label-char" style={{ '--index': 4 }}>w</span>
                <span className="label-char" style={{ '--index': 5 }}>o</span>
                <span className="label-char" style={{ '--index': 6 }}>r</span>
                <span className="label-char" style={{ '--index': 7 }}>d</span>
              </label>
              {/* <span className="toggle-password" onClick={togglePasswordVisibility}>
                <i className={fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}} id="toggle-icon"></i>
              </span> */}
            </div>

            <span className="forgotpass align-left">Forgot password?</span>
            <button className="btn btn-primary mt-3">Login</button>

            <span className="signup d-block text-center fs-5 mt-3">
              Don't have an account? <Link className="nav-link" to="/signin">SignIn</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};