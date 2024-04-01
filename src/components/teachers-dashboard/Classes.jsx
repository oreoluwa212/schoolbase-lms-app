import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Classes = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='md:w-[75%] w-full'>
        <Header />
      </div>
    </div>
  );
};

export default Classes;
