import React from "react";
import { Notification, search, userpix } from "../../../assets";

const SearchHead = () => {
  return (
    <>
      <div className="flex justify-between items-center py-3 px-2 md:px-[unset] ">
        <div className="flex border-[1px] border-[#DCDDE0] rounded-xl w-[50%] md:w-[60%] h-[70%]">
          <button className="flex justify-center items-center">
            <img src={search} alt="" className="w-[70%] " />
          </button>
          <input type="search" className="outline-none w-full rounded-xl" />
        </div>
        <div className="flex items-center md:gap-2">
          <div className="flex flex-col">
            <p>Hi</p>
            <p>Ada Smith</p>
          </div>
          <img src={userpix} alt="" />
          <img src={Notification} alt="" />
        </div>
      </div>
    </>
  );
};

export default SearchHead;
