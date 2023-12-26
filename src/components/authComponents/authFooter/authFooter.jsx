"use client";
import React from "react";

const Footer = () => {

  return (
    <footer className=" pl-20 flex justify-center items-start mt-4 w-full">
      <div className="flex flex-col items-center mt-[7%] w-1/4">
        <p className="text-[#9F9F9F] text-base font-normal mt-2">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>
      </div>

      <div className="flex flex-col items-start py-4 px-16">
        <h4 className="text-[#9F9F9F] text-base font-medium mb-12">Links</h4>
        <div className="flex flex-col items-start gap-12">
          <a href="/" className="text-black text-base font-medium">
            Home
          </a>
          <a href="/shop" className="text-black text-base font-medium">
            Shop
          </a>
          <a href="/blog" className="text-black text-base font-medium">
            Blog
          </a>
          <a href="/contact" className="text-black text-base font-medium">
            Contact
          </a>
        </div>
      </div>

      <div className="flex flex-col items-start py-4 px-16">
        <h4 className="text-[#9F9F9F] text-base font-medium mb-12">Help</h4>
        <div className="flex flex-col items-start gap-12">
          <a href="#" className="text-black text-base font-medium">
            Payment Options
          </a>
          <a href="#" className="text-black text-base font-medium">
            Returns
          </a>
          <a href="#" className="text-black text-base font-medium">
            Privacy Policies
          </a>
        </div>
      </div>

      <div className="flex flex-col items-start py-4 px-16">
        <h4 className="text-[hsl(0,0%,62%)] text-base font-medium mb-8">
          Newsletter
        </h4>
        <div className="flex items-end gap-4">
          <input
            className=" border-b border-black outline-none w-56 p-2 placeholder-black"
            type="text"
            placeholder="Enter Your Email Address"
          />
          <button className="p-0 pb-3 outline-0 rounded-none border-b border-b-black text-black text-sm font-medium">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
