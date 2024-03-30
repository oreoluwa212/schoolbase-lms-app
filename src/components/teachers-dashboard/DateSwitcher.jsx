import React from 'react';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineCalendarMonth,
} from 'react-icons/md';
import months from '../../utils/date';

const DateSwitcher = () => {
  const today = new Date();

  const date = today.getDate();
  const monthIndex = today.getMonth();
  const year = today.getFullYear();

  const month = Object.keys(months)[monthIndex];

  return (
    <div className='w-[29%] flex justify-between items-center text-lg text-black'>
      <MdKeyboardArrowLeft size={20} className='cursor-pointer text-black/60' />
      <MdOutlineCalendarMonth size={20} className='text-black' />
      <p className='font-bold text-black'>{`Today ${date} ${month} ${year}`}</p>
      <MdKeyboardArrowRight
        size={20}
        className='cursor-pointer text-black/60'
      />
    </div>
  );
};

export default DateSwitcher;
