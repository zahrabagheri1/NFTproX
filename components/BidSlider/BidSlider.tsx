import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NftCard from "../NftCard/NftCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlids: 1,
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlids: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlids: 1,
  },
};

const BidSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <div className="">
        <NftCard
          image={"ArtMonkeyFive"}
          title={"Warriros"}
          author={"sigal"}
          price={"3.25"}
        />
      </div>
      <div className="">
        <NftCard
          image={"ArtMonkeyNine"}
          title={"Meata Forted"}
          author={"hidden"}
          price={"5.25"}
        />
      </div>
      <div className="">
        <NftCard
          image={"ArtMonkeySix"}
          title={"Forted"}
          author={"pishroo"}
          price={"8.25"}
        />
      </div>
      <div className="">
        <NftCard
          image={"ArtMonkeyTwo"}
          title={"Forted Eatern"}
          author={"hossein"}
          price={"6.25"}
        />
      </div>
      <div className="">
        <NftCard
          image={"ArtMonkeyThree"}
          title={"Eastern"}
          author={"nazgol"}
          price={"10.25"}
        />
      </div>
      <div className="">
        <NftCard
          image={"ArtMonkeyOne"}
          title={"Eastern"}
          author={"asqar"}
          price={"10.25"}
        />
      </div>
    </Carousel>
  );
};

export default BidSlider;
