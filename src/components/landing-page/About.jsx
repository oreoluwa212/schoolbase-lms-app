import React from "react";
import { aboutOne, aboutThree, aboutTwo, BlkLine, Mission, Vision } from "../../assets";

const About = () => {
  return (
    <div className="w-[100%] px-[5%] overflow-x-hidden">
      <div className="flex mt-40 flex-col mb-10 items-center justify-center w-full">
        <div className="flex justify-center items-center">
          <img src={BlkLine} alt="black line" />
          <h1 className="mx-4 ">About Us</h1>
          <img src={BlkLine} alt="black line" />
        </div>
        <p className="font-semibold text-3xl">Why we are the best</p>
      </div>
      <div className="flex lgss:flex-row flex-col w-full px-[5%] justify-center items-center">
       
         <div className="lgss:w-2/5">
         <img
            src={aboutOne}
            alt="A group of people working together in a team"
          />
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
            tortor dui adipiscing. Bibendum cras fringilla amet suspendisse.
            Duis mattis hac urna fames in ante.
          </p>
          <button className="p-4 bg-primary rounded-xl text-white">Explore our space</button>
         
        </div>
        <div className="lgss:w-3/5 px-[2%]">
          <div className="flex mb-12">
            <img src={aboutTwo} alt="Team work" className="w-3/5 mx-4"/>
            <div className="w-full">
              <img src={Mission} alt="mission logo" className="w-[40px] h-[40px]"/>
              <h2 className="text-2xl font-semibold py-2">Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
                dolor fringilla volutpat lectus amet.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <img src={aboutThree} alt="Team work" className="w-[60%] h-[40%]"/>
            <div className="flex flex-col items-end mx-4 w-full   ">
              <img src={ Vision} alt="vision logo" className="w-[40px] h-[40px]"/>
              <h2 className="font-semibold text-2xl py-2">Our Vision</h2>
              <p className="text-right">
              Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at. Id et at dui arcu risus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
