import React from "react";
import logo from "../components/images/logo.jpg";
import reward from "../components/images/reward.jpg";
import {
  CiCreditCard2,
  CiSettings,
  CiShoppingCart,
} from "react-icons/ci";
import {
  FaAngleDown,
  FaAngleRight,
  FaCreditCard,
  FaGgCircle,
  FaGifts,
  FaHouseChimneyWindow,
  FaMoneyBillTransfer,
} from "react-icons/fa6";
import { MdWindow } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { BsQrCodeScan } from "react-icons/bs";
import servan from "../components/images/sarvanupdate.jpg";
import { Link } from "react-router-dom";

function CategoryPage() {
  return (
    <div className="bg-gray-950 w-full h-full box-border relative overflow-auto">
      <nav className="flex p-7 justify-between bg-black items-center text-center w-full border">
        <img className="w-7 h-7" src={logo} alt="logo" />
        <div className="flex -space-x-4 rtl:space-x-reverse rounded-full p-2 px-5 bg-gray-900">
          {[1, 2, 3].map((_, index) => (
            <img
              key={index}
              className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
              src="https://tailwindcomponents.com/storage/avatars/RIX6FF6f21qt8KgHvVTbF0Wqhr0oSReduGsJH2iR.jpg"
              alt=""
            />
          ))}
          <a
            className="flex items-center justify-center px-3 h-7 text-xs font-medium text-white bg-gray-900 rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            +3 offers
          </a>
        </div>
        <CiSettings fill="white" className="font-extrabold text-4xl cursor-pointer" />
      </nav>

      <div className="text-white font-semibold text-lg w-full overflow-y-auto">
        <div className="p-7 mt-5 flex flex-col gap-5">
          <p className="text-gray-500">YOUR MONEY</p>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between bg-[#0D0D0D] items-center text-center p-6">
              <div className="flex gap-3 items-center text-center">
                <div>
                  <CiCreditCard2 fill="white" />
                </div>
                Credit Case
              </div>
              <div className="flex gap-3 items-center text-center">
                60000{" "}
                <div>
                  <FaAngleRight />
                </div>
              </div>
            </div>
            <div className="flex justify-between p-6 bg-[#0D0D0D] items-center text-center">
              <div className="flex gap-3 items-center text-center">
                <div>
                  <FaGgCircle />
                </div>
                CNRB xx 1889<div><FaAngleDown /></div>
              </div>
              <div className="flex gap-3 items-center text-center">
                Check balance{" "}
                <div>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 flex flex-col gap-5 m-0 w-full p-6">
          <div className="mt-5 flex flex-col gap-5">
            <p className="text-gray-500">Explore CRED</p>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex justify-between bg-[#0D0D0D] items-center text-center p-3">
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <FaCreditCard className="text-4xl cursor-pointer" />
                  <p>Credit</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <FaMoneyBillTransfer className="text-4xl cursor-pointer" />
                  Bill and recharge
                </div>
                <Link to={"/reward"}>
                  <div className="flex flex-col items-center text-center justify-center text-base cursor-pointer">
                    <img className="w-40" src={reward} alt="img" />
                    <p>Rewards</p>
                  </div>
                </Link>
              </div>
              <div className="flex justify-between p-6 bg-[#0D0D0D] items-center text-center">
                <Link to="/product">
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <CiShoppingCart className="text-4xl cursor-pointer" />
                  Shopping
                </div></Link>
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <FaHouseChimneyWindow className="text-4xl cursor-pointer" />
                  Rent House credit
                </div>
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <FaGifts className="text-4xl cursor-pointer" />
                  Gifts
                </div>
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <MdWindow className="text-4xl cursor-pointer" />
                  Refer
                </div>
              </div>
              <div className="flex justify-between p-6 bg-[#0D0D0D] items-center text-center">
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <CiShoppingCart className="text-4xl cursor-pointer" />
                  Shopping
                </div>
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <FaHouseChimneyWindow className="text-4xl cursor-pointer" />
                  Rent House credit
                </div>
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <FaGifts className="text-4xl cursor-pointer" />
                  Gifts
                </div>
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <MdWindow className="text-4xl cursor-pointer" />
                  Refer
                </div>
              </div>
              <div className="flex justify-between p-6 bg-[#0D0D0D] items-center text-center">
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <CiShoppingCart className="text-4xl cursor-pointer" />
                  Shopping
                </div>
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <FaHouseChimneyWindow className="text-4xl cursor-pointer" />
                  Rent House credit
                </div>
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <FaGifts className="text-4xl cursor-pointer" />
                  Gifts
                </div>
                <div className="flex flex-col items-center text-center justify-center text-base">
                  <MdWindow className="text-4xl cursor-pointer" />
                  Refer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex text-white justify-between p-7 bg-black bottom-0 left-0 right-0 items-center rounded-t-[35%] fixed w-full">
        <div className="ml-2 flex justify-center items-center text-center flex-col gap-3">
          <BsQrCodeScan className="text-6xl" />
          <p className="text-sm">SCAN & PAY</p>
        </div>
        <div><img className="w-32" src={servan} alt="" /></div>
        <div className="mr-2 flex justify-center items-center text-center flex-col gap-3">
          <RiContactsBookFill className="text-6xl" />
          <p className="text-sm">PAY CONTACT</p>
        </div>
      </footer>
    </div>
  );
}

export default CategoryPage;
