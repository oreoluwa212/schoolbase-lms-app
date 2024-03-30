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
      <div className='border w-4/5'>
        <Header />
        {quizModal ? (
          <div className='border border-black rounded-[2rem] my-8 mx-16'>
            <CreateQuizModal />
          </div>
        ) : (
          <div className='px-16 py-8'>
            <p className='font-bold text-2xl mb-4'>No Records Available</p>
            <p className='text-3xl'>Set your Quizzes here</p>
          </div>
        )}

        <div
          className={`bottom-20 absolute right-8 font-bold bg-[#3d5ee1] p-6 rounded-[3.5rem] cursor-pointer ${
            quizModal ? 'hidden' : 'absolute'
          }`}
        >
          <CiSquarePlus size={100} color='#ffffff' onClick={openQuizModal} />
        </div>
      </div>
    </div>
  );
};

export default QuizHistory;
