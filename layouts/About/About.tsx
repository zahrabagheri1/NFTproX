import Image from "next/image";
import React from "react";
import aboutImaage from "../../public/images/NFT-Token.jpg";

const About = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gradient-to-b from-[#000000af]  to-[#324270]">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-[3rem]">
        <div
          className="md:w-[500px] md:h-[600px] w-[80%] h-[80%] border-[3px] flex items-center justify-center
            border-gray-400 rounded-lg"
        >
          <Image
            src={aboutImaage}
            alt="abou"
            height={450}
            width={450}
            className="-rotate-12 rounded-lg"
          ></Image>
        </div>
        <div className="">
          <p className="heading__mini">About Us</p>
          <h1 className="heading__primary">
            Discover More Collect and Sell Rare NFTs
          </h1>
          <p className="text-[15px] md:text-[17px] mt-[1rem] mb-[1rem] text-white opacity-80">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            delectus ad, et molestias odio dolor nesciunt iure. Eius, sunt
            mollitia! Provident, consequuntur delectus nobis qui amet recusandae
            corrupti totam distinctio saepe necessitatibus obcaecati reiciendis
            dolores?
          </p>
          <p className="text-[15px] md:text-[17px] mt-[1rem] mb-[1rem] text-white opacity-80">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
            delectus ad, et molestias odio dolor nesciunt iure. Eius, sunt
            mollitia! Provident, consequuntur delectus nobis qui amet recusandae
            corrupti totam distinctio saepe necessitatibus obcaecati reiciendis
            dolores?
          </p>

          <button className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 h-12 w-40 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#19215def]"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#1100ff6d] group-hover:-rotate-180 ease"></span>
              <span className="relative z-10">Read Hero</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
