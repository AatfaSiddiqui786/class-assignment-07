import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#2A254B] px-5">
      <div className='px-6 md:px-12 py-8 mt-8'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Add content here if needed */}
        </div>
      </div>

      {/* Mailing List Section */}
      <div className="text-white w-full sm:w-full">
        <h1 className="flex justify-center text-lg md:text-xl font-bold">YOU CAN EMAIL ME</h1>
        <div className='flex justify-center mt-4 flex-wrap'>
          <input
            type="text"
            placeholder="your@email.com"
            className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent border-[3px] border-white rounded-md'
          />
          <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
            Sign up
          </button>
        </div>
        <hr className='my-8 border-4 border-white' />

        {/* Footer Bottom Section */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div className='flex justify-center gap-4 pb-8 pl-6 font-bold text-xl sm:text-2xl'>
            <h1 className='text-center text-[22px] sm:text-lg lg:text-2xl'>Copyright 2024 Data Fatching</h1>
          </div>
          <div className='flex gap-2 lg:gap-4 pb-8 pr-6 mx-auto'>
            <Link href={'/'}><FaLinkedin className='w-[40px] h-[40px] hover:text-gray-400 transition' /></Link>
            <Link href={'/'}><FaFacebookSquare className='w-[40px] h-[40px] hover:text-gray-400 transition' /></Link>
            <Link href={'/'}><FaInstagram className='w-[40px] h-[40px] hover:text-gray-400 transition' /></Link>
            <Link href={'/'}><IoLogoSkype className='w-[40px] h-[40px] hover:text-gray-400 transition' /></Link>
            <Link href={'/'}><FaTwitter className='w-[40px] h-[40px] hover:text-gray-400 transition' /></Link>
            <Link href={'/'}><FaPinterest className='w-[40px] h-[40px] hover:text-gray-400 transition' /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
