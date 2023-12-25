import React from "react";

const ProductCard = () => {
  return (
    <div className="border border-gray-300 mx-auto w-310 h-220 bg-black text-white">
      <div className="p-4">
        <div className="flex items-start justify-around">
          <div className="w-60">
            <p className="text-sm font-bold text-gray-700">WIN THE</p>
            <p className="text-base">
              <div className="w-1/2 font-bold text-gray-700">
                skullcandy evo <br /> over ear headphone
              </div>
            </p>
            <button className="bg-gray-300 text-xs w-20 h-8">
              1 UNIT ONLY
            </button>
          </div>
          <div>
            <p className="w-full">MAKE IT YOURS</p>
            <div className="flex">
              <p className="text-sm">
                <div className="w-full font-bold text-gray-700 line-through">
                  €2,000 ₹12,999
                </div>
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41JACWT-wWL._SL1200_.jpg"
          className="w-60 m-5 mx-auto h-100"
          alt="product img"
        />
      </div>
    </div>
  );
};

export default ProductCard;
