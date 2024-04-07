import React, { useState } from "react";
import { Progress } from "antd";
import "../../../styles/studentdashboard/HomePage.css";
import { useLocation, Link } from "react-router-dom";
import SideBar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Eventpix,
  bell,
  biologypix,
  calender,
  geographypix,
  mathspix,
  mobile,
  youngman2,
} from "../../../assets";
import SearchHead from "./SearchHead";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  let newUser = {};
  let location = useLocation();
  if (location.state) {
    newUser = location.state.user;
  }

  const courses = [
    {
      id: 1,
      name: "Mathematics",
      Image: mathspix,
    },
    {
      id: 2,
      name: "Geography",
      Image: geographypix,
    },
    {
      id: 3,
      name: "Biology",
      Image: biologypix,
    },
  ];
  const programmes = [
    // {
    //   id: 1,
    //   image: calender,
    //   name: "Timstable",
    // },
    {
      id: 2,
      image: mobile,
      name: "Attendance",
    },
    {
      id: 3,
      image: bell,
      name: "Mail",
    },
  ];
  const events = [
    {
      id: 1,
      image: Eventpix,
      tittle: "Inter- Class Debate",
      discription: "tttttttttthhhnnnfffssssxxxccvvvss",
    },
    {
      id: 2,
      image: Eventpix,
      tittle: "Inter- Class Debate",
      discription: "tttttttttthhhnnnfffssssxxxccvvvss",
    },
    {
      id: 3,
      image: Eventpix,
      tittle: "Inter- Class Debate",
      discription: "tttttttttthhhnnnfffssssxxxccvvvss",
    },
  ];

  return (
    <div className="flex h-screen font-manrope">
      <SideBar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col pt-5">
          <div className="w-full flex justify-between">
            <h1 className="text-[28px] px-[40px] font-semibold text-primary md:hidden">
              Home
            </h1>
            <div className="lgss:hidden pr-5">
              {isOpen ? (
                <FaTimes
                  onClick={() => setIsOpen(false)}
                  className=" cursor-pointer text-red text-xl"
                />
              ) : (
                <FaBars
                  onClick={() => setIsOpen(true)}
                  className=" cursor-pointer text-red text-xl"
                />
              )}
            </div>
          </div>
          <SearchHead />

          <div className="dashboard flex justify-between items-cente md:px-10  h-[30%">
            <div className=" text-[#1E1E1E] flex flex-col font-normal font-manrope gap-2 py-5 px-3 md:px-[unset]">
              <p className="text-[24px] md:w-[50%]">
                Welcome to your{" "}
                <span className="font-bold text-[40px]">Dashboard</span>
              </p>
              <p className=" text-[15px]">Upcoming Holiday: Easter</p>
            </div>
            <div className="bg-[url('/src/assets/images/youngman2.png')] bg-no-repeat bg-center bg-contain w-[40%] -mb-[5%]">
              <img src={youngman2} alt="" className="hidden" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row py-5 md:gap-5 gap-10">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 w-[90%] md:w-[unset] m-auto md:m-[unset]">
                <div className="flex justify-between px-[6%] md:px-[unset]">
                  <p>Classes</p>
                  <p>see all</p>
                </div>
                <div
                  className="flex flex-col md:flex-row gap-2 items-center md:items-start"
                  style={{ fontFamily: "" }}
                >
                  {courses.map(({ ids, name, Image }) => (
                    <div key={ids} className="shadow-2xl rounded-md p-1">
                      <img
                        src={Image}
                        alt={name}
                        className="w-[300px] md:w-[200px]"
                      />
                      <div className="">
                        {name}
                        <div className="progress flex justify-end pr-2">
                          <Progress
                            type="dashboard"
                            // steps={10}
                            percent={70}
                            trailColor="rgba(0, 0, 0, 0.06)"
                            strokeWidth={20}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row gap-2 md:w-[unset] m-auto md:m-[unset] items-center"
                style={{ fontFamily: "" }}
              >
                <div className="love flex flex-col justify-center items-center md:w-[184px] h-[300px] md:h-[184px] gap-2 w-[290px] m-auto">
                  <img src={calender} alt="" />
                  <Link to="/calender">
                    <p>Timetable</p>
                  </Link>
                </div>
                {programmes.map((items) => (
                  <div
                    key={items.id}
                    className={items.id === 1 ? "love" : "hate"}
                  >
                    <div className="flex flex-col gap-2 items-center shadow-xl rounded-xl h-[300px] md:h-[184px] md:w-[200px] text-center justify-center w-[290px] m-auto">
                      <img src={items.image} alt="" />
                      <p>{items.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full h-[300px md:h-[unset] gap-3 items-center md:items-start">
              <p className="font-[josefin sans] text-[24px] font-semibold opacity-[0.5]">
                Overall Performance
              </p>
              <div className="overall flex flex-col justify-center  shadow-lg md:h-full items-center md:w-full md:gap-10 m-auto w-[290px] gap-5 py-2">
                <Progress
                  type="circle"
                  steps={10}
                  percent={70}
                  trailColor="rgba(0, 0, 0, 0.06)"
                  strokeWidth={20}
                />
                <div className="flex gap-5 items-center">
                  <div>
                    <p className="font-semibold text-[24px]">60%</p>
                    <p className="font-light text-[16px]">Completed</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[24px]">30%</p>
                    <p className="font-light text-[16px]">Ongoing</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[24px]">10%</p>
                    <p className="font-light text-[16px]">Resit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="flex flex-col border-[2px] border-[#F0F7FF] md:w-[40%] w-full gap-2 p-5 ">
              <div className="flex justify-between">
                <p>Staff Room</p>
                <p className="">See all</p>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p className="bg-[#F0F7FF] rounded-md">AA</p>
                  <div>
                    <p>Adepoju Ademola</p>
                    <p className="font-normal text-[10px] text-[#8A8A8A]">
                      Hello, Mr John i am yet to get your class b res...
                    </p>
                  </div>
                </div>
                <p>10:25 am</p>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p className="bg-[#F0F7FF] rounded-md">BP</p>
                  <div>
                    <p>Badiru Pomile</p>
                    <p className="font-normal text-[10px] text-[#8A8A8A]">
                      Please schedule your class test.
                    </p>
                  </div>
                </div>
                <p>12:35 pm</p>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p className="bg-[#F0F7FF] rounded-md">EJ</p>
                  <div>
                    <p>Emmanuel John</p>
                    <p className="font-normal text-[10px] text-[#8A8A8A]">
                      Please resend last session statistic
                    </p>
                  </div>
                </div>
                <p>04:30 pm</p>
              </div>
            </div>
            {/* <div className="w-[50%] flex bg-[#EFF2FE]"> */}
            <div
              className="flex flex-col justify-between md:w-[60%] h-[100% bg-[#EFF2FE] p-5"
              style={{ fontFamily: "" }}
            >
              <div className="flex justify-between">
                <p>Upcoming Events</p>
                <p>See all</p>
              </div>
              <hr />
              {events.map(({ ids, tittle, image, discription }) => (
                <div key={ids} className="flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img src={image} alt={""} className="w-[30px]" />
                    <div className="">
                      <p>{tittle}</p>
                      <p className="text-[16px] font-semibold text-[#5F5F67]">
                        {discription}
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#3D5EE1] rounded-lg text-[#ffff] px-[4px] h-[50%] flex items-center text-[12px]">
                    Get started
                  </button>
                </div>
              ))}
            </div>
            {/* </div> */}
          </div>
          {/* <div className="">
            <div className="flex flex-col justify-center lgss:items-start lgss:pt-14 pt-4"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
