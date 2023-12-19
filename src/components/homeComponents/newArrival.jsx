import Image from 'next/image';
import React from 'react';
import Asgaard from '../../../public/assets/asgaard.png';

const NewArrival = () => {
  return (
    <div className="flex items-center justify-center gap-8 bg-[#FFF9E5] w-full">
        <Image src={Asgaard} width={900} height={900} alt='sofa'/>
        <div className="flex flex-col items-center justify-center">
            <h4 className="text-black text-2xl font-medium">New Arrivals</h4>
            <h1 className="text-black text-5xl font-bold">Asgaard sofa</h1>
            <button className="text-black text-xl font-normal border border-black p-2 w-60 mt-4">Order Now</button>
        </div>
    </div>
  )
}

export default NewArrival;