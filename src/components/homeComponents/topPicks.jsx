import React from "react";
import ItemCard from "../shopComponents/itemCard";

const TopPicks = () => {
  const data = [
    {
      id: 0,
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      imageUrl:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg&w=1920&h=1234&_gl=1*1jov2ta*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzA5My4wLjAuMA..",
    },
    {
      id: 1,
      title: "Hudson sectional sofa",
      price: "Rs. 28,500.00",
      imageUrl:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-1350789.jpg&fm=jpg&w=1920&h=1228&_gl=1*sbbnkl*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI0NC4wLjAuMA..",
    },
    {
      id: 2,
      title: "Aria leather couch",
      price: "Rs. 32,000.00",
      imageUrl:
        "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg&w=1920&h=1387&_gl=1*4q8fd6*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI3NS4wLjAuMA..",
    },
    {
      id: 3,
      title: "Savannah fabric sofa",
      price: "Rs. 22,800.00",
      imageUrl:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg&w=1920&h=1251&_gl=1*10tviyb*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI5OC4wLjAuMA..",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-black text-4xl font-normal mb-4 mt-16">
        Top Picks For You
      </h2>
      <p className="text-[#9F9F9F] text-base font-medium mb-16">
        Find a bright ideal to suit your taste with our great selection of
        suspension, floor and table lights.
      </p>
      <div className="flex gap-8">
        <ItemCard item={data[0]} />
        <ItemCard item={data[1]} />
        <ItemCard item={data[2]} />
        <ItemCard item={data[3]} />
      </div>
      <div className="my-20">
        <h3 className="text-black text-xl font-medium mb-4">View More</h3>
        <div className="bg-black h-0.5 w-28"></div>
      </div>
    </div>
  );
};

export default TopPicks;
