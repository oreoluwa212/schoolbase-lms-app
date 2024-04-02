import React, { useState } from 'react';
import Sidebar from '../../../components/teachers-dashboard/Sidebar';
import { Dashboard } from '../../../components/teachers-dashboard/Dashboard';
import { FaBars, FaTimes } from 'react-icons/fa';
import Header from '../../../components/teachers-dashboard/Header';

const TeacherDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <Header />
        <div className="lgss:hidden flex justify-end w-full">
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

export default TeacherDashboard;
