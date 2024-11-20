

import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube , FaUser } from 'react-icons/fa'; // Import required icons
import image from '../assets/images/footer/newevplogo.png'


export default function Home() {
  return (
    <div className='p-[12px] md:p-[24px] lg:p-[45px]' style={{ backgroundColor: 'black', color: 'white' }}>
      
      {/* Header Section */}
      <div className='flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
        <div className='text-[white] p-[12px] md:p-[0px] lg:p-[0px]' style={{ fontFamily: 'Poppins' }}>
          <p>Have any questions?</p>
          <p>Let's connect!</p>
        </div>

        <div className='flex flex-col md:flex-row lg:flex-row items-center font-[Poppins]'>
          <div className='flex items-center bg-black border border-gray-600 rounded-full p-2'>
          <FaUser className="w-4 h-4" />
            <input 
              type="text" 
              className="bg-black rounded-full w-full px-2 text-white focus:outline-none"
              placeholder='Enter your email' 
            />
          </div>
          <button className='bg-[#169D53] px-4 py-2 text-white rounded-full ml-2'>Connect</button>
        </div>
      </div>

      {/* Divider */}
      <div className='py-6'>
        <hr className='border-gray-400 opacity-50' />
      </div>

      {/* Main Content */}
      <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4'>
        <div className='flex justify-center md:col-span-4 lg:col-span-4 text-center md:text-left' style={{ fontFamily: 'Poppins' }}>
          <div>
            <img src={image} alt="EVP Logo" className="w-80 h-auto object-contain" />
            <p className="mt-4">Incubating India - for the world!</p>
          </div>
        </div>

        <div className='md:col-span-8 lg:col-span-8 flex justify-center space-x-8 font-[Poppins]'>
          <div className='p-4'>
            <ul className='space-y-2'>
              <li>About Us</li>
              <li>Our companies</li>
              <li>Job openings</li>
              <li>Internships</li>
              <li>News</li>
            </ul>
          </div>
          <div className='p-4'>
            <ul className='space-y-2'>
              <li>Events</li>
              <li>Founders' Friday</li>
              <li>Builders' Sunday</li>
              <li>IMF</li>
            </ul>
          </div>
          <div className='p-4'>
            <ul className='space-y-2'>
              <li>Programs</li>
              <li>Pre-Incubation Program</li>
              <li>Incubation Program</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='py-6'>
        <hr className='border-gray-400 opacity-50' />
      </div>

      {/* Footer Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center'>
        <div className='order-last md:order-first lg:order-first text-center md:text-left lg:text-left' style={{ fontFamily: 'Poppins' }}>
          © Copyright Edventure Park. All Rights Reserved
        </div>
        <div className='flex justify-center md:justify-end lg:justify-end space-x-4'>
      <a href="https://www.instagram.com/edventurepark/">
        <FaInstagram className="w-6 h-6" />
      </a>
      <a href="https://m.facebook.com/EdVenP">
        <FaFacebookF className="w-6 h-6" />
      </a>
      <a href="https://twitter.com/EdventurePark">
        <FaTwitter className="w-6 h-6" />
      </a>
      <a href="https://m.youtube.com/channel/UCJE19g3yFV5aKsf8n4pTz3Q/featured">
        <FaYoutube className="w-6 h-6" />
      </a>
    </div>
      </div>
    </div>
  );
}
