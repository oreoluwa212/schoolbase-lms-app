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
import { FaBars, FaTimes } from "react-icons/fa";

const ClassesPage = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className=" w-full lgss:w-4/5 flex flex-col h-full overflow-auto">
        <div className="flex flex-col justify-between items-center text-primary w-full pt-[20px] px-[5%]">
          <div className="w-full flex justify-between">
            <h1 className="text-[28px] px-[40px] font-semibold text-secondary">
              My Courses
            </h1>
            <div className="lgss:hidden">
              {isOpen ? (
                <FaTimes
                  onClick={() => setIsOpen(false)}
                  className=" cursor-pointer text-red text-xl"
                />
              ) : (
                <FaBars
                  onClick={() => setIsOpen(true)}
                  className=" cursor-pointer text-red text-xl"
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-3 w-[95%] text-[22px] text-[#8F8F8F] font-medium  pt-10 ">
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
    </div>
  );
};

export default ClassesPage;
