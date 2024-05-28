import NftCard from "@/components/NftCard/NftCard";
import React from "react";

const PopularNFT = () => {
  return (
    <div className="pt-[5rem] pd-[3rem] bg-gradient-to-b from-[#40538f]  to-[#203169]">
      <div className="text-center">
        <p className="heading__mini">Popular Item</p>
        <h1 className="heading__primary">
          Explor <span className="text-red-600">popular</span> Nfts
        </h1>
      </div>
      <div className="w-[80%] pt-[5rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]">
        <div data-aos='fade-up' data-aos-achor-placement="top-center">
          <NftCard
            image={"ArtMonkeyFive"}
            title={"Warriros"}
            author={"sigal"}
            price={"3.25"}
          />
        </div>
        <div data-aos='fade-up' data-aos-achor-placement="top-center" data-aos-delay="100">
          <NftCard
            image={"ArtMonkeyNine"}
            title={"Meata Forted"}
            author={"hidden"}
            price={"5.25"}
          />
        </div>
        <div data-aos='fade-up' data-aos-achor-placement="top-center" data-aos-delay="200">
          <NftCard
            image={"ArtMonkeySix"}
            title={"Forted"}
            author={"pishroo"}
            price={"8.25"}
          />
        </div>
        <div data-aos='fade-up' data-aos-achor-placement="top-center" data-aos-delay="300">
          <NftCard
            image={"ArtMonkeyTwo"}
            title={"Forted Eatern"}
            author={"hossein"}
            price={"6.25"}
          />
        </div>
        <div data-aos='fade-up' data-aos-achor-placement="top-center" data-aos-delay="400">
          <NftCard
            image={"ArtMonkeyThree"}
            title={"Eastern"}
            author={"nazgol"}
            price={"10.25"}
          />
        </div>
        <div data-aos='fade-up' data-aos-achor-placement="top-center" data-aos-delay="500">
          <NftCard
            image={"ArtMonkeyOne"}
            title={"Eastern"}
            author={"asqar"}
            price={"10.25"}
          />
        </div>
      </div>
    </div>
  );
};

export default PopularNFT;
