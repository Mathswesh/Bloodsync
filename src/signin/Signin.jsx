import React, { useState } from 'react';
import '../assets/css/signindesign.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import img1 from '../signin/heartbeat.jpg'

export const Signin = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        
        <div class="signincontainer">
        <img src={img1} alt="" id="signinbg"/>
        <div className="signincontainerwrap">
        <div className="container vh-100 d-flex justify-content-center align-items-center text-center">
            <div className="col-lg-6 d-flex justify-content-center align-items-center rightsection">
                <div className="w-75 pt-5">
                    <h2 className="mb-4 text-center login-text pb-3">SignUp Here!</h2>

                    <div className="wave-group p-2">
                        <input required="" type="text" className="form-control" />
                        <label className="label">
                            {['U', 's', 'e', 'r', 'n', 'a', 'm', 'e'].map((char, index) => (
                                <span className="label-char" key={index} style={{ '--index': index }}>{char}</span>
                            ))}
                        </label>
                    </div>

                    <div className="wave-group p-2">
                        <input required="" type="email" className="form-control" />
                        <label className="label">
                            {['E', 'M', 'a', 'i', 'l'].map((char, index) => (
                                <span className="label-char" key={index} style={{ '--index': index }}>{char}</span>
                            ))}
                        </label>
                    </div>

                    <div className="wave-group p-2 position-relative">
                        <input
                            required=""
                            type={passwordVisible ? "text" : "password"}
                            className="form-control"
                            id="passwordField"
                        />
                        <label className="label">
                            {['P', 'a', 's', 's', 'w', 'o', 'r', 'd'].map((char, index) => (
                                <span className="label-char" key={index} style={{ '--index': index }}>{char}</span>
                            ))}
                        </label>
                        {/* <span className="toggle-password position-absolute" onClick={togglePasswordVisibility} style={{ right: '10px', top: '50%', cursor: 'pointer' }}>
                            <i className={fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}} id="toggle-icon"></i>
                        </span> */}
                    </div>

                    <div className="wave-group p-2 position-relative">
                        <input
                            required=""
                            type={confirmPasswordVisible ? "text" : "password"}
                            className="form-control"
                            id="passwordField1"
                        />
                        <label className="label">
                            {['C', 'o', 'n', 'f', 'i', 'r', 'm', ' ', 'P', 'a', 's', 's', 'w', 'o', 'r', 'd'].map((char, index) => (
                                <span className="label-char" key={index} style={{ '--index': index }}>{char}</span>
                            ))}
                        </label>
                        {/* <span className="toggle-password position-absolute" onClick={toggleConfirmPasswordVisibility} style={{ right: '10px', top: '50%', cursor: 'pointer' }}>
                            <i className={fas ${confirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}} id="toggle-icon1"></i>
                        </span> */}
                    </div>

                    <div className="form-check text-end">
                        <input type="checkbox" className="form-check-input" id="rememberMeCheck" />
                        <label className="form-check-label" htmlFor="rememberMeCheck">
                            Remember Me
                        </label>
                    </div>

                    <button className="btn btn-primary mt-3">SignUp</button>

                    <span className="signup d-block text-center fs-5 mt-3">
                        Already have an account?  <Link className="nav-link" to="/login">Login</Link>
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};