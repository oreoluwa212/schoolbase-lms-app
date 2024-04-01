import React, { useState } from 'react';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineCalendarMonth,
} from 'react-icons/md';
import months from '../../utils/date';

const DateSwitcher = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevDate = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setCurrentDate(prevDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const date = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const month = Object.keys(months)[monthIndex];

  return (
    <div className='w-full xl:w-[29%] flex justify-between justify-center items-center text-lg text-black'>
      <MdKeyboardArrowLeft
        size={20}
        className='cursor-pointer text-black/60'
        onClick={handlePrevDate}
      />
      <MdOutlineCalendarMonth size={20} className='text-black' />
      <p className='font-bold text-black'>{`Today ${date} ${month} ${year}`}</p>
      <MdKeyboardArrowRight
        size={20}
        className='cursor-pointer text-black/60'
        onClick={handleNextDate}
      />
    </div>
  );
};

export default DateSwitcher;
