"use client";
import React, { useState } from "react";
import ItemCard from "./itemCard";
import Link from "next/link";
import Filter from "./filter";
import { useProducts } from "@/data/useProductStore";

const ItemList = ({ itemsPerPage }) => {
  const {products} = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full">
      <Filter currentPage={currentPage}/>
      <div className="grid gap-x-8 gap-y-8 grid-cols-4 place-items-center">
        {currentItems.map((item) => (
          <Link href={`/${item.id}`}>
            <ItemCard key={item.id} item={item} />
          </Link>
        ))}
      </div>
      <div className="flex gap-4 justify-center mt-12 mb-6">
        {Array.from(
          { length: Math.ceil(products.length / itemsPerPage) },
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
