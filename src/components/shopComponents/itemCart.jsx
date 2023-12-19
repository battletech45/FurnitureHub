import React from "react";

const ItemCart = () => {
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
      <div className="flex gap-8 py-1 px-3 w-min rounded-sm cursor-pointer border border-[#9F9F9F]">
        <p onClick={handleDecrement}> - </p>
        <p>{count}</p>
        <p onClick={handleIncrement}> + </p>
      </div>
      <button className="bg-white text-black py-4 px-10 rounded-sm border border-black cursor-pointer text-xl font-normal">Add to Cart</button>
    </div>
  );
};

export default ItemCart;
