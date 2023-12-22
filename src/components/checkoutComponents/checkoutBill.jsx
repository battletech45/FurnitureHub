import React from "react";

const CheckoutBill = () => {
  return (
    <div className="flex flex-col gap-6 mt-24">
      <div className="flex justify-between gap-80 items-center">
        <h3 className="text-black text-2xl font-medium">Product</h3>
        <h3 className="text-black text-2xl font-medium">Subtotal</h3>
      </div>
      <div className="flex justify-between gap-80 items-center">
        <div className="flex gap-4 items-center">
          <h3 className="text-[#9F9F9F] text-base font-normal">Asgaard sofa</h3>
          <p className="text-black text-xs font-medium">X</p>
          <p className="text-black text-xs font-medium">1</p>
        </div>
        <h3 className="text-black text-base font-light">Rs. 250,000.00</h3>
      </div>
      <div className="flex justify-between gap-80 items-center">
        <h3 className="text-black text-base font-normal">Subtotal</h3>
        <h3 className="text-black text-base font-light">Rs. 250,000.00</h3>
      </div>
      <div className="flex justify-between gap-80 items-center">
        <h3 className="text-black text-base font-normal">Total</h3>
        <h3 className="text-[#B88E2F] text-2xl font-bold">Rs. 250,000.00</h3>
      </div>
      <div className="bg-[#D9D9D9] w-full h-0.5 items-center justify-center flex my-12"></div>
      <div className="flex gap-4 items-center">
        <div className="w-5 h-5 bg-black rounded-full"></div>
        <p className="text-black text-base font-normal">Direct Bank Transfer</p>
      </div>
      <p className="text-[#9F9F9F] text-justify text-base font-light w-[33rem]">
        Make your payment directly into our bank account. Please use your Order
        ID as the payment reference. Your order will not be shipped until the
        funds have cleared in our account.
      </p>
      <div className="flex gap-4 items-center">
        <div className="w-5 h-5 border border-[#9F9F9F] rounded-full"></div>
        <p className="text-[#9F9F9F] text-base font-normal">
          Direct Bank Transfer
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-5 h-5 border border-[#9F9F9F] rounded-full"></div>
        <p className="text-[#9F9F9F] text-base font-normal">Cash On Delivery</p>
      </div>
      <p className="text-black text-justify text-base font-light mb-12 w-[33rem]">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our{" "}
        <span className="text-black text-base font-semibold">
          privacy policy.
        </span>
      </p>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="py-2 px-12 rounded-2xl border border-black cursor-pointer text-black text-xl font-normal w-52 mb-20 h-14"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutBill;
