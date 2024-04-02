import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className='flex w-full'>
      <div className='bg-[#b11e1a]/10 flex items-center rounded-l-full pl-1'>
        <FiSearch className='text-black' />
      </div>
      <input
        type='text'
        className='bg-[#b11e1a]/10 outline-none px-3 rounded-r-full w-full text-xs py-2'
        placeholder='Courses, Students, Database...'
      />
    </div>
  );
};

export default SearchBar;
