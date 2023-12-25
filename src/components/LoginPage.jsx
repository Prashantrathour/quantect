import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"

const LoginPage = () => {
  const navigate=useNavigate()
    const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Start loading state
    setIsLoading(true);

    // Generate a random 4-digit OTP after a delay
    setTimeout(() => {
      const generatedOtp = Math.floor(1000 + Math.random() * 9000);

      // Save phone number and OTP in local storage
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('otp', generatedOtp);

      // End loading state
      setIsLoading(false);

      // Show alert with OTP
      alert(`OTP sent to ${phoneNumber}. Your OTP: ${generatedOtp}`);
        navigate("/")
      // You can redirect to the next page or perform any other action here
    }, 2000); // Simulating a delay of 2 seconds
  };

  return (
    <div className="min-h-screen flex items-center flex-col justify-between w-full" >
      <div>
      <div className='bg-black text-white w-full p-7'>
        <p className='text-sm font-bold text-gray-600'>MEMBERSHIP APPLICATION</p>
        <h1 className='font-bold text-3xl'>tell us your mobile number</h1>
      </div>
      <div className="bg-white  p-6 w-full">
        <form >
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border focus:outline-none focus:border-blue-500"
            />
          </div>
        </form>
        <input type='checkbox'/>
        <label className='ml-4' htmlFor="checkbox">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reprehenderit sequi, qui omnis quos sint asperiores iure.iae  </label>
      </div>

      </div>
      <div className='flex justify-start text-left'>
          <button
            type="submit"
            onClick={handleSubmit}
            className={`bg-black px-9 mb-56 text-white w-full py-2 font-semibold focus:outline-none ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Agree & Continue'}
          </button>

      </div>
    </div>
  );
};

export default LoginPage;
