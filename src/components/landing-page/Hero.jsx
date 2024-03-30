import React from "react";
import { peopleHero } from "../../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-16 ">
      <div className="w-11/12 md:w-2/5">
        {" "}
        <h1 className=" text-[40px] md:text-6xl my-6 font-bold md:font-extrabold">
          Welcome to SchoolBase
        </h1>
        <p className="mb-12 text-secondary ">
          The best education management system with a place for primary an
          secondary institutions, teachers, parents, students and pupils.
        </p>
        <div className="flex">
          <Link to={"/get-started"}>
            <button className="text-white rounded-xl bg-primary  p-2 md:p-4 shadow-xl">
              Get Started
            </button>
          </Link>
          <button className="mx-4 text-primary rounded-xl p-4 border-primary border-[1px] border-solid shadow-md">
            Explore our resources
          </button>
        </div>
        <div className="py-[22px] rounded-3xl px-5 shadow-lg shadow-purple-300/50 bg-white mt-14 w-4/5">
          <img src={peopleHero} alt="people" />
          <p className="mt-2 ">View the review of our satisfied customers</p>
        </div>
      </div>
      <div className="w-3/5">Image</div>
    </div>
  );
};

export default Hero;
