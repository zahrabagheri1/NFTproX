import About from "@/layouts/About/About";
import BecomeCreator from "@/layouts/BecomeCreator/BecomeCreator";
import Hero from "@/layouts/Hero/Hero";
import LiveBiding from "@/layouts/LiveBiding/LiveBiding";
import Navbar from "@/layouts/Navbar/Navbar";
import PopularNFT from "@/layouts/PopularNFT/PopularNFT";
import TopCreator from "@/layouts/TopCreator/TopCreator";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/layouts/Footer/Footer";

const index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <BecomeCreator />
      <PopularNFT />
      <LiveBiding />
      <TopCreator />
      <Footer />
    </div>
  );
};

export default index;
