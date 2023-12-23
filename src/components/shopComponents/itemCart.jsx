import React from "react";
import { useState } from "react";

const ItemCart = ({handleFunction}) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className=" mt-8 flex gap-8">
      <div className="flex gap-8 py-1 px-3 w-min rounded-lg cursor-pointer border border-[#9F9F9F] items-center">
        <p onClick={handleDecrement} className="text-black"> - </p>
        <p className="text-black">{count}</p>
        <p onClick={handleIncrement} className="text-black"> + </p>
      </div>
      <button className="bg-white text-black py-4 px-10 rounded-xl border border-black cursor-pointer text-xl font-normal" onClick={() => handleFunction()}>Add to Cart</button>
    </div>
  );
};

export default ItemCart;
