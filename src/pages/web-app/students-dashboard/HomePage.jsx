import React, { useState } from "react";
import { Progress } from "antd";
import "../../../styles/studentdashboard/HomePage.css";
import { useLocation, Link } from "react-router-dom";
import SideBar from "../../../components/students-dashboard/Sidebar";
import {
  Eventpix,
  Notification,
  bell,
  biologypix,
  calender,
  geographypix,
  mathspix,
  mobile,
  search,
  userpix,
} from "../../../assets";

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
    <div className="flex h-screen">
      <SideBar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col pt-5">
          <div className="flex justify-between items-center py-3">
            <div className="flex border-[1px] border-[#DCDDE0] rounded-xl w-[60%] h-[70%]">
              <button className="flex justify-center items-center">
                <img src={search} alt="" className="w-[70%] " />
              </button>
              <input type="text" className="outline-none w-full rounded-xl" />
            </div>
            <div className="flex gap-2 items-center">
              <div className="">
                <p>Hi</p>
                <p>Ada Smith</p>
              </div>
              <img src={userpix} alt="" />
              <img src={Notification} alt="" />
            </div>
          </div>

          <div className="flex justify-between items-cente px-10 dashboard h-[30%]">
            <div className=" text-[#1E1E1E] flex flex-col font-normal font-manrope gap-2 py-5">
              <p className="text-[24px] w-[50%]">
                Welcome to your{" "}
                <span className="font-bold text-[40px]">Dashboard</span>
              </p>
              <p className=" text-[15px]">Upcoming Holiday: Easter</p>
            </div>
            <div className="bg-[url('/src/assets/images/youngman2.png')] bg-no-repeat bg-center bg-contain w-[25%]  -mb-[6%] "></div>
          </div>

          <div className="flex py-5 gap-5">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p>Classes</p>
                  <p>see all</p>
                </div>
                <div className="flex gap-2" style={{ fontFamily: "" }}>
                  {courses.map(({ ids, name, Image }) => (
                    <div key={ids} className="shadow-2xl rounded-md p-1">
                      <img src={Image} alt={name} className="w-[200px]" />
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
              <div className="flex gap-2" style={{ fontFamily: "" }}>
                <div className="love flex flex-col justify-center items-center w-[184px] gap-2">
                  <img src={calender} alt="" />
                  <Link to='/calender'><p>Timetable</p></Link>
                </div>
                {programmes.map((items) => (
                  <div
                    key={items.id}
                    className={items.id === 1 ? "love" : "hate"}
                  >
                    <div className="flex flex-col gap-2 items-center shadow-2xl rounded-xl h-[184px] w-[200px] text-center justify-center">
                      <img src={items.image} alt="" />
                      <p>{items.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overall flex flex-col items-center shadow-xl w-[50%] m-auto h-[100%] justify-center gap-10">
              <Progress
                type="circle"
                steps={10}
                percent={70}
                trailColor="rgba(0, 0, 0, 0.06)"
                strokeWidth={20}
              />
              <div className="flex gap-5 items-center justify-end -mb-5">
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
          <div className="flex gap-5 ">
            <div className="flex flex-col border-[2px] border-[#F0F7FF] px-2 w-[40%]">
              <div className="flex justify-between">
                <p>StaffRoom</p>
                <p className="">See all</p>
              </div>
              <hr />
              <div className="flex items-center gap-5">
                <p className="bg-[#F0F7FF] rounded-md">AA</p>
                <div>
                  <p>Adepoju Ademola</p>
                  <p className="font-normal text-[10px] text-[#8A8A8A]">
                    Hello, Mr John i am yet to get your class b res...
                  </p>
                </div>
                <p>10:25 am</p>
              </div>
              <hr />
              <div className="flex items-center gap-5">
                <p className="bg-[#F0F7FF] rounded-md">BP</p>
                <div className="flex justify-between gap-20 py-2">
                  <div>
                    <p>Badiru Pomile</p>
                    <p className="font-normal text-[10px] text-[#8A8A8A]">
                      Please schedule your class test.
                    </p>
                  </div>
                  <p>12:35 pm</p>
                </div>
              </div>
              <hr />
              <div className="flex items-center gap-5">
                <p className="bg-[#F0F7FF] rounded-md">EJ</p>
                <div className="flex justify-between gap-20">
                  <div>
                    <p>Emmanuel John</p>
                    <p className="font-normal text-[10px] text-[#8A8A8A]">
                      Plrase resend last session statistic
                    </p>
                  </div>
                  <p>04:30 pm</p>
                </div>
              </div>
            </div>
            {/* <div className="w-[50%] flex bg-[#EFF2FE]"> */}
            <div
              className="flex flex-col justify-between w-[60%] h-[100% bg-[#EFF2FE] px-2"
              style={{ fontFamily: "" }}
            >
              <div className="flex justify-between">
                <p>Upcomming Events</p>
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
