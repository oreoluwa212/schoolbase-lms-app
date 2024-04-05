import React, { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaBell, FaTimes } from "react-icons/fa";
import { studentImg } from "../../../assets";
import StudentProfile from "../../../components/students-dashboard/StudentProfile";
import { Link } from "react-router-dom";

const PaymentsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className=" w-full lgss:w-4/5 flex flex-col h-full overflow-auto">
        <div className="flex flex-col justify-between items-center text-primary w-full pt-[20px] px-[5%]">
          <div className="w-full flex justify-between">
            <h1 className="text-[28px] font-semibold text-secondary">
              Student Life
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
            <div className="flex flex-col gap-3 pt-2">
              <h1 className="text-[24px] font-medium">My Studies</h1>
              <div className="flex justify-between w-full pt-4">
                <Link
                  className="w-[47%] h-[142px] bg-white rounded-[16px] shadow-md shadow-secondary/50 flex justify-center items-center"
                  to={"/student/classes"}
                >
                  <div>
                    <p className="text-[20px] font-medium">My Subjects</p>
                  </div>
                </Link>
                <Link
                  className="w-[47%] h-[142px] bg-white rounded-[16px] shadow-md shadow-secondary/50 flex justify-center items-center font-medium"
                  to={"/student/assessment"}
                >
                  <div>
                    <p className="text-[20px]">Assessments and Results</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <h1 className="text-[24px] font-medium">My Finances</h1>
              <div className="flex justify-between w-full pt-4">
                <div className="w-[47%] h-[142px] bg-pink rounded-[16px] shadow-md shadow-secondary/50 flex justify-center items-center">
                  <p className="text-[20px] font-medium">View Payment</p>
                </div>
                <div className="w-[47%] h-[142px] bg-pink rounded-[16px] shadow-md shadow-secondary/50 flex justify-center items-center font-medium">
                  <p className="text-[20px]">Make Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
