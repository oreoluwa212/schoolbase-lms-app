import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dashboard from './Dashboard';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="lgss:hidden flex justify-end w-full pt-5">
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
        <Dashboard />
      </div>
    </div>
  );
};

export default Settings;
