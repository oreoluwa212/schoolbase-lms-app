import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginImg } from "../../../assets";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignInPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-signUpBg h-screen hidden lgss:flex lgss:w-1/2 flex-col justify-start items-start">
        <Link to={"/"} className="px-5 py-3">
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary font-itim">
            SchoolBase
          </h1>
        </Link>
        <div className="flex justify-center h-full">
          <img
            src={loginImg}
            alt="Login"
            className="max-w-[65%]"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <form className="w-full lgss:w-1/2 flex flex-col justify-start mt-[5%] items-start px-8">
        <div className="py-4">
          <h1 className="text-[26px] font-extrabold cursor-pointer">
            Login to your account
          </h1>
        </div>
        <div className="w-[80%] space-y-4">
          <div className="flex flex-col w-full space-y-3">
            <div className="flex flex-col w-full space-y-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-md font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="py-2 shadow-lg text-sm shadow-gray-400/70 outline-none px-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="residential address"
                  className="text-md font-semibold"
                >
                  Password
                </label>
                <div className="  bg-white flex outline-none text-sm w-full justify-between items-center py-2 shadow-lg shadow-gray-400/70 px-2">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    className="outline-none w-full"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  {isPasswordVisible ? (
                    <IoMdEye
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer text-xl relative"
                    />
                  ) : (
                    <IoMdEyeOff
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer text-xl relative "
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full">
            <Link className="" to={"/teacher/dashboard"}>
              <button className="bg-primary w-full py-3 mt-8 text-white font-semibold text-md rounded-[4px]">
                Log In
              </button>
            </Link>
            <p className="text-center w-full text-sm font-semibold mt-3">
              Not registered yet?
              <Link
                to={"/get-started/teacher/signup"}
                className="text-red-300 underline px-2 font-medium"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
