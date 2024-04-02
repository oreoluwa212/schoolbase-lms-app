import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { FaBars, FaTimes } from 'react-icons/fa';

const Attendance = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="flex justify-between w-full">
          <Header />
          <div className="lgss:hidden pt-5 px-[5%]">
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
      </div>
    </div>
  );
};

export default Attendance;
