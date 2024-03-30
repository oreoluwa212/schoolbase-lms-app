import React from "react";
import '../../styles/landing.css'
import { schoolbaseLogo, callIcon } from "../../assets";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" hidden md:flex  justify-between items-center py-6  mx-[43px] ">
      <div className="flex items-center">
        <img src={schoolbaseLogo} alt="logo" />
        <h1 className="ml-2 text-2xl font-extrabold text-secondary">
          SCHOOL <span className="text-primary">BASE</span>
        </h1>
      </div>

      <ul className="flex justify-between w-2/5">
        <li className="text-primary">Home</li>
        <li>Why us</li>
        <li>About us</li>
        <li>Testimonials</li>
        <li>Contact us</li>
      </ul>
      <div className="flex  ">
        <a href="/" className="rounded-full shadow-lg shadow-purple-300/50 p-2 flex justify-center items-center bg-white ">
          <img src={callIcon} alt="phone Icon" />
        </a>
        <Link to={"/get-started"}>
          <button className=" rounded-xl bg-blue-500 px-7 text-white mx-2 py-3">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
