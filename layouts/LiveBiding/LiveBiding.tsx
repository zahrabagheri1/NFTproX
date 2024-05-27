import BidSlider from "@/components/BidSlider/BidSlider";
import React from "react";

const LiveBiding = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gradient-to-b from-[#203169]  to-[#192652]">
      <div className="text-center">
        <p className="heading__mini">LiveBiding</p>
        <h1 className="heading__primary">
            Live <span className="text-red-600">Bidding</span>
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[5rem]">
        <BidSlider/>
      </div>
    </div>
  );
};

export default LiveBiding;
