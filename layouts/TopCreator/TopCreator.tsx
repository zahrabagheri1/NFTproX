import React from "react";
import CreatorCard from "../../components/CreatorCard/CreatorCard";

const TopCreator = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gradient-to-b from-[#192652]  to-[#284192]">
      <div className="text-center">
        <p className="heading__mini">Creator</p>
        <h1 className="heading__primary">
          Top <span className="text-red-600">Creator</span> of Today
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[5rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[1rem]">
        <div data-aos='zoom-in' data-aos-achor-placement="top-center">
          <CreatorCard image={"AvatarOne"} user={"Douglas Williams"} price={"734.5"} />
        </div>
        <div data-aos='zoom-in' data-aos-achor-placement="top-center" data-aos-delay="100">
          <CreatorCard image={"AvatarTwo"} user={"James White"} price={"804.5"} />
        </div>
        <div data-aos='zoom-in' data-aos-achor-placement="top-center" data-aos-delay="200">
          <CreatorCard image={"AvatarThree"} user={"Clarence Wheeler"} price={"624.5"} />
        </div>
        <div data-aos='zoom-in' data-aos-achor-placement="top-center" data-aos-delay="300">
          <CreatorCard image={"AvatarFour"} user={"Beverly Perry"} price={"948.5"} />
        </div>
        <div data-aos='zoom-in' data-aos-achor-placement="top-center" data-aos-delay="400">
          <CreatorCard image={"AvatarFive"} user={"John Kennedy"} price={"325.5"} />
        </div>
        <div data-aos='zoom-in' data-aos-achor-placement="top-center" data-aos-delay="500">
          <CreatorCard image={"AvatarSix"} user={"Sarah Perry"} price={"764.5"} />
        </div>
      </div>
    </div>
  );
};

export default TopCreator;
