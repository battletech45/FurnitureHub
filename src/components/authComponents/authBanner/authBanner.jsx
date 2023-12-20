import React from "react";

const Banner = () => {
  return (
    <div className="m-0 p-12 flex bg-[#FAF4F4] w-full justify-center gap-12 py-16">
      <div className="flex flex-col p-5 m-1 text-center">
        <h4 className="text-black text-3xl font-medium">Free Delivery</h4>
        <p className="text-[#9F9F9F] text-xl font-normal w-96">
          For all oders over $50, consectetur adipim scing elit.
        </p>
      </div>
      <div className="flex flex-col p-5 m-1 text-center">
        <h4 className="text-black text-3xl font-medium">90 Days Return</h4>
        <p className="text-[#9F9F9F] text-xl font-normal w-96">
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
      <div className="flex flex-col p-5 m-1 text-center">
        <h4 className="text-black text-3xl font-medium">Secure Payment</h4>
        <p className="text-[#9F9F9F] text-xl font-normal w-96">
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </div>
  );
};

export default Banner;
