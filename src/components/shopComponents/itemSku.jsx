import React from "react";

const ItemSku = () => {
  return (
    <div className="flex gap-2">
      <div className="item-sku-categories">
        <p className="text-[#9F9F9F] text-base font-normal">SKU</p>
        <p className="text-[#9F9F9F] text-base font-normal">Category</p>
        <p className="text-[#9F9F9F] text-base font-normal">Tags</p>
        <p className="text-[#9F9F9F] text-base font-normal">Share</p>
      </div>
      <div className="item-two-dot">
        {Array(4).fill(<p className="text-[#9F9F9F] text-base font-normal">:</p>)}
      </div>
      <div className="item-sku-data">
        <p cclassName="text-[#9F9F9F] text-base font-normal">SS001</p>
        <p className="text-[#9F9F9F] text-base font-normal">Sofas</p>
        <p className="text-[#9F9F9F] text-base font-normal">Sofa, Chair, Home, Shop</p>
        <div className="flex gap-4">
          <img src={facebookIcon} alt="socialIcon" />
          <img src={linkedInIcon} alt="socialIcon" />
          <img src={twitterIcon} alt="socialIcon" />
        </div>
      </div>
    </div>
  );
};

export default ItemSku;
