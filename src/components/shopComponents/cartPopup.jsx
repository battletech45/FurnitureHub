import React from "react";
import Image from "next/image";
import Close from "../../../public/assets/closeCart.svg";
import { XCircle } from "lucide-react";
import Link from "next/link";

const CartPopup = ({ photo, title, price, quantity, closeFunction }) => {

  function toggleBodyScroll() {
    const body = document.querySelector("body");
    body.classList.toggle("overflow-hidden");
  }

  return (
    <>
      <div className="absolute z-40 inset-0 bg-black/20"></div>
      <div className="flex flex-col items-start justify-between p-8 w-[26rem] h-[46rem] absolute top-0 right-0 z-50 bg-white">
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-black text-2xl font-semibold">Shopping Cart</h3>
            <Image
              src={Close}
              width={20}
              height={20}
              onClick={() => closeFunction()}
              className="cursor-pointer"
            />
          </div>
          <div className="bg-[#D9D9D9] w-[19rem] h-0.5 items-center justify-center flex my-12"></div>
          <div className="flex items-center justify-between">
            <img
              src={photo}
              alt="smallPhotos"
              width={100}
              height={100}
              className=" rounded-xl"
            />
            <div>
              <p className="text-black text-base font-normal">{title}</p>
              <div className="flex items-center gap-4 items-center justify-start">
                <p className="text-black text-base font-light">{quantity}</p>
                <p className="text-black text-base font-light">X</p>
                <p className="text-[#B88E2F] text-xs font-medium">{price}</p>
              </div>
            </div>
            <XCircle color="black" />
          </div>
        </div>
        <div>
          <div className="flex item-center justify-between">
            <p className="text-black text-base font-normal">Subtotal</p>
            <p className="text-[#B88E2F] text-base font-semibold">{price}</p>
          </div>
          <div className="bg-[#D9D9D9] w-full h-0.5 items-center justify-center flex my-8"></div>
          <div className="flex items-center justify-around gap-4">
            <Link href={"/cart"}>
              <button className="bg-white text-black py-2 px-10 rounded-3xl border border-black cursor-pointer text-xl font-normal" onClick={toggleBodyScroll}>
                View Cart
              </button>
            </Link>
            <Link href={"/checkout"}>
              <button className="bg-white text-black py-2 px-10 rounded-3xl border border-black cursor-pointer text-xl font-normal" onClick={toggleBodyScroll}>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPopup;
