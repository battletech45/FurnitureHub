import React from "react";
import Image from "next/image";
import { User, UserRound } from "lucide-react";
import blogPhoto from "../../../public/assets/blogFirst.png";

const BlogItem = () => {
  return (
    <div className="flex flex-col justify-start">
      <Image src={blogPhoto} width={817} height={500} alt="laptop" />
      <div>
        <div>
          <User />
          Admin
        </div>
        <div>14 Oct 2022</div>
        <div>Wood</div>
      </div>
    </div>
  );
};

export default BlogItem;
