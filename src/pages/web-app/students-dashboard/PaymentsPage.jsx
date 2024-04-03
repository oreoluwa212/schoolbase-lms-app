import React, { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaAngleDown, FaBars, FaBell, FaRegClock, FaTimes, FaUsers } from "react-icons/fa";
import { studentImg } from "../../../assets";
import StudentProfile from "../../../components/students-dashboard/StudentProfile";
import { FiMessageSquare } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";

const mockData = [
  {
    "Fee Type": "School Fee",
    Total: "$100",
    Paid: "$100",
    Outstanding: "$0",
  },
  {
    "Fee Type": "Maintenance",
    Total: "$40",
    Paid: "$40",
    Outstanding: "$0",
  },
  {
    "Fee Type": "Extra Class",
    Total: "$60",
    Paid: "$60",
    Outstanding: "$0",
  },
];
const paymentData = [
  {
    "Transaction Date": "17-03-2024",
    Reference: "RF4034257",
    "Fee Type": "School Fee",
    Amount: "$20",
    Outstanding: "$80",
  },
  {
    "Transaction Date": "17-03-2024",
    Reference: "RF4034257",
    "Fee Type": "School Fee",
    Amount: "$20",
    Outstanding: "$80",
  },
  {
    "Transaction Date": "17-03-2024",
    Reference: "RF4034257",
    "Fee Type": "School Fee",
    Amount: "$20",
    Outstanding: "$80",
  },
  {
    "Transaction Date": "17-03-2024",
    Reference: "RF4034257",
    "Fee Type": "School Fee",
    Amount: "$20",
    Outstanding: "$80",
  },
  {
    "Transaction Date": "17-03-2024",
    Reference: "RF4034257",
    "Fee Type": "School Fee",
    Amount: "$20",
    Outstanding: "$80",
  },
  {
    "Transaction Date": "17-03-2024",
    Reference: "RF4034257",
    "Fee Type": "School Fee",
    Amount: "$20",
    Outstanding: "$80",
  },
  {
    "Transaction Date": "17-03-2024",
    Reference: "RF4034257",
    "Fee Type": "School Fee",
    Amount: "$20",
    Outstanding: "$80",
  },
  {
    "Transaction Date": "17-03-2024",
    Reference: "RF4034257",
    "Fee Type": "School Fee",
    Amount: "$20",
    Outstanding: "$80",
  },
  {
    "Transaction Date": "17-03-2024",
    Reference: "RF4034257",
    "Fee Type": "School Fee",
    Amount: "$20",
    Outstanding: "$80",
  },
];

const StudentsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState(1);

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
            <div className="flex flex-col lgss:flex-row pt-6 gap-6">
              <button
                onClick={() => setActiveScreen(1)}
                className={
                  activeScreen === 1
                    ? "bg-primary text-white px-4 font-semibold py-2 rounded-full"
                    : "border-primary border-[1px] text-primary px-4 font-semibold py-2 rounded-full"
                }
              >
                Payment Outstanding
              </button>
              <button
                onClick={() => setActiveScreen(2)}
                className={
                  activeScreen === 2
                    ? "bg-primary text-white px-4 font-semibold py-2 rounded-full"
                    : "border-primary border-[1px] text-primary px-4 font-semibold py-2 rounded-full"
                }
              >
                All Payments
              </button>
              <button
                onClick={() => setActiveScreen(3)}
                className={
                  activeScreen === 3
                    ? "bg-primary text-white px-4 font-semibold py-2 rounded-full"
                    : "border-primary border-[1px] text-primary px-4 font-semibold py-2 rounded-full"
                }
              >
                Pay Now
              </button>
            </div>
            {activeScreen === 1 ? (
              <div className="bg-white rounded-lg shadow-2xl shadow-secondary/30 overflow-auto w-full p-3 py-3 flex flex-col justify-between">
                <div className="">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b-[1px] border-gray-300  bg-pink h-12">
                        <th className="">Fee Type</th>
                        <th>Total Amount</th>
                        <th>Paid</th>
                        <th>Outstanding</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockData.map((rowData, index) => (
                        <tr
                          className="border-b-[1px] border-x-[1px] border-gray-300 font-semibold h-12"
                          key={index}
                        >
                          <td className="py-2 border-r-[2px]">
                            {rowData["Fee Type"]}
                          </td>
                          <td className="py-2 border-r-[2px]">
                            {rowData["Total"]}
                          </td>
                          <td className="py-2 border-r-[2px]">
                            {rowData["Paid"]}
                          </td>
                          <td className="py-2 border-r-[2px]">
                            {rowData["Outstanding"]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : activeScreen === 2 ? (
              <>
                <div className="flex flex-col lgss:flex-row pt-6 gap-6">
                  <button
                    className="border-secondary border-[1px] text-secondary px-4 flex justify-center items-center gap-3 font-semibold h-10 rounded-[32px]"
                  >
                    <FaRegClock />
                    Date
                    <GoTriangleDown />
                  </button>
                  <button
                    className="border-secondary border-[1px] text-secondary px-4 flex justify-center items-center gap-3 font-semibold h-10 rounded-[32px]"
                  >
                    <FiMessageSquare />
                    Payment Type
                    <GoTriangleDown />
                  </button>
                  <button
                    className="border-secondary border-[1px] text-secondary px-4 flex justify-center items-center gap-3 font-semibold h-10 rounded-[32px]"
                  >
                    <FaUsers/>
                    Sent
                    <GoTriangleDown />
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-2xl shadow-secondary/30 overflow-auto w-full p-3 py-3 flex flex-col justify-between">
                  <div className="">
                    <table className="w-full text-center">
                      <thead>
                        <tr className="border-b-[1px] border-gray-300 text-[12px] lgss:text-[16px]  bg-pink h-12">
                          <th className="">Transaction Date</th>
                          <th className="">Reference Number</th>
                          <th className="">Fee Type</th>
                          <th>Amount</th>
                          <th>Outstanding</th>
                          <th>Receipt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paymentData.map((rowData, index) => (
                          <tr
                            className="border-b-[1px] border-x-[1px] border-gray-300 font-semibold h-12 text-[12px] lgss:text-[16px] "
                            key={index}
                          >
                            <td className="py-2 px-1 lgss:px-0 border-r-[2px]">
                              {rowData["Transaction Date"]}
                            </td>
                            <td className="py-1 border-r-[2px]">
                              {rowData["Reference"]}
                            </td>
                            <td className="py-2 px-2 border-r-[2px]">
                              {rowData["Fee Type"]}
                            </td>
                            <td className="py-2 border-r-[2px]">
                              {rowData["Amount"]}
                            </td>
                            <td className="py-2 border-r-[2px]">
                              {rowData["Outstanding"]}
                            </td>
                            <td className="px-2 lgss:px-0">
                              <button className="bg-primary text-white px-2  lgss:py-[5px] rounded-full shadow-lg text-[10px] lgss:text-[12px] ">
                                Print Receipt
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : activeScreen === 3 ? (
              <div className="bg-white rounded-lg shadow-2xl shadow-secondary/30 border-[1px] overflow-auto w-full p-3 py-3 flex flex-col justify-between mt-6">
                <div className="">
                  <p className="border-b-[1px] border-gray-300 text-[24px] font-bold h-12 w-full flex justify-center items-center">
                    Click one of buttons below
                  </p>
                  <table className="w-full text-center">
                    <tbody>
                      <tr className="border-b-[1px] border-x-[1px] border-gray-300 font-semibold h-12">
                        <td className="py-2 border-r-[2px]">
                          <button>Back</button>
                        </td>
                        <Link to={"/student/payments/pay"}>
                          <td className="py-2 border-r-[2px] pr-2">
                            <button>Pay Fees Online</button>
                          </td>
                        </Link>
                        <td className="py-2 border-r-[2px]">
                          <button>View all transactions</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
