import React from "react";
import { Trash2 } from "lucide-react";

const CartItem = ({ photo, title, count, price }) => {
  return (
    <div className="flex gap-9 items items-center mt-16">
      <div className="bg-[#FFF9E5] rounded-xl p-2">{photo}</div>
      <p className="text-[#9F9F9F] text-base font-normal mr-4">{title}</p>
      <p className="text-[#9F9F9F] text-base font-normal mr-20">{price}</p>
      <p className="text-black w-8 h-8 border border-[#9F9F9F] rounded-md items-center justify-center flex mr-5">
        {count}
      </p>
      <p className="text-black text-base font-normal mr-8">{price}</p>
      <Trash2 color="#FBEBB5" />
    </div>
  );
};

export default CartItem;
