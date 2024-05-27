import {
  ChartPieIcon,
  InformationCircleIcon,
  PresentationChartBarIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const BecomeCreator = () => {
  return (
    <div className="pb-[3rem] pt-[5rem] bg-gradient-to-b from-[#324270]  to-[#40538f]">
      <div className="text-center">
        <div className="heading__mini">Become A creator</div>
        <h1 className="heading__primary">
          Creat and <span className="text-red-600"> SELL</span> Your Nfts
        </h1>
      </div>
      <div className="w-[80%] m-auto mt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <div className="bg-[#1a184769] hover:bg-[#1A225C] transition-all cursor-pointer duration-300 rounded-md p-4">
          <RocketLaunchIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-[#a4ccef]" />
          <h1 className="mt-[1rem] text-[20px] text-white">
            Setup Your Wallet
          </h1>
          <p className="mt-[1rem] text-[15px] text-white opacity-85">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            voluptate.
          </p>
          <button className="mt-[1rem] text-[17px] hover:text-[#6779fe] text-white underline">
            Read More
          </button>
        </div>

        <div className="bg-[#1a184769] hover:bg-[#1A225C] transition-all cursor-pointer duration-300 rounded-md p-4">
          <ChartPieIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-[#efe4a4] " />
          <h1 className="mt-[1rem] text-[20px] text-white">
            Setup Your Wallet
          </h1>
          <p className="mt-[1rem] text-[15px] text-white opacity-85">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            voluptate.
          </p>
          <button className="mt-[1rem] text-[17px] hover:text-[#6779fe] text-white underline">
            Read More
          </button>
        </div>

        <div className="bg-[#1a184769] hover:bg-[#1A225C] transition-all cursor-pointer duration-300 rounded-md p-4">
          <InformationCircleIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-[#a4efa4]" />
          <h1 className="mt-[1rem] text-[20px] text-white">
            Setup Your Wallet
          </h1>
          <p className="mt-[1rem] text-[15px] text-white opacity-85">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            voluptate.
          </p>
          <button className="mt-[1rem] text-[17px] hover:text-[#6779fe] text-white underline">
            Read More
          </button>
        </div>

        <div className="bg-[#1a184769] hover:bg-[#1A225C] transition-all cursor-pointer duration-300 rounded-md p-4">
          <PresentationChartBarIcon className="w-[4rem] h-[4rem] mt-[1.5rem] text-[#d6a4ef]" />
          <h1 className="mt-[1rem] text-[20px] text-white">
            Setup Your Wallet
          </h1>
          <p className="mt-[1rem] text-[15px] text-white opacity-85">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
            voluptate.
          </p>
          <button className="mt-[1rem] text-[17px] hover:text-[#6779fe] text-white underline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BecomeCreator;
