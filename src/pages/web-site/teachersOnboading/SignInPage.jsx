import React from "react";
import { Link } from "react-router-dom";
import { signupImg } from "../../../assets";

const SignInPage = () => {
  return (
    <div className="">
      <div className="">
        <Link to={"/"}>
          <h1>SchoolBase</h1>
        </Link>
        <img src={signupImg} alt="" />
      </div>
      <form className="">
        <Link to={"/"}>
          <h1>Login to your account </h1>
        </Link>
        <div className="">
          <div className="">
            <div className="">
              <label htmlFor="email" className="">
                Email Address
              </label>
              <input
                type="password"
                name="password"
                id="passw0rd"
                placeholder="Pasword"
              />
            </div>
            <div className="">
              <label htmlFor="surname" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <Link to={"/teacher/dashboard"}>
            <button className="login-btn">Sign In</button>
          </Link>
          <p className="not-registered">
            No account yet?
            <Link to={"/get-started/teacher/signup"}>
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
