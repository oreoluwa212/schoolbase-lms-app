import React, { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";

const SettingsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen}/>
      <div className="w-4/5 flex flex-col h-full overflow-auto bg-white justify-start">
        <h1 className="text-[28px] px-[40px]  text-[#4488AC]">Settings</h1>
        <div className="flex flex-row justify-start items-center px-8 gap-8 w-full text-[22px] text-[#8F8F8F] font-medium"></div>
      </div>
    </div>
  );
};

export default SettingsPage;
