import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupImg } from "../../../assets";
import { FormControl, MenuItem, Select } from "@mui/material";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-signUpBg hidden lgss:flex lgss:w-1/2 flex-col justify-start items-start">
        <Link to={"/"} className="px-10 pt-4">
          <h1 className="text-4xl font-semibold text-primary font-itim">
            SchoolBase
          </h1>
        </Link>
        <div className=" flex justify-center items-center h-full px-8">
          <img src={signupImg} alt="SignUp" className="w-3/4" />
        </div>
      </div>
      <form className="w-full lgss:w-1/2 flex flex-col justify-center items-start px-8">
        <div className="py-4">
          <h1 className="text-[26px] font-extrabold cursor-pointer">
            Create your account
          </h1>
        </div>
        <div className="flex flex-col w-full space-y-3">
          <div className="flex flex-row w-[90%] space-x-8">
            <div className="flex flex-col w-1/2">
              <label htmlFor="surname" className="text-[18px] font-semibold">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Surname"
                className="py-2 shadow-lg shadow-gray-400/70 outline-none px-2"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="surname" className="text-[18px] font-semibold">
                First Name
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="First Name"
                className="py-2 outline-none shadow-lg shadow-gray-400/70 px-2"
              />
            </div>
          </div>
          <div className="flex flex-row w-[90%] space-x-8">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="middle name"
                className="text-[18px] font-semibold"
              >
                Middle Name
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Middle Name"
                className="py-2 shadow-lg shadow-gray-400/70 outline-none px-2"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="gender" className="text-[18px] font-semibold">
                Gender
              </label>
              <div className="">
                <FormControl
                  className="w-full bg-white text-[#97999C] shadow-lg shadow-gray-400/70"
                  size="small"
                >
                  <Select
                    label="gender"
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-[90%] space-x-8">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="residential address"
                className="text-[18px] font-semibold"
              >
                Residential Address
              </label>
              <input
                type="text"
                name="residential address"
                id="residence"
                placeholder="Residential Address"
                className="py-2 shadow-lg shadow-gray-400/70 outline-none px-2"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="Email Address"
                className="text-[18px] font-semibold"
              >
                Email Address
              </label>
              <input
                type="text"
                name="Email Address"
                id="email"
                placeholder="Email Address"
                className="py-2 outline-none shadow-lg shadow-gray-400/70 px-2"
              />
            </div>
          </div>
          <div className="flex flex-row w-[90%] space-x-8">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="residential address"
                className="text-[18px] font-semibold"
              >
                Password
              </label>
              <div className="  bg-white flex outline-none text-[16px] w-full justify-between items-center py-2 shadow-lg shadow-gray-400/70 px-2">
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
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="residential address"
                className="text-[18px] font-semibold"
              >
                Confirm Password
              </label>
              <div className="  bg-white flex outline-none text-[16px] w-full justify-between items-center py-2 shadow-lg shadow-gray-400/70 px-2">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
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
        <Link className="w-[90%]" to={"/teacher/dashboard"}>
          <button className="bg-primary w-full py-3 mt-8 text-white font-semibold text-[18px] rounded-[16px]">
            Sign Up
          </button>
        </Link>
        <p className="text-center w-full font-semibold mt-3">
          Already have an account?{" "}
          <Link
            to={"/get-started/teacher/signin"}
            className="text-red-300 underline px-2 font-medium"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
