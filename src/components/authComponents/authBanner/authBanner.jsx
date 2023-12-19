import React from "react";
import "./authBannerStyle.css";

const Banner = () => {
  return (
    <div className="m-0 p-0 flex bg-[#FAF4F4]">
      <div className="flex-1 p-5 m-1 text-center">
        <h4 className="text-black text-3xl font-medium">Free Delivery</h4>
        <p className="text-[#9F9F9F] text-5xl font-normal">
          For all oders over $50, consectetur adipim scing elit.
        </p>
      </div>
      <div className="flex-1 p-5 m-1 text-center">
        <h4 className="text-black text-3xl font-medium">90 Days Return</h4>
        <p className="text-[#9F9F9F] text-5xl font-normal">
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
      <div className="flex-1 p-5 m-1 text-center">
        <h4 className="text-black text-3xl font-medium">Secure Payment</h4>
        <p className="text-[#9F9F9F] text-5xl font-normal">
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </div>
  );
};

export default Banner;
