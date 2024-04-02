import React from "react";

const CourseCard = ({ title, teacher, percentage, teachImg, image }) => {
  return (
    <div className="max-w-md mx-auto cursor-pointer border-none h-[400px] w-[300px] rounded-[16px] overflow-hidden shadow-lg flex flex-col justify-start p-3 bg-white">
      <div className="h-[50%] w-full">
        <img src={image} className="w-full h-full" alt="" />
      </div>
      <div className="px-2 pt-3 flex flex-col gap-2">
        <h2 className="text-[22px] text-secondary font-bold mb-2">{title}</h2>

        <div className="flex gap-3">
          <img className="w-7 h-7 rounded-full" src={teachImg} alt="" />
          <h1>{teacher}</h1>
        </div>

        <div className="w-full mt-4 rounded-[4px] bg-[#DAE7EE] h-[12px]"></div>
        <div className="w-[180px] mt-[-21px] rounded-[4px] bg-primary h-[12px] "></div>

        <div className="flex gap-4 justify-between items-center pt-3">
          <div className="flex gap-2 text-[18px]">
            <h1 className="font-semibold">{percentage}</h1>
            <p>Completed</p>
          </div>
          <button className="w-[50%] text-white bg-primary rounded-[16px] h-[35px] text-[12px] font-semibold px-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
