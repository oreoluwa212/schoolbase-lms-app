import React, { useState } from "react";
import {
  Call,
  Ellipse,
  Man,
  cycle,
  email,
  peopleHero,
  schoolbaseLogo,
  smilingGirl,
  smilingboy,
  unionImg,
} from "../../../assets";
import { Link } from "react-router-dom";
import "../../../styles/landing.css";
import { FaBars, FaTimes } from "react-icons/fa";

const WelcomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="overflow-hidden">
        {/* Nav Area */}
        <div className="lgss:flex lgss:flex-row hidden justify-between items-center px-[80px] relative top-20 -mt-20 ">
          <div className="flex justify-center items-center">
            <img src={schoolbaseLogo} alt="" />
            <p className="font-manrope sans px-2 font-extrabold text-[28px]">
              SCHOOL<span className=" text-[#3D5EE1]">BASE</span>
            </p>
          </div>
          {/* ++++++++ */}
          <ul className="lgss:flex gap-5 justify-between w-[45%] font-semibold text-[20px]">
            <li className="text-[#3D5EE1]">Home</li>
            <li>Why us</li>
            <li>About us</li>
            <li>Testimonials</li>
            <li>Contact us</li>
          </ul>
          <div className="flex justify-between items-center gap-10 w-[20%]">
            <div className="bg-white h-14 w-14 rounded-full p-3 flex justify-center items-center">
              <img src={Call} alt="" className="relative w-8 h-8" />
            </div>
            <Link to={"/get-started"}>
              <button className="bg-[#007BFF] rounded-xl py-[16px] w-[120px] px-2  shadow-xl text-white">
                Get Started
              </button>
            </Link>
          </div>
          {/* ++++++++ */}
        </div>
        <div className="flex w-full justify-between items-center py-5 px-[5%] lgss:hidden">
          <div className="flex justify-center items-center">
            <img src={schoolbaseLogo} alt="" />
            <p className="font-manrope sans px-2 font-extrabold text-[28px]">
              SCHOOL<span className=" text-[#3D5EE1]">BASE</span>
            </p>
          </div>
          {isOpen ? (
            <FaTimes
              onClick={() => setIsOpen(false)}
              className=" cursor-pointer text-primary text-[28px]"
            />
          ) : (
            <FaBars
              onClick={() => setIsOpen(true)}
              className=" cursor-pointer text-primary text-[28px]"
            />
          )}
        </div>

        {isOpen && (
          <div
            className={`absolute  top-0 left-0 h-screen bg-primary w-3/4 text-white font-bold lgss:hidden flex flex-col pt-16 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0 " : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-center items-center z-100">
              <ul className="flex flex-col gap-8 pb-8 justify-center font-normal text-[20px]">
                <li className=" bg-neutral bg-opacity-60">Home</li>
                <li>Why us</li>
                <li>About us</li>
                <li>Testimonials</li>
                <li>Contact us</li>
              </ul>
              <div className="flex flex-col justify-center items-center gap-10">
                <div className="bg-white h-14 w-14 rounded-full p-3 flex justify-center items-center">
                  <img src={Call} alt="" className="relative w-8 h-8" />
                </div>
                <Link to={"/get-started"}>
                  <button className="bg-white rounded-xl py-[16px] w-[120px] px-2  shadow-xl text-primary">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section  */}
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col lgss:flex-row union mx-auto bg-no-repeat bg-cover pt-20">
            <div className="lgss:w-[50%] flex flex-col gap-8 px-[5%] pt-12 w-[90%]">
              <p className="font-bold text-[56px] pt-8 leading-[3.2rem]">
                Welcome to SchoolBase
              </p>
              <p className="font-normal lgss:text-[22px] lgss:leading-[30px] opacity-[0.7] hidden lgss:flex">
                The best Education Management system with a Place for Primary
                and Secondary Institutions, Teachers, Parents, Students and
                Pupils
              </p>
              <div className="flex gap-5">
                <Link to={"/get-started"}>
                  <button className="bg-[#007BFF] rounded-xl py-[16px] px-[24px] shadow-xl text-white">
                    Get Started
                  </button>
                </Link>
                <p className="flex justify-center items-center text-[20px] font-medium text-[#007BFF] py[16px] px-[24px] border-[1px] border-[#007BFF] rounded-xl">
                  Explore our resources
                </p>
              </div>
              <div className="py-[20px] rounded-3xl px-5 shadow-lg shadow-purple-300/50 bg-white w-[70%]">
                <img src={peopleHero} alt="people" />
                <p className="mt-2 ">
                  View the review of our satisfied customers
                </p>
              </div>
            </div>

            <div className="lgss:w-[40%] relative top-4 -mt-4 py-[62px]">
              <div className="flex flex-col">
                <img
                  src={Ellipse}
                  alt=""
                  className="w-[50px] relative left-10 top-8"
                />
                <div className="flex">
                  <img
                    src={smilingboy}
                    alt=""
                    className="w-[200px] lgss:w-[304px]"
                  />
                  <div className="flex bg-[rgba(255,255,255,0.60)] rounded-lg justify-center items-center h-16 p-2 relative top-10">
                    <div className="flex items-center relative right-4">
                      <img src={Ellipse} alt="" className="w-[80px]" />
                      <img
                        src={email}
                        alt=""
                        className="relative right-[2.6em] -mr-[2em] bottom-[2px] z-10 w-[18px]"
                      />
                    </div>
                    <div className=" items-start w-full relative right-5">
                      <p className="font-bold text-[20px] ">Congratulations</p>
                      <p>Your admission completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col gap-20">
                  <div className="flex flex-col text-[#1E1E1E] bg-[rgba(255,255,255,0.60)] rounded-2xl py-[22px px-[20px] justify-center relative left-32 z-10 w-[10em] h-[5em]">
                    <p className="font-bold text-[30px]">10k</p>
                    <p className="font-normal text-[10px]">
                      Student with high grade
                    </p>
                  </div>
                  <div className="flex bg-[rgba(255,255,255,0.60)] rounded-2xl py-[12px] px-[20px] justify-center gap-2 items-center relative left-48 top-1 z-10">
                    <img src={Man} alt="" className="rounded-full" />
                    <div className="font-normal text-[12px]">
                      <p>Jane Cooper</p>
                      <p>I loved the Italian course!</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start relative bottom-[15em] -mb-[15em] left-10">
                  <img
                    src={Ellipse}
                    alt=""
                    className="w-[89px relative top-[5.7em] left-9"
                  />
                  <div className="flex items-center">
                    <img
                      src={smilingGirl}
                      alt=""
                      className="w-[200px] lgss:w-[300px]"
                    />
                    <img
                      src={Ellipse}
                      alt=""
                      className="relative right-32 top-28 w-[50px -mr-28"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
