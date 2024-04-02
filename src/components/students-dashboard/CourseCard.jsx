import React from "react";

const CourseCard = ({ title, teacher, percentage, teachImg, image }) => {
  return (
    <div className="max-w-md mx-auto cursor-pointer border-none h-[350px] w-[300px] rounded-[16px] overflow-hidden shadow-lg flex flex-col justify-start p-2 bg-white">
      <div className="h-[50%] w-full">
        <img src={image} className="w-full h-full" alt="" />
      </div>
      <div className="px-2 pt-4 flex flex-col gap-2">
        <h2 className="text-[22px] text-secondary font-bold mb-2">{title}</h2>

        <div className="flex gap-3">
          <img className="w-7 h-7 rounded-full" src={teachImg} alt="" />
          <h1>{teacher}</h1>
        </div>

        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-2 text-[20px]">
            <h1 className="font-semibold">{percentage}</h1>
            <p>Completed</p>
          </div>
          <button className="w-[40%] text-white bg-primary rounded-[16px] h-[40px] text-[12px] font-semibold px-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
