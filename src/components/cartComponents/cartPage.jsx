import React from "react";
import Navbar from "../navbar";
import HeroBanner from "../banner";
import itemPhoto from "../../../public/assets/asgardItem.png";
import CartItem from "./cartItem";
import Image from "next/image";
import Banner from "../authComponents/authBanner/authBanner";
import Footer from "../authComponents/authFooter/authFooter";
import Link from "next/link";

const CartPage = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <Navbar bgColor={"white"} />
      <HeroBanner title={"Cart"} />
      <div className="flex justify-around items-start mb-16 gap-12">
        <div>
          <div className="flex gap-9 items-center py-4 px-36 bg-[#FFF9E5]">
            <p className="text-black text-base font-medium pr-20">Product</p>
            <p className="text-black text-base font-medium pr-28">Price</p>
            <p className="text-black text-base font-medium">Quantity</p>
            <p className="text-black text-base font-medium">Subtotal</p>
          </div>
          <CartItem
            photo={<Image src={itemPhoto} width={100} height={100} />}
            title={"Asgaard sofa"}
            price={"Rs. 250,000.00"}
            count={"1"}
          />
        </div>
        <div className="flex flex-col items-center justify-start px-5 py-8 bg-[#FFF9E5] w-96 h-96">
          <h3 className="text-black text-4xl font-semibold mb-16">
            Cart Totals
          </h3>
          <div className="flex justify-between mb-8 gap-12 items-center">
            <h4 className="text-black text-base font-medium mr-1">Subtotal</h4>
            <p className="text-[#9F9F9F] text-base font-normal">
              Rs. 250,000.00
            </p>
          </div>
          <div className="flex justify-between mb-12 gap-12 items-center">
            <h4 className="text-black text-base font-medium">Total</h4>
            <p className="text-[#B88E2F] text-xl font-medium">Rs. 250,000.00</p>
          </div>
          <Link href={'/checkout'}>
            <button
              type="submit"
              className="py-2 px-12 rounded-2xl border border-black cursor-pointer text-black text-xl font-normal w-52 mb-20 h-14"
            >
              Check out
            </button>
          </Link>
        </div>
      </div>
      <Banner />
      <Footer />
      <div className="bg-[#D9D9D9] w-9/12 h-0.5 items-center justify-center flex my-12"></div>
      <div className="justify-start items-start flex w-9/12">
        <p className="text-black text-base font-normal mb-8">
          2022 Meubel House. All rights reverved
        </p>
      </div>
    </div>
  );
};

export default CartPage;
