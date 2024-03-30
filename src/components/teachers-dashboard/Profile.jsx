import React from 'react';
import { nigerianWoman } from '../../assets/index.js';
import { RiArrowDownSLine } from 'react-icons/ri';

const Profile = () => {
  return (
    <div className='flex gap-2'>
      <img
        src={nigerianWoman}
        alt=''
        width={40}
        className='rounded-full cursor-pointer'
      />
      <div>
        <p className='text-[#1d1d1d] font-bold'>Doose Atumeyi</p>
        <p className='text-xs text-[#3d5ee1] font-bold'>Teacher</p>
      </div>
      <div className='mt-3 cursor-pointer text-[#7e84a3]'>
        <RiArrowDownSLine />
      </div>
    </div>
  );
};

export default Profile;
