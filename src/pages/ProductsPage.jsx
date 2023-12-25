import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen p-10 mx-auto bg-black text-white">
      <div className="w-full h-16 flex items-center">
        <IoIosArrowRoundBack size={40} onClick={() => navigate("/category")} />
      </div>
      <h6 className="text-gray-700 h-16 pt-5">RESERVED FOR YOU</h6>

  
      <div className="relative w-full h-55vh bg-cover bg-bottom mt-5" style={{ backgroundImage: 'url("./card1img.jpg")' }}>
        <Image src="./spin.jpg" alt="card1img" />
        <div className="flex items-start justify-around p-5">
          <div className="w-60">
            <h6 className="font-bold text-xl">WIN THE</h6>
            <p className="font-semibold">skullcandy evo</p>
            <p className="font-semibold">over ear headphone</p>
            <button className="bg-gray-400 mt-2 px-4 py-2 rounded">1 UNIT ONLY</button>
          </div>
          <div className="text-white">
            <p>MAKE IT YOURS</p>
            <div className="flex">
              <p className="font-bold">€2,000</p>
              <p className="line-through ml-2">€2,000</p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="w-full bg-black h-16 text-white flex items-center justify-center">
        <Link to={"/showProduct"}><p>Know more</p></Link>
        <FaArrowRightLong className="ml-2" />
      </div>

      <h6 className="text-gray-700 h-16 pt-5">ACCESS ENDS ON DEC 24TH</h6>

 
      <div className="relative w-full h-25vh bg-cover bg-bottom mt-5" style={{ backgroundImage: 'url("./goa.jpg")' }}>
        <Image className="right-5 bottom-15" src="./spin.jpg" alt="goa" />
        <div className="flex items-start p-5">
          <div className="w-60">
            <h6 className="font-bold text-xl">SPIN & WIN</h6>
            <p className="font-semibold">a trip to Goa</p>
            <p className="font-semibold">worth ₹ 16,000</p>
            <button className="bg-white mt-2 px-4 py-2 rounded">1 LUCKY WINNER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Image = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="bg-transparent absolute right-5 bottom-15 w-70"
  />
);

export default ProductsPage;
