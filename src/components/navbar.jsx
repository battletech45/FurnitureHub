import React from "react";
import {
  IoMdPerson,
  IoMdSearch,
  IoMdHeartEmpty,
  IoMdCart,
} from "react-icons/io";

const Navbar = ({bgColor}) => {
  return (
    <nav className={`flex items-center ${bgColor} text-white relative px-12 p-8 w-ful`}>
      <div className="w-full justify-center flex gap-14">
        <a
          className="text-[black] text-base not-italic font-medium leading-[normal] no-underline"
          href="/"
        >
          Home
        </a>
        <a
          className="text-[black] text-base not-italic font-medium leading-[normal] no-underline"
          href="/shop"
        >
          Shop
        </a>
        <a
          className="text-[black] text-base not-italic font-medium leading-[normal] no-underline"
          href="/about"
        >
          About
        </a>
        <a
          className="text-[black] text-base not-italic font-medium leading-[normal] no-underline"
          href="/contact"
        >
          Contact
        </a>
      </div>

      <div className="flex gap-8 absolute w-max right-12">
        <IoMdPerson className="text-2xl text-[black] ml-[15px]" />
        <IoMdSearch className="text-2xl text-[black] ml-[15px]" />
        <IoMdHeartEmpty className="text-2xl text-[black] ml-[15px]" />
        <IoMdCart className="text-2xl text-[black] ml-[15px]" />
      </div>
    </nav>
  );
};

export default Navbar;
