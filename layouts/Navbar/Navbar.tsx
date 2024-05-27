import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-[10vh] bg-gradient-to-r from-[#1C225E]  to-[#324270]">
      <div className="w-[90%] flex items-center justify-between h-[100%] mx-auto">
        <h1 className="text-[20px] sm:text-[30px] text-white">
          NFTpro<span className="text-red-500">X</span>
        </h1>
        <div className="flex items-center space-x-4">
          <div className="h-[50%] hidden md:block text-black relative p-2 bg-gray-100 rounded-lg">
            <input
              type="text"
              name=""
              id=""
              className="block outline-none w-[90%] h-[100%] bg-transparent"
            />
            <MagnifyingGlassIcon className="h-[2rem] w-[2rem] text-black absolute top-[10%] right-[16px]" />
          </div>
          <div
            className=" w-[2rem] h-[2rem] hover:bg-[#1100ff6d] cursor-pointer transition-all duration-200 
          sm:w-[3.4rem] sm:h-[3.4rem] rounded-full flex items-center justify-center bg-[#0000003d]"
          >
            <UserIcon className="w-[1.3rem] h-[1.3rem] text-white" />
          </div>

          <div
            className=" w-[2rem] h-[2rem] hover:bg-[#1100ff6d] relative cursor-pointer transition-all 
          duration-200 sm:w-[3.4rem] sm:h-[3.4rem] rounded-full flex items-center justify-center bg-[#0000003d]"
          >
            <ShoppingBagIcon className="w-[1.3rem] h-[1.3rem] text-white" />
            <span
              className="w-[0.7rem] h-[0.7rem] sm:w-[1.1rem] sm:h-[1.1rem] text-[10px] sm:text-[13px] absolute top-0 
            right-0 flex items-center justify-center bg-[#774396] rounded-full text-white"
            >
              4
            </span>
          </div>
          <button
            type="button"
            className="px-6 py-2 text-[13px] sm:text-[16px] sm:px-8 sm:py-3 hover:bg-[#1100ff6d] transition-all duration-200 
            bg-[#1C225E] text-white rounded-3xl"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
