import React, { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import { PiBank } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";

const PayFees = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} />
      <div className=" w-full lgss:w-4/5 flex flex-col h-full overflow-auto">
        <div className="flex flex-col justify-between items-center text-primary w-full pt-[20px] px-[5%]">
          <div className="w-full flex justify-between">
            <h1 className="font-semibold text-primary text-[18px]">
              Payments | <span className="px-2 italic">Pay</span>
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
            <div className="flex pt-6 gap-6">
              <button
                onClick={() => setActiveScreen(1)}
                className={
                  activeScreen === 1
                    ? "border-primary border-2 px-4 font-semibold py-2 flex flex-col gap-1 w-[120px] rounded-[12px]"
                    : " border-2 px-4 font-semibold py-2 flex flex-col gap-1 w-[120px] rounded-[12px]"
                }
              >
                <PiBank />
                Bank
              </button>
              <button
                onClick={() => setActiveScreen(2)}
                className={
                  activeScreen === 2
                    ? "border-primary border-2 px-4 font-semibold py-2 flex flex-col gap-1 w-[120px] rounded-[12px]"
                    : "border-2 px-4 font-semibold py-2 flex flex-col gap-1 w-[120px] rounded-[12px]"
                }
              >
                <CiCreditCard1 />
                Card
              </button>
            </div>
            {activeScreen === 1 ? (
              <div className="bg-white rounded-lg shadow-2xl shadow-secondary/30 overflow-auto w-full p-3 py-3 flex flex-col justify-between"></div>
            ) : activeScreen === 2 ? (
              <div className="bg-white rounded-lg shadow-2xl shadow-secondary/30 overflow-auto w-full p-3 py-3 flex flex-col justify-between"></div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayFees;
