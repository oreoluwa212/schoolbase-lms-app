import React from 'react';
import { schoolbaseLogo } from '../../assets/index.js';
import menu from '../../utils/teachersDashboardMenuItems';
import { PiSignOut } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const teacherBaseUrl = '/teacher/dashboard';

  return (
    <div className="border w-[20%] flex flex-col items-center pt-10 pb-10 h-screen justify-between font-bold text-[#7D7676] text-sm">
      {/* SchoolBase Image */}
      <Link className="flex flex-col justify-center items-center" to="/">
        <img src={schoolbaseLogo} alt="" width={50} />
        <p className="font-extrabold text-[#212121] text-base">
          SCHOOL<span className="text-[#3D5EE1]">BASE</span>
        </p>
      </Link>

      {/* Teachers Dashboard Menu Items */}
      <div className="flex flex-col items-start gap-5">
        {menu.map((item) => {
          const { id, name, url, icon } = item;
          const Icon = icon;
          return (
            <Link
              className="flex items-center gap-3"
              to={teacherBaseUrl + url}
              key={id}
            >
              <Icon />
              <p>{name}</p>
            </Link>
          );
        })}
      </div>

      {/* Signout Button */}

      <div className="flex justify-center items-center w-full border-t-2 pt-12">
        <PiSignOut />
        <p>Sign Out</p>
      </div>
    </div>
  );
};

export default Sidebar;
