import React from "react";
import Navbar from "../navbar";
import HeroBanner from "../banner";
import ContactField from "../contactComponents/contactField";
import CheckoutPicker from "./checkoutPicker";
import CheckoutBill from "./checkoutBill";
import Banner from "../authComponents/authBanner/authBanner";
import Footer from "../authComponents/authFooter/authFooter";
import { useCart } from "@/data/useCartStore";

const CheckoutPage = () => {

  const { cart } = useCart();

  return (
    <div className="bg-white flex flex-col">
      <Navbar bgColor={"white"} />
      <HeroBanner title={"Checkout"} />
      <div className="flex justify-around items-start">
        <div className="flex flex-col justify-around gap-12 p-12">
          <h1 className="text-black text-4xl font-semibold">Billing details</h1>
          <div className="flex justify-between">
            <ContactField title={"First Name"} />
            <ContactField title={"Last Name"} />
          </div>
          <ContactField title={"Company Name (Optional)"} />
          <CheckoutPicker
            title={"Country / Region"}
            op1={"Turkey"}
            op2={"Italy"}
            op3={"Greece"}
          />
          <ContactField title={"Street address"} />
          <ContactField title={"Town / City"} />
          <CheckoutPicker
            title={"Province"}
            op1={"Izmir"}
            op2={"Monaco"}
            op3={"Athens"}
          />
          <ContactField title={"ZIP code"} />
          <ContactField title={"Phone"} />
          <ContactField title={"Email address"} />
          <input
            type="text"
            placeholder="Additional Information"
            className="rounded-2xl py-4 px-4 w-[33rem] h-20 border border-[#9F9F9F] outline-none text-black"
          />
        </div>
        <CheckoutBill />
      </div>
      <Banner />
      <Footer />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#D9D9D9] w-9/12 h-0.5 items-center justify-center flex my-12"></div>
        <div className="justify-start items-start flex w-9/12">
          <p className="text-black text-base font-normal mb-8">
            2022 Meubel House. All rights reverved
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
