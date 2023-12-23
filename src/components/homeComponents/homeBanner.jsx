import React from "react";
import Image from "next/image";
import Sofa from "../../../public/assets/rocket.png";
import Navbar from "../navbar";

const HomeBanner = () => {
  return (
    <div className="bg-[#FBEBB5] w-full h-screen justify-around items-center border border-red-500">
      <Navbar bgColor={"white"} />
      <div className="w-full flex items-center justify-between px-8">
        <div>
          <h1 className="text-black text-[4rem] font-medium w-9/12">
            Rocket single seater
          </h1>
          <p className="text-black text-2xl font-medium">Shop Now</p>
          <div className="bg-black w-32 h-0.5"></div>
        </div>
        <Image src={Sofa} width={853} height={300} alt="homeBannerSofa" />
      </div>
    </div>
  );
};

export default HomeBanner;
