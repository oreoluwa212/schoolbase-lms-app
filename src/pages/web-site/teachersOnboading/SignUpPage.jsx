import React from "react";
import '../../../styles/signup-teachers.css'
import { Link } from "react-router-dom";
import { signupImg } from "../../../assets";

const SignUpPage = () => {
  return (
    <div className="signin-container">
      <div className="signin-left-container">
        <Link to={"/"}>
          <h1>SchoolBase</h1>
        </Link>
        <img src={signupImg} alt="" />
      </div>
      <form className="signin-right-container">
        <Link to={"/"}>
          <h1>Create your account</h1>
        </Link>
        <div className="form">
          <div className="signin-form-row">
            <div className="signin-form">
              <label htmlFor="surname" className="label">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Surname"
              />
            </div>
            <div className="signin-form">
              <label htmlFor="surname" className="label">
                First Name
              </label>
              <input
                type="text"
                name="First Name"
                id="fname"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="signin-form-row">
            <div className="signin-form">
              <label htmlFor="middle name" className="label">
                Middle Name
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Middle Name"
              />
            </div>
            <div className="signin-form">
              <label htmlFor="surname" className="label">
                Gender
              </label>
              <input
                type="text"
                name="gender"
                id="gender"
                placeholder="Gender"
              />
            </div>
          </div>
          <div className="signin-form-row">
            <div className="signin-form">
              <label htmlFor="Residential address" className="label">
                Residential Address
              </label>
              <input
                type="text"
                name="Residential Address"
                id="residentialAddress"
                placeholder="Residential Address"
              />
            </div>
            <div className="signin-form">
              <label htmlFor="email address" className="label">
                Email Address
              </label>
              <input
                type="text"
                name="email address"
                id="emailAddress"
                placeholder="Email Address "
              />
            </div>
          </div>
          <div className="signin-form-row">
            <div className="signin-form">
              <label htmlFor="class" className="label">
                Class
              </label>
              <input type="text" name="class" id="class" placeholder="Class" />
            </div>
            <div className="signin-form">
              <label htmlFor="Phone Number" className="label">
                Phone Number
              </label>
              <input
                type="text"
                name="Phone Number"
                id="phoneNumber"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="signin-form-row">
            <div className="signin-form">
              <label htmlFor="newPassword" className="label">
                New Password
              </label>
              <input
                type="text"
                name="newPassword"
                id="newPassword"
                placeholder="New Password"
              />
            </div>
            <div className="signin-form">
              <label htmlFor="confirm password" className="label">
                Confirm Password
              </label>
              <input
                type="text"
                name="confirm password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </div>
        <Link to={"/teacher/dashboard"}>
        <button className="signup-btn">Sign Up</button>
        </Link>
        <p className="not-registered">
          Already have an account?{" "}
          <Link to={"/get-started/teacher/signin"}>
            <span>Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
