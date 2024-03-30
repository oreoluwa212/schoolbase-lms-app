import React from 'react';

const CreateQuizModal = () => {
  return (
    <div className='px-24 py-24 grid grid-cols-2 gap-12 items-center'>
      <div className='flex flex-col justify-between h-[450px]'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-1'>
            <p className='font-bold text-xs'>Class</p>
            <select
              name=''
              id=''
              className='outline-none w-[50%] bg-white border border-gray-300 py-1 px-3 rounded-md text-gray-600'
            >
              <option value='' disabled selected>
                Select a Class
              </option>
              <option value='1'>Select a Class</option>
              <option value='2'>Select a Classss</option>
              <option value='3'>Select a Class</option>
            </select>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-bold text-xs'>Subject</p>
            <select
              name=''
              id=''
              className='outline-none w-[50%] bg-white border border-gray-300 py-1 px-3 rounded-md text-gray-600'
            >
              <option value='' disabled selected>
                Select a Class
              </option>
              <option value='1'>Select a Class</option>
              <option value='2'>Select a Classss</option>
              <option value='3'>Select a Class</option>
            </select>
          </div>
        </div>
        <button className='bg-[#3D5EE1] text-white font-bold rounded-xl py-2'>
          Create Quiz
        </button>
      </div>
      <div className='border h-[450px]'>Calendar</div>
    </div>
  );
};

export default CreateQuizModal;
