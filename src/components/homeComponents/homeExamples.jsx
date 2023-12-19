import Image from "next/image";
import React from "react";
import Side1 from "../../../public/assets/sideTable1.png";
import Side2 from "../../../public/assets/sideTable2.png";

const HomeExamples = () => {
  return (
    <div className="flex justify-around mb-8 items-center bg-[#FAF4F4] p-16 w-full">
      <div>
        <Image src={Side1} width={400} height={400} />
        <h3 className="text-4xl font-medium text-black mb-4">Side table</h3>
        <h3 className="text-black text-xl font-medium mb-4">View More</h3>
        <div className="bg-black h-0.5 w-28"></div>
      </div>
      <div>
        <Image src={Side2} width={432} height={432} />
        <h3 className="text-4xl font-medium text-black mb-4">Side table</h3>
        <h3 className="text-black text-xl font-medium mb-4">View More</h3>
        <div className="bg-black h-0.5 w-28"></div>
      </div>
    </div>
  );
};

export default HomeExamples;
