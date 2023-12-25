import React from 'react'
import money from "../components/images/money.jpg"
import {Link} from "react-router-dom"
function CongragulationPage() {
  return (
    <div className='w-full h-full bg-[#0E0E0E] text-white text-center flex justify-center items-center flex-col gap-7'>
    <div className='flex justify-center  flex-col gap-6 text-white'>
        <div className='text-center font-sans text-3xl text-yellow-600 font-semibold'>Congratulation</div>
        <div className='text-center font-sans'><p>You won</p></div>
        <div className='text-center font-sans flex justify-center items-center'><img src={money} alt="" /></div>
        <p className='text-center font-sans'>1</p>
    </div>
        <Link className='cursor-pointer ' to={"/reward"}>Tab to Skip</Link>
    
    </div>
  )
}

export default CongragulationPage