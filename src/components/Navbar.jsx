import React from 'react'
import logo from "../components/images/logo.jpg"
function Navbar() {
  return (
    <div className='flex justify-end  w-full p-4'>
        <img className='w-12' src={logo} alt="" />
    </div>
  )
}

export default Navbar