import React, { useEffect } from "react";
import {
  SlidersHorizontal,
  Grip,
  AlignVerticalSpaceAround,
} from "lucide-react";

const Filter = ({currentPage}) => {

  return (
    <div className="flex justify-around w-full items-center my-4 bg-[#FAF4F4] p-8">
      <div className="flex gap-4 items-center">
        <SlidersHorizontal color="black"/>
        <p className="text-black text-xl font-normal">Filter</p>
        <Grip color="black"/>
        <AlignVerticalSpaceAround color="black"/>
        <div className="bg-[#9F9F9F] w-0.5 h-6"></div>
        <p className="text-black text-base font-normal">Showing {currentPage == 1 ? '1-12' : currentPage == 2 ? '13-24' : '24-32'} of 32 results</p>
      </div>
      <div className="flex items-center gap-4">
        <h5 className="text-black text-xl font-normal">Show</h5>
        <p className="text-[#9F9F9F] text-xl font-normal bg-white p-2 px-4">12</p>
        <h5 className="text-black text-xl font-normal">Sort by</h5>
        <p className="text-[#9F9F9F] text-xl font-normal bg-white p-2 px-4">Default</p>
      </div>
    </div>
  );
};

export default Filter;
