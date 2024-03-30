import React from 'react';
import SearchBar from './SearchBar';
import { CiBellOn } from 'react-icons/ci';
import Profile from './Profile';
import DateSwitcher from './DateSwitcher';

const Header = () => {
  return (
    <div className='flex flex-col gap-2 px-16 py-8'>
      <div className='flex justify-between items-center'>
        <div className='w-[30%]'>
          <SearchBar />
        </div>
        <div className='flex gap-40 items-center '>
          <div className='p-3 bg-[#b11e1a]/10 rounded-full '>
            <CiBellOn size={24} className='' />
          </div>
          <Profile />
        </div>
      </div>
      <div className='flex justify-end'>
        <DateSwitcher />
      </div>
    </div>
  );
};

export default Header;
