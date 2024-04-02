import React, { useEffect, useState } from "react";
import { schoolbaseLogo } from "../../assets/index.js";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { RiBookOpenFill } from "react-icons/ri";
import { BsFillCreditCardFill, BsPeopleFill } from "react-icons/bs";
import { FaUserPen } from "react-icons/fa6";
import { FaGraduationCap, FaHome } from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
    const handleLogout = () => {
      localStorage.clear();
    };
  const [activebutton, setActiveButton] = useState(1);
    useEffect(() => {
      if (location.pathname === "/teacher/dashboard") setActiveButton(1);
      else if (location.pathname === "/teacher/dashboard/class-records") setActiveButton(2);
      else if (
        location.pathname === "/teacher/dashboard/classes"
      )
        setActiveButton(3);
      else if (location.pathname === "/teacher/dashboard/attendance") setActiveButton(4);
      else if (
        location.pathname === "/teacher/dashboard/exams" ||
        location.pathname === "/teacher/dashboard/exams/history"
      )
        setActiveButton(5);
      else if (location.pathname === "/teacher/dashboard/settings")
        setActiveButton(6);
    }, [location.pathname]);

  return (
    <>
      <div className="border w-[20%] hidden lgss:flex flex-col items-center pt-12 pb-10 h-screen justify-between font-bold text-[#7D7676] text-sm sidebar">
        <div className="w-full h-[70px] text-[26px] font-extrabold">
          <img src={schoolbaseLogo} alt="" className="w-full h-full bg-cover" />
          <h1 className="text-center pt-2">
            SCHOOL <span className="text-primary">BASE</span>
          </h1>
        </div>
        <div className="mt-16 w-full flex flex-col gap-2 justify-start items-center font-manrope">
          <Link
            to={"/teacher/dashboard"}
            className={
              activebutton === 1
                ? "flex text-[18px] text-white items-center font-medium pl-16 bg-primary w-full gap-5 h-[60px]"
                : "flex items-center text-[18px] text-[#6B7276] font-medium pl-16 w-full gap-5 h-[60px]"
            }
          >
            <FaHome />
            <h4 className=" text-[18px]">Home</h4>
          </Link>
          <Link
            to="/teacher/dashboard/class-records"
            className={
              activebutton === 2
                ? "flex text-[18px] text-white items-center font-medium pl-16 bg-primary w-full gap-5 h-[60px]"
                : "flex items-center text-[18px] text-[#6B7276] font-medium pl-16 w-full gap-5 h-[60px]"
            }
          >
            <FaGraduationCap />
            <h4 className=" text-[18px]">Class Records</h4>
          </Link>
          <Link
            to="/teacher/dashboard/classes"
            className={
              activebutton === 3
                ? "flex text-[18px] text-white items-center font-medium pl-16 bg-primary w-full gap-5 h-[60px]"
                : "flex items-center text-[18px] text-[#6B7276] font-medium pl-16 w-full gap-5 h-[60px]"
            }
          >
            <BsPeopleFill />
            <h4 className="text-[18px]">Classes</h4>
          </Link>
          <Link
            to="/teacher/dashboard/attendance"
            className={
              activebutton === 4
                ? "flex text-[18px] text-white items-center font-medium pl-16 bg-primary w-full gap-5 h-[60px]"
                : "flex items-center text-[18px] text-[#6B7276] font-medium pl-16 w-full gap-5 h-[60px]"
            }
          >
            <FaUserPen />
            <h4 className="">Attendance</h4>
          </Link>
          <Link
            to="/teacher/dashboard/exams"
            className={
              activebutton === 5
                ? "flex text-[18px] text-white items-center font-medium pl-16 bg-primary w-full gap-5 h-[60px]"
                : "flex items-center text-[18px] text-[#6B7276] font-medium pl-16 w-full gap-5 h-[60px]"
            }
          >
            <BsFillCreditCardFill />

            <h4 className="">Exams</h4>
          </Link>
          <Link
            to="/teacher/dashboard/settings"
            className={
              activebutton === 6
                ? "flex text-[18px] text-white items-center font-medium pl-16 bg-primary w-full gap-5 h-[60px]"
                : "flex items-center text-[18px] text-[#6B7276] font-medium pl-16 w-full gap-5 h-[60px]"
            }
          >
            <RiBookOpenFill />
            <h4 className="">Settings</h4>
          </Link>

          <button
            onClick={() => navigate("/get-started")}
            className="flex gap-5 text-[18px] mt-4 text-[#B82323] items-center  font-medium pl-16 h-[40%] w-full border-t-2 "
          >
            Sign Out
            <HiOutlineLogout />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`absolute  top-0 left-0  h-screen bg-[#F0EDE7] w-[70%] mds:w-1/3 lgss:hidden flex  flex-col py-4 pt-10   transform transition-transform duration-300 ${
            isOpen ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <div className="lgss:mt-12 flex flex-col lgss:hidden">
            <div className="w-full h-[40px] text-[26px] font-extrabold">
              <img
                src={schoolbaseLogo}
                alt=""
                className="w-full h-full bg-cover"
              />
              <h1 className="text-center text-[18px]">
                SCHOOL <span className="text-primary">BASE</span>
              </h1>
            </div>
            <div className="mt-12 w-full flex flex-col gap-2 justify-start items-start font-manrope">
              <Link
                to="/teacher/dashboard"
                className={
                  activebutton === 1
                    ? "flex text-[18px] text-white items-center font-medium pl-12 bg-primary w-full gap-5 h-[60px]"
                    : "flex items-center text-[18px] text-[#6B7276] font-medium pl-12 w-full gap-5 h-[60px]"
                }
              >
                <FaHome />
                <h4 className=" text-[18px]">Home</h4>
              </Link>
              <Link
                to="/teacher/dashboard/class-records"
                className={
                  activebutton === 2
                    ? "flex text-[18px] text-white items-center font-medium pl-12 bg-primary w-full gap-5 h-[60px]"
                    : "flex items-center text-[18px] text-[#6B7276] font-medium pl-12 w-full gap-5 h-[60px]"
                }
              >
                <FaGraduationCap />
                <h4 className=" text-[18px]">Class Records</h4>
              </Link>
              <Link
                to="/teacher/dashboard/classes"
                className={
                  activebutton === 3
                    ? "flex text-[18px] text-white items-center font-medium pl-12 bg-primary w-full gap-5 h-[60px]"
                    : "flex items-center text-[18px] text-[#6B7276] font-medium pl-12 w-full gap-5 h-[60px]"
                }
              >
                <BsPeopleFill />
                <h4 className="text-[18px]">Classes</h4>
              </Link>
              <Link
                to="/teacher/dashboard/attendance"
                className={
                  activebutton === 4
                    ? "flex text-[18px] text-white items-center font-medium pl-12 bg-primary w-full gap-5 h-[60px]"
                    : "flex items-center text-[18px] text-[#6B7276] font-medium pl-12 w-full gap-5 h-[60px]"
                }
              >
                <FaUserPen />
                <h4 className="">Attendance</h4>
              </Link>
              <Link
                to="/teacher/dashboard/exams"
                className={
                  activebutton === 5
                    ? "flex text-[18px] text-white items-center font-medium pl-12 bg-primary w-full gap-5 h-[60px]"
                    : "flex items-center text-[18px] text-[#6B7276] font-medium pl-12 w-full gap-5 h-[60px]"
                }
              >
                <BsFillCreditCardFill />

                <h4 className="">Exams</h4>
              </Link>
              <Link
                to="/teacher/dashboard/settings"
                className={
                  activebutton === 6
                    ? "flex text-[18px] text-white items-center font-medium pl-12 bg-primary w-full gap-5 h-[60px]"
                    : "flex items-center text-[18px] text-[#6B7276] font-medium pl-12 w-full gap-5 h-[60px]"
                }
              >
                <RiBookOpenFill />
                <h4 className="">Settings</h4>
              </Link>

              <Link 
              to={"/get-started"}>
              <button
                className="flex gap-5 text-[18px] text-[#B82323] items-center  font-medium pl-12 h-[40%] w-full border-t-2 "
              >
                Sign Out
                <HiOutlineLogout />
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
