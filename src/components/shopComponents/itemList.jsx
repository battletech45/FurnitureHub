"use client";
import React, { useState } from "react";
import ItemCard from "./itemCard";
import Link from "next/link";

const ItemList = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="grid gap-x-8 gap-y-8 grid-cols-4 place-items-center">
        {currentItems.map((item) => (
          <Link href={{pathname: '/itemDetail', query: {itemID: `${item.id}`}}}>
            <ItemCard key={item.id} item={item} />
          </Link>
        ))}
      </div>
      <div className="flex gap-4 justify-center mt-12 mb-6">
        {Array.from(
          { length: Math.ceil(items.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={
                currentPage === index + 1
                  ? "border cursor-pointer bg-[#FBEBB5] mx-[5px] my-0 px-3 py-2 rounded-[5px] border-solid border-[#ccc] text-black"
                  : "border cursor-pointer bg-[#FFF9E5] mx-[5px] my-0 px-3 py-2 rounded-[5px] border-solid border-[#ccc] text-black"
              }
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};
export default ItemList;
