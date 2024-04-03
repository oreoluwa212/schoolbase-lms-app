import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import SideBar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  let newUser = {};
  let location = useLocation();
  if (location.state) {
    newUser = location.state.user;
  }

  return (
    <div className="flex flex-row h-screen w-full">
      <SideBar isOpen={isOpen} />
      <div className=" w-full lgss:w-4/5 flex flex-col h-full overflow-auto">
        <div className="flex flex-col justify-between items-center text-primary w-full pt-[20px] px-[5%]">
          <div className="w-full flex justify-between">
            <h1 className="text-[28px] font-semibold text-secondary">
              Dashboard
            </h1>
            <div className="lgss:hidden">
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
          <div className="">
            <div className="flex flex-col justify-center lgss:items-start lgss:pt-14 pt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
