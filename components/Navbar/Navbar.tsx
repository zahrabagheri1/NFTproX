import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-[10vh] bg-gradient-to-r from-[#ae63daaf]  to-[#324270]">
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
            <MagnifyingGlassIcon className="h-[32px] w-[32px] text-black absolute top-[10%] right-[16px]" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
