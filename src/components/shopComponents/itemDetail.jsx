import React, { useState, useEffect } from "react";
import { useRouter } from "react-router-dom";
import Link from "next/link";
import arrow from "../../../public/assets/arrowImage.svg";
import fullStar from "../../../public/assets/fullStar.svg";
import halfStar from "../../../public/assets/halfStar.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import ColorSelector from "./colorSelector";
import SizeChoise from "./sizeChoise";
import ItemSku from "./itemSku";
import ItemCart from "./itemCart";

const ItemDetail = ({product}) => {

  const { id, imageUrl, title, price } = product;

  return (
    <section>
      <div className="flex items-center gap-2 text-base mb-5 ml-4">
        <Link href={"/"}>Home</Link>
        <img src={arrow} alt="arrow" />
        <Link href={"/shop"}>Shop</Link>
        <img src={arrow} alt="arrow" />
        <div className="ml-2 h-8 border border-[#9F9F9F]" />
        <p className="text-black text-base font-normal">{title}</p>
      </div>
      <section className="flex p-5">
        <div className="flex flex-col gap-8 mr-8">
          <img src={product.imageUrl} alt="smallPhotos" />
          <img src={product.imageUrl} alt="smallPhotos" />
          <img src={product.imageUrl} alt="smallPhotos" />
          <img src={product.imageUrl} alt="smallPhotos" />
        </div>
        <aside className=" flex-1">
          <img className="w-full h-[600px]" src={imageUrl} alt="Item" />
        </aside>
        <aside className="flex-1 pl-5 h-min box-border">
          <h2 className="text-black text-4xl font-normal">{title}</h2>
          <span className=" h-min flex items-center gap-52">
            <h4 className="text-[#9F9F9F] text-2xl font-medium">
              {price}
            </h4>
            <IoMdHeartEmpty color="red" size={25} />
          </span>
          <span className="items-center flex">
            <img src={fullStar} alt="star" />
            <img src={fullStar} alt="star" />
            <img src={fullStar} alt="star" />
            <img src={fullStar} alt="star" />
            <img src={halfStar} alt="star" />
            <div className="ml-2 h-8 border border-[#9F9F9F]" />
            <h5 className="text-[#9F9F9F] font-normal text-sm">
              5 Customer Review
            </h5>
          </span>
          <p className="text-black text-sm font-normal">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <h5>Size</h5>
          <SizeChoise />
          <h5>Color</h5>
          <ColorSelector />
          <ItemCart />
          <div className=" w-11/12 mt-16 border" />
          <ItemSku />
        </aside>
      </section>
    </section>
  );
};

export default ItemDetail;
