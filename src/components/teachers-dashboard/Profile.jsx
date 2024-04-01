import React from 'react';
import { nigerianWoman } from '../../assets/index.js';
import { RiArrowDownSLine, RiMenu5Fill } from 'react-icons/ri';

const Profile = () => {
  return (
    <div>
      {/* Desktop */}
      <div className='gap-2 hidden md:flex'>
        <img
          src={nigerianWoman}
          alt=''
          width={40}
          className='rounded-full cursor-pointer'
        />
        <div className='hidden xl:flex flex-col'>
          <p className='text-[#1d1d1d] font-bold'>Doose Atumeyi</p>
          <p className='text-xs text-[#3d5ee1] font-bold'>Teacher</p>
        </div>
        <div className='mt-3 cursor-pointer text-[#7e84a3]'>
          <RiArrowDownSLine className='hidden xl:block' />
        </div>
      </div>

      {/* Mobile */}
      <div className='gap-2 flex md:hidden'>
        <div className='cursor-pointer text-[#7e84a3]'>
          <RiMenu5Fill size={20} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
