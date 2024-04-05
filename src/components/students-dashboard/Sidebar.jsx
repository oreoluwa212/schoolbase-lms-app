import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { RiBookOpenFill } from "react-icons/ri";
import {
  BsPeopleFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { schoolbaseLogo } from "../../assets";
import { FaUserPen } from "react-icons/fa6";
import '../../styles/studentsOnboarding/studentdashboard.css'


const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activebutton, setActiveButton] = useState(1);
  useEffect(() => {
    if (location.pathname === "/student/dashboard") setActiveButton(1);
    else if (location.pathname === "/student/student-life") setActiveButton(2);
    else if (
      location.pathname === "/student/classes"
    )
      setActiveButton(3);
    else if (
      location.pathname === "/student/payments" ||
      location.pathname === "/student/payments/pay" ||
      location.pathname === "/student/assessment" 
    
    ) setActiveButton(4);
    else if (location.pathname === "/student/mail") setActiveButton(5);
    else if (location.pathname === "/student/settings") setActiveButton(6);
  }, [location.pathname]);
  return (
    <>
      <div className="border w-[20%] hidden lgss:flex flex-col gap-4 items-center pt-10 pb-10 justify-between font-bold text-[#7D7676] h-screen text-sm sidebar">
        <div className="w-full h-[60px] text-[26px] flex flex-col gap-4 font-extrabold">
          <img src={schoolbaseLogo} alt="" className="w-full h-full bg-cover" />
          <h1 className="text-center">
            SCHOOL <span className="text-primary">BASE</span>
          </h1>
        </div>
        <div className="mt-16 w-full flex flex-col gap-2 justify-start items-center font-manrope">
          <Link
            to="/student/dashboard"
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
            to="/student/student-life"
            className={
              activebutton === 2
                ? "flex text-[18px] text-white items-center font-medium pl-16 bg-primary w-full gap-5 h-[60px]"
                : "flex items-center text-[18px] text-[#6B7276] font-medium pl-16 w-full gap-5 h-[60px]"
            }
          >
            <FaGraduationCap />
            <h4 className=" text-[18px]">Student life</h4>
          </Link>
          <Link
            to="/student/classes"
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
            to="/student/payments"
            className={
              activebutton === 4
                ? "flex text-[18px] text-white items-center font-medium pl-16 bg-primary w-full gap-5 h-[60px]"
                : "flex items-center text-[18px] text-[#6B7276] font-medium pl-16 w-full gap-5 h-[60px]"
            }
          >
            <FaUserPen />
            <h4 className="">Payments</h4>
          </Link>
          <Link
            to="/student/mail"
            className={
              activebutton === 5
                ? "flex text-[18px] text-white items-center font-medium pl-16 bg-primary w-full gap-5 h-[60px]"
                : "flex items-center text-[18px] text-[#6B7276] font-medium pl-16 w-full gap-5 h-[60px]"
            }
          >
            <BsFillCreditCardFill />

            <h4 className="">Mail</h4>
          </Link>
          <Link
            to="/student/settings"
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
            <div className="mt-16 w-full flex flex-col gap-2 justify-start items-start font-manrope">
              <Link
                to="/student/dashboard"
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
                to="/student/student-life"
                className={
                  activebutton === 2
                    ? "flex text-[18px] text-white items-center font-medium pl-12 bg-primary w-full gap-5 h-[60px]"
                    : "flex items-center text-[18px] text-[#6B7276] font-medium pl-12 w-full gap-5 h-[60px]"
                }
              >
                <FaGraduationCap />
                <h4 className=" text-[18px]">Student life</h4>
              </Link>
              <Link
                to="/student/classes"
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
                to="/student/payments"
                className={
                  activebutton === 4
                    ? "flex text-[18px] text-white items-center font-medium pl-12 bg-primary w-full gap-5 h-[60px]"
                    : "flex items-center text-[18px] text-[#6B7276] font-medium pl-12 w-full gap-5 h-[60px]"
                }
              >
                <FaUserPen />
                <h4 className="">Payments</h4>
              </Link>
              <Link
                to="/student/mail"
                className={
                  activebutton === 5
                    ? "flex text-[18px] text-white items-center font-medium pl-12 bg-primary w-full gap-5 h-[60px]"
                    : "flex items-center text-[18px] text-[#6B7276] font-medium pl-12 w-full gap-5 h-[60px]"
                }
              >
                <BsFillCreditCardFill />

                <h4 className="">Mail</h4>
              </Link>
              <Link
                to="/student/settings"
                className={
                  activebutton === 6
                    ? "flex text-[18px] text-white items-center font-medium pl-12 bg-primary w-full gap-5 h-[60px]"
                    : "flex items-center text-[18px] text-[#6B7276] font-medium pl-12 w-full gap-5 h-[60px]"
                }
              >
                <RiBookOpenFill />
                <h4 className="">Settings</h4>
              </Link>

              <button
                onClick={() => navigate("/get-started")}
                className="flex gap-5 text-[18px] text-[#B82323] items-center  font-medium pl-12 h-[40%] w-full border-t-2 "
              >
                Sign Out
                <HiOutlineLogout />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
