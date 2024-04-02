import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { CiSquarePlus } from 'react-icons/ci';
import CreateQuizModal from './CreateQuizModal';

const QuizHistory = () => {
  const [quizModal, setQuizModal] = useState(false);

  const openQuizModal = () => {
    setQuizModal(true);
  };

  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='md:w-[75%] w-full'>
        <Header />
        {quizModal ? (
          <CreateQuizModal />
        ) : (
          <div className='px-16 py-8'>
            <p className='font-bold text-2xl mb-4'>No Record Available</p>
            <p className='text-3xl'>Set your Quizzes here</p>
          </div>
        )}

        <div
          className={`bottom-10 absolute right-10 font-bold bg-[#3d5ee1] xl:p-5 p-2 xl:rounded-[3.5rem] rounded-3xl cursor-pointer ${
            quizModal ? 'hidden' : 'absolute'
          }`}
        >
          <CiSquarePlus
            color='#ffffff'
            onClick={openQuizModal}
            className='xl:w-[60px] xl:h-[60px] w-[40px] h-[40px]'
          />
        </div>
      </div>
    </div>
  );
};

export default QuizHistory;
