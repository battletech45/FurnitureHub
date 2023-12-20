import React from "react";
import Image from "next/image";
import { User, Calendar, Tag } from "lucide-react";


const BlogItem = ({ tag, title, photo}) => {
  return (
    <div className="flex flex-col justify-start w-[817px] mb-8">
      <Image src={photo} width={817} height={500} alt="laptop" />
      <div className="mt-4 gap-8 flex">
        <div className="flex items-center gap-2">
          <User color="#9F9F9F" />
          <p className="text-[#9F9F9F] text-base font-normal">Admin</p>
        </div>
        <div className=" flex items-center gap-2">
          <Calendar color="#9F9F9F" />
          <p className="text-[#9F9F9F] text-base font-normal">14 Oct 2022</p>
        </div>
        <div className=" flex items-center gap-2">
          <Tag color="#9F9F9F" />
          <p className="text-[#9F9F9F] text-base font-normal">{tag}</p>
        </div>
      </div>
      <h3 className="text-black text-3xl font-medium my-4">{title}</h3>
      <p className="text-[#9F9F9F] text-justify text-base font-normal leading-6 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
        ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
        aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a
        iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
        Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et
        ultrices neque ornare aenean euismod elementum.
      </p>
      <h3 className="text-black text-xl font-medium mb-2">Read More</h3>
      <div className="bg-black h-0.5 w-28"></div>
    </div>
  );
};

export default BlogItem;
