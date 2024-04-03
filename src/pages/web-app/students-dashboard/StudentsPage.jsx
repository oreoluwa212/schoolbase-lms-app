import React, { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";



const StudentsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen ">
      <Sidebar isOpen={isOpen} />
      <div className=" w-full lgss:w-4/5 flex flex-col h-full overflow-auto">
        <div className="flex flex-col justify-between items-center text-primary w-full pt-[20px] px-[5%]">
          <div className="w-full flex justify-between">
            <h1 className="text-[28px]  font-semibold text-secondary">
              Profile
            </h1>
            <div className="lgss:hidden">
              {isOpen ? (
                <FaTimes
                  onClick={() => setIsOpen(false)}
                  className=" cursor-pointer text-secondary text-xl"
                />
              ) : (
                <FaBars
                  onClick={() => setIsOpen(true)}
                  className=" cursor-pointer text-secondary text-xl"
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-start items-center px-8 gap-3 w-[95%] text-[22px] text-[#8F8F8F] font-medium  pt-10 "></div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
