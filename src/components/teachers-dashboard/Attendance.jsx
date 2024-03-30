import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Attendance = () => {
  return (
    <div className='flex'>
        <Sidebar />
      <div className='border w-[75%]'>
        <Header />
      </div>
    </div>
  );
};

export default Attendance;
