import React, { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import CourseCard from "../../../components/students-dashboard/CourseCard";
import {
  arts,
  biology,
  chemistry,
  geography,
  maths,
  physics,
  teachImg,
} from "../../../assets";

const ClassesPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="w-4/5 flex flex-col h-full overflow-auto bg-white font-lexend justify-start pb-6">
        <h1 className="text-[28px] px-[40px] pt-[20px] font-semibold text-secondary">
          My Courses
        </h1>
        <div className="flex flex-wrap justify-start items-center px-8 gap-3 w-[95%] text-[22px] text-[#8F8F8F] font-medium  pt-10 ">
          <CourseCard
            title="Physics"
            image={physics}
            teachImg={teachImg}
            teacher="Mr Sam"
            percentage="80%"
          />
          <CourseCard
            title="Geography"
            image={geography}
            teachImg={teachImg}
            teacher="Mrs Ola"
            percentage="80%"
          />
          <CourseCard
            title="Biology"
            image={biology}
            teachImg={teachImg}
            teacher="Miss Bello"
            percentage="80%"
          />
          <CourseCard
            title="Arts"
            image={arts}
            teachImg={teachImg}
            teacher="Miss Taojud"
            percentage="80%"
          />
          <CourseCard
            title="Chemistry"
            image={chemistry}
            teachImg={teachImg}
            teacher="Mr Mercy"
            percentage="80%"
          />
          <CourseCard
            title="Mathematics"
            image={maths}
            teachImg={teachImg}
            teacher="Miss Anisah"
            percentage="80%"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
