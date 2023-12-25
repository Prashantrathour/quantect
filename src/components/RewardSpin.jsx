import React, { useState } from "react";
import { GiBarbedArrow, GiPointing } from "react-icons/gi";
import { GiCreditsCurrency } from "react-icons/gi";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import "./spin.css"; // Make sure to import your CSS file
import { FaLeftLong } from "react-icons/fa6";
import { IoArrowUpCircle } from "react-icons/io5";
import {Link, useNavigate} from "react-router-dom"
const RewardSpin = () => {
  const navigate=useNavigate()
  const [selection, setSelectedItem] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const rotateWheel = () => {
    handleClick();
    const numberOfSections = 8;
    const degreesPerSection = 360 / numberOfSections;

    // Calculate the random rotation angle
    const randomRotation = Math.floor(Math.random() * (1024 - 9999) + 9999);

    const normalizedRotation = randomRotation % 360; // Ensure rotation is within 0 to 360 degrees
    const selectedBlock = Math.floor(normalizedRotation / degreesPerSection);

    console.log("Random Rotation:", randomRotation);
    console.log("Normalized Rotation:", normalizedRotation);
    console.log("Selected Block:", selectedBlock);

    document.getElementById("rotate").style.transform = `rotate(${randomRotation}deg)`;
    setSelectedItem(selectedBlock);

    // Call the getContentForBlock function here if needed
    getContentForBlock(selectedBlock);
  };

  function getContentForBlock(selectedBlock) {
    // Define your content or prizes here based on the block index
    const contentArray = [
      "Best luck for next",
      "Copan 200",
      "T-Shirt",
      "Credit CARD",
      "HomeRent 10%",
      "10% discount",
      "Best luck for next",
      "Best luck for next",
    ];

    console.log("Selected Content:", contentArray[selectedBlock]); // Use selectedBlock directly
  }

  const handleClick = () => {
    setIsClicked(true);

    // Simulate a delay for the mechanical effect
    setTimeout(() => {
     
      navigate("/cong")
    }, 5000);
  };

  return (

    <div className="p-0 m-0 box-border bg-black  w-full h-full   flex justify-start flex-col text-center items-center border">
      <div className="w-full text-left p-6 text-4xl mt-0 flex justify-between text-white">
       <Link className="cursor-pointer" to={"/category"}>
       <FaLeftLong className="max-w-[300px] " fill="white"/>
       </Link> 
        <div className="flex justify-between w-1/4 gap-3">
        <FaRegMoneyBill1 />
        <GiCreditsCurrency />

        </div>
       
      </div>
      <div className="wheel flex justify-center w-full h-full relative">
         <div className="sa m-auto border " id="rotate">
          <div className="sa1 text-xs">
            <span className="spa">
              <strong className="absolute  top-[50%] left-[50px]  ">Best luck for next</strong>
            </span>
            <span className="spc">
              <strong className="absolute  top-[60%] left-1/3 rotate-[270deg] ">Copan 200</strong>
            </span>
            <span className="spb">
              <strong className="absolute  top-[50%] right-4 rotate-180  ">T-Shirt</strong>
            </span>
            <span className="spd">
              <strong className="absolute  top-[30%] left-1/4  rotate-90 ">Credit CARD</strong>
            </span>
          </div>
          <div className="sa2 text-xs">
            <span className="spa">
              <strong className="absolute  top-[50%] left-1/3  ">Best luck for next</strong>
            </span>
            <span className="spc">
              <strong className="absolute  top-[40%] left-1/4  rotate-[255deg] mr-3">HomeRent 10%</strong>
            </span>
            <span className="spb">
              <strong className="absolute  top-[50%] right-1 rotate-180 ">10% discount</strong>
            </span>
            <span className="spd">
              <strong className="absolute  top-[40%] left-[16px] rotate-90 mr-30 ">Best luck for next</strong>
            </span>
          </div>
        </div> 
      </div>
        <div className="top-[303px] left-[502px] transform -translate-x-1/2 -translate-y-1/2">
          <IoArrowUpCircle  className={`text-6xl  transition-transform`} fill="red"/>
        </div>
        <div className="flex justify-center">
          <button
            disabled={isClicked}
            className={`relative overflow-hidden top-12 z-50 p-3 px-9 w-36  text-white bg-yellow-500  transition duration-150 ease-in-out`}
            onClick={rotateWheel}
          >
        
            <div className={`h-full flex justify-between relative z-10 text-4xl `}>
              <span className={`relative z-10 text-4xl `}>Spin</span>
            </div>
          </button>
        </div>
   
    </div>
  );
};

export default RewardSpin;
