import React, { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaBell, FaTimes } from "react-icons/fa";
import { studentImg } from "../../../assets";
import StudentProfile from "../../../components/students-dashboard/StudentProfile";
import { Link } from "react-router-dom";


const StudentsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className=" w-full lgss:w-4/5 flex flex-col h-full overflow-auto">
        <div className="flex flex-col justify-between items-center text-primary w-full pt-[20px] px-[5%]">
          <div className="w-full flex justify-between">
            <h1 className="text-[28px] font-semibold text-secondary">
              Payments
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
          <div className="flex flex-col justify-start gap-6 w-[85%] text-neutral pt-10 pb-5">
            <StudentProfile />
            <div className="flex gap-3">
              <button className="bg-primary text-white px-4 font-semibold py-2 rounded-full">Payment Outstanding</button>
              <button className="border-primary border-[1px] text-primary px-4 font-semibold py-2 rounded-full">All Payments</button>
              <button className="border-primary border-[1px] text-primary px-4 font-semibold py-2 rounded-full">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
