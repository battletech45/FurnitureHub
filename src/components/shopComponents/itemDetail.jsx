import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useProducts } from "@/data/useProductStore";
import Image from "next/image";
import arrow from "../../../public/assets/arrowImage.svg";
import fullStar from "../../../public/assets/fullStar.svg";
import halfStar from "../../../public/assets/halfStar.svg";
import { Heart } from "lucide-react";
import ColorSelector from "./colorSelector";
import SizeChoise from "./sizeChoise";
import ItemSku from "./itemSku";
import ItemDescription from "./itemDescription";
import ItemCart from "./itemCart";
import Navbar from "../navbar";
import Footer from "../authComponents/authFooter/authFooter";
import TopPicks from "../homeComponents/topPicks";
import CartPopup from "./cartPopup";

const ItemDetail = ({ itemID }) => {
  const {products} = useProducts();
  const [product, setProduct] = useState({});
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {/*
    const body = document.querySelector('body');
    body.classList.toggle('overflow-hidden');
    */
    setIsShown(!isShown);
}

  useEffect(() => {
    const product = products[itemID];
    console.log(product);
    setProduct(product);
  }, [itemID]);

  return (
    <div className="bg-white flex flex-col justify-center">
      <Navbar />
      <div className="flex items-center gap-2 text-base mb-5 pl-32 bg-white">
        <Link href={"/"} className="text-black">
          Home
        </Link>
        <Image src={arrow} alt="arrow" width={20} height={20} />
        <Link href={"/shop"} className="text-black">
          Shop
        </Link>
        <Image src={arrow} alt="arrow" width={20} height={20} />
        <div className="ml-2 h-8 border border-[#9F9F9F]" />
        <p className="text-black text-base font-normal">{product.title}</p>
      </div>
      <section className="flex p-5 pl-32 justify-between">
        <div className="flex flex-col gap-8 mr-8">
          <img
            src={product.imageUrl}
            alt="smallPhotos"
            width={83}
            height={55}
            className=" rounded-xl"
          />
          <img
            src={product.imageUrl}
            alt="smallPhotos"
            width={83}
            height={55}
            className=" rounded-xl"
          />
          <img
            src={product.imageUrl}
            alt="smallPhotos"
            width={83}
            height={55}
            className=" rounded-xl"
          />
          <img
            src={product.imageUrl}
            alt="smallPhotos"
            width={83}
            height={55}
            className=" rounded-xl"
          />
        </div>
        <aside className=" flex-1">
          <img
            className="w-full h-[600px] rounded-2xl"
            src={product.imageUrl}
            alt="Item"
          />
        </aside>
        <aside className="flex-1 pl-8 h-min box-border">
          <h2 className="text-black text-4xl font-normal mb-4">
            {product.title}
          </h2>
          <span className=" h-min flex items-center gap-52 mb-4">
            <h4 className="text-[#9F9F9F] text-2xl font-medium">
              Rs. {product.price}.00
            </h4>
            <Heart color="red" size={25} />
          </span>
          <span className="items-center flex gap-4 mb-4">
            <Image src={fullStar} alt="star" width={20} height={20} />
            <Image src={fullStar} alt="star" width={20} height={20} />
            <Image src={fullStar} alt="star" width={20} height={20} />
            <Image src={fullStar} alt="star" width={20} height={20} />
            <Image src={halfStar} alt="star" width={20} height={20} />
            <div className="ml-2 h-8 border border-[#9F9F9F]" />
            <h5 className="text-[#9F9F9F] font-normal text-sm">
              5 Customer Review
            </h5>
          </span>
          <p className="text-black text-sm font-normal mb-4 w-[424px]">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <h5 className="text-[#9F9F9F] text-base font-normal my-4">Size</h5>
          <SizeChoise />
          <h5 className="text-[#9F9F9F] text-base font-normal my-4">Color</h5>
          <ColorSelector />
          <ItemCart handleFunction={toggleShown} product={product}/>
          <div className=" w-11/12 mt-16 border my-4" />
          <ItemSku />
        </aside>
      </section>
      <div className="w-full border border-[#FFFFFF] my-4"></div>
      <ItemDescription />
      <TopPicks title={"Related Products"} />
      <Footer />
      <div className="flex flex-col items-center">
        <div className="bg-[#D9D9D9] w-9/12 h-0.5 items-center justify-center flex my-12"></div>
        <div className="justify-start items-start flex w-9/12">
          <p className="text-black text-base font-normal mb-8">
            2022 Meubel House. All rights reverved
          </p>
        </div>
      </div>
      {isShown && (
        <CartPopup
          product={product}
          closeFunction={toggleShown}
        />
      )}
    </div>
  );
};

export default ItemDetail;
