import React from "react";
import nftRight from "../../public/images/nft-icon.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[60vh] sm:h-[88vh] bg-[#] flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-[88%] mx-auto gap-[10rem]">
        <div className="flex flex-col gap-10 mt-[2rem] sm:mt-0">
          <div className="">
            <h1 className="ttext-[30px] md:text-[40px] lg:text-[50px] leading-[2rem] sm:leading-[4rem] text-white">
              {" "}
              Sell Your Real Nfts & Earn Money
            </h1>
            <p className="mt-[1rem] text-white opacity-80 text-[15px] md:text-[17px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              laudantium illo! Inventore quo ex dolorum, animi minus fugiat quae
              cupiditate sint voluptates, quam quaerat ea libero veniam
              dignissimos, reprehenderit incidunt.
            </p>
          </div>

          <button className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 h-12 w-40 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#19215def]"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#1100ff6d] group-hover:-rotate-180 ease"></span>
              <span className="relative z-10">Get Started</span>
            </span>
          </button>
        </div>
        <div className="hidden sm:block sm:auto lg:mx-0">
          <Image
            src={nftRight}
            alt="hero"
            width={500}
            height={500}
            className="object-contain"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
