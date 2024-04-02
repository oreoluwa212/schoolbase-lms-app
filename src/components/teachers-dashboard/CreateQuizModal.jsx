import React from 'react';
import CalendarComponent from './CalendarComponent';

const CreateQuizModal = () => {
  return (
    <div className='xl:px-16 px-12 xl:py-16 py-12 grid xl:grid-cols-2 grid-cols-1 gap-12 items-center justify-center w-[80%] bg-blue-200'>
      <div className='flex flex-col justify-between xl:h-[450px] xl:grid-col-auto grid-col-1'>
        <div className='flex flex-col gap-10 '>
          <div className='flex flex-col gap-1'>
            <p className='font-bold text-xs'>Class</p>
            <select
              name=''
              id=''
              className='outline-none xl:w-[50%] w-full bg-white border border-gray-300 py-1 px-3 rounded-md text-gray-600'
              defaultValue='DEFAULT'
            >
              <option value='DEFAULT' disabled>
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
              className='outline-none xl:w-[50%] w-full bg-white border border-gray-300 py-1 px-3 rounded-md text-gray-600'
              defaultValue='DEFAULT'
            >
              <option value='DEFAULT' disabled>
                Select a Class
              </option>
              <option value='1'>Select a Class</option>
              <option value='2'>Select a Classss</option>
              <option value='3'>Select a Class</option>
            </select>
          </div>
        </div>
      </div>

      <CalendarComponent />

      <button className='bg-[#3D5EE1] text-white font-bold rounded-xl py-2 xl:-mt-32'>
        Create Quiz
      </button>
    </div>
  );
};

export default CreateQuizModal;
