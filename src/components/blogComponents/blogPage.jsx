import React from "react";
import Navbar from "../navbar";
import HeroBanner from "../banner";

const BlogPage = () => {
  return (
    <div className="bg-white">
      <Navbar bgColor={'white'}/>
      <HeroBanner title={'Blog'}/>
      <div></div>
      
    </div>
  );
};

export default BlogPage;
