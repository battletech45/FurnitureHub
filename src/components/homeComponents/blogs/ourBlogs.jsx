import React from "react";
import Blog1 from "../../../../public/assets/blog1.png";
import Blog2 from "../../../../public/assets/blog2.png";
import Blog3 from "../../../../public/assets/blog3.png";
import BlogCard from "./blogCard";

const OurBlogs = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-black text-4xl font-normal mb-4 mt-16">Our Blogs</h2>
      <p className="text-[#9F9F9F] text-base font-medium mb-16">
        Find a bright ideal to suit your taste with our great selection
      </p>
      <div className="flex items-center gap-12">
        <BlogCard image={Blog1} />
        <BlogCard image={Blog2} />
        <BlogCard image={Blog3} />
      </div>
      <div className="my-20">
        <h3 className="text-black text-xl font-medium mb-4">View All Post</h3>
        <div className="bg-black h-0.5 w-28"></div>
      </div>
    </div>
  );
};

export default OurBlogs;
