import React from 'react';
import SearchBar from './SearchBar';
import { CiBellOn } from 'react-icons/ci';
import Profile from './Profile';
import DateSwitcher from './DateSwitcher';

const Header = () => {
  return (
    <div className='flex flex-col gap-2 xl:px-16 px-10 pt-7 w-full'>
      <div className='flex justify-between items-center gap-6 md:gap-20 xl:gap-0'>
        <div className='w-full xl:w-[30%]'>
          <SearchBar />
        </div>
        <div className='flex gap-40 items-center'>
          <div className='p-3 bg-[#b11e1a]/10 rounded-full hidden xl:flex'>
            <CiBellOn size={24} />
          </div>
          <Profile />
        </div>
      </div>
      <div className='justify-end flex mt-3 xl:mt-0'>
        <DateSwitcher />
      </div>
    </div>
  );
};

export default Header;
