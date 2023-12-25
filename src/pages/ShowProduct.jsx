import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { useNavigate } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import { AiOutlineInbox } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsWallet } from "react-icons/bs";
import ProductCard from "../components/ProductCard";
import { data } from "../data";

const ShowProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen  bg-black text-white ">
      <div className="w-full h-16 flex items-center justify-between p-2">
        <HiArrowLongLeft
          size="40"
          onClick={() => navigate("/category")}
          className="cursor-pointer"
        />
        <p className="text-xl">
          <div className="font-bold text-black">CRED</div>{" "}
          <div className="text-gray-700">STORE</div>
        </p>
        <div className="flex items-center space-x-2">
          <AiOutlineInbox className="icon-button" size="40" />
          <RiShoppingCart2Line className="icon-button" size="40" />
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-40px mt-5 bg-gray-300 p-3">
        <BsWallet className="text-gray-600" />
        <p className="text-sm">
          <div className="text-gray-700">delivery to</div>{" "}
          <div className="font-bold text-black">670645</div>
        </p>
        <MdKeyboardArrowRight className="text-gray-600" />
      </div>
      <div className="w-full h-50px mt-2 p-2">
        <p className="text-sm">
          <div className="font-bold text-gray-700">
            beat the wheel: everyday at 9 PM
          </div>{" "}
        </p>
      </div>
      <div className="p-2 w-full h-250px">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className="my-2" />
      <div className="w-full h-50px mt-2 p-2">
        <p className="text-sm">
          <div className="font-bold text-gray-700">brands in focus</div>
        </p>
      </div>
      <div className="w-full h-250px">
        <ProductCard />
      </div>
    </div>
  );
};

export default ShowProduct;
