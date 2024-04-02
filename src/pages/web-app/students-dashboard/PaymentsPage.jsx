import React, { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";

const PaymentsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen}/>
      <div className="w-full lgss:w-4/5 flex flex-col h-full overflow-auto bg-white justify-start">
        <div className="flex justify-between items-center text-primary w-full px-[5%] pt-[20px]">
          <h1 className="text-[28px] px-[40px] lgss:px-0 font-semibold text-primary">
            Payment
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
        <div className="flex flex-row justify-start items-center px-8 gap-8 w-full text-[22px] text-[#8F8F8F] font-medium  pt-10 "></div>
      </div>
    </div>
  );
};

export default PaymentsPage;
