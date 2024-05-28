import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pb-[3rem] pt-[5rem] bg-gradient-to-b from-[#324270]  to-[#40538f]">
      <div className="w-[80%] mx-auto border-b-[1.2px] pb-[2rem] border-b-slate-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        <div>
          <h1 className="text-[20px] sm:text-[30px] text-white">
            NFTpro<span className="text-red-500">X</span>
          </h1>
          <p className="text-[14px] text-white opacity-60 mt-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptatum saepe fuga excepturi quod, necessitatibus unde facere
            quisquam obcaecati cum a ullam tempora quis perferendis consequatur
            nihil voluptas? Consectetur, commodi.
          </p>
          <p className="text-[14px] mt-[1.4rem] text-white opacity-80">
            (+600) 1254 1546 21 - info@example.com
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Information</h1>
          <p className="footer__linke">About Us</p>
          <p className="footer__linke">Privacy Police</p>
          <p className="footer__linke">Wallet</p>
          <p className="footer__linke">Bidding</p>
          <p className="footer__linke">FAQ</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Acount</h1>
          <p className="footer__linke">About Us</p>
          <p className="footer__linke">My Bidding</p>
          <p className="footer__linke">My Wishlist</p>
          <p className="footer__linke">Acount Details</p>
          <p className="footer__linke">Track My Sell</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-[20px] text-white mb-[1.5rem]">Shop</h1>
          <p className="footer__linke">About Us</p>
          <p className="footer__linke">Affiliate</p>
          <p className="footer__linke">Bestellers</p>
          <p className="footer__linke">Discount</p>
          <p className="footer__linke">Latest Product</p>
          <p className="footer__linke">Sale Products</p>
        </div>
      </div>

      <div className="mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto">
        <p className="text-[14px] text-white opacity-60">
          &#169; Copyright NFTpro 2024
        </p>
        <Image
          src={"/images/pay.png"}
          alt="Pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
