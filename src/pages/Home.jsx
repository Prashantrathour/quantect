import React, { useEffect } from 'react';
import image from "../components/images/heropage.jpg";
import Navbar from '../components/Navbar';
import {Link, useNavigate} from "react-router-dom"
function Home() {
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(() => {
            if(!localStorage.getItem("otp")){
                navigate("/login")
            }
            
        }, 5000);
    },[])
  return (
    <div className='bg-black h-full  flex flex-col'>
      <Navbar />

      <div className='flex flex-col  items-center justify-center h-full w-full'>
        <img className='w-96 ' src={image} alt='heropage' />
      <div className='text-white opacity-45 w-full text-left p-9'>
        <p>Welcome To the club</p>
        <Link to={"/category"}><h1 className='text-3xl font-extrabold font-serif'>Make Payment</h1></Link>
        <Link to={"/category"}><h1 className='text-3xl font-extrabold font-serif'>earn rewards.</h1></Link>
      </div>
      </div>
    </div>
  );
}

export default Home;
