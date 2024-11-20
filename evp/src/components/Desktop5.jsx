
// EdTalk stands as an exclusive program made for Campus Leads, who serve as the 'CEO of EdVenture Park' at their respective campuses. This program, EdTalk, is built upon the foundation of the 3E’s - Experience, Engagement, and Expression.
//               <br /><br />
//               These elements collectively contribute to the growth of self-assurance among our Campus Leads, a trait nurtured organically through their regular interactions and discussions.


import React from 'react';
import { Link } from 'react-router-dom';

import e1 from '../assets/images/desktop5/e1.png';
import e2 from '../assets/images/desktop5/e2.png';
import e3 from '../assets/images/desktop5/e3.png';
import e4 from '../assets/images/desktop5/e4.png';
import e5 from '../assets/images/desktop5/e5.png';
import e6 from '../assets/images/desktop5/e6.png';


const Desktop5 = () => {
  return (
    <div className="bg-white p-0 w-full overflow-x-hidden">
    <div className="relative flex flex-col items-center w-full max-w-[2811.5px] overflow-x-hidden justify-start">
      {/* Header Section */}
      <div className="m-4 md:m-6 lg:m-8 flex flex-col md:flex-row justify-between items-center w-full max-w-[1509.6px]">
        {/* Add content for header */}
      </div>
  
      {/* Title Section */}
      <div className="mx-4 md:mx-8 lg:mx-12 mt-8 text-center font-bold font-['Black_Mango'] text-2xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-black mb-10">
        Our Programs
      </div>
  
      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-start mt-4 mb-8 mx-4 md:mx-10 lg:mx-20">
        {/* Sidebar Links */}
        <div className="w-full md:w-1/4 lg:w-1/3 mb-6 md:mb-0">
          <div className="pl-4 md:pl-6 lg:pl-8 pt-4 font-medium text-lg sm:text-xl">
            <div className="mb-4">
              <Link to="/" className="text-black hover:text-green-400">Pre-Incubation Program</Link>
            </div>
            <div className="mb-4">
              <Link to="/desktop4" className="text-black hover:text-green-400">Incubation Program</Link>
            </div>
            <div className="mb-4">
              <Link to="/#" className="text-black hover:text-green-400">Campus Leadership Program</Link>
            </div>
            <div className="mb-4">
              <Link to="/#" className="text-black hover:text-green-400">Incubation Manager Fellowship</Link>
            </div>
            <div className="mb-4">
              <Link to="/#" className="text-black hover:text-green-400">Internships</Link>
            </div>
            <div className="mb-4">
              <Link to="/Desktop7" className="text-black hover:text-green-400">Founders’ Friday</Link>
            </div>
            <div className="mb-4">
              <Link to="/#" className="text-black hover:text-green-400">Founders' Fest</Link>
            </div>
            <div className="mb-4">
              <Link to="/Desktop5" className="text-black hover:text-green-400">EdTalk</Link>
            </div>
            <div className="mb-4">
              <Link to="/Desktop6" className="text-black hover:text-green-400">Builders' Sunday</Link>
            </div>
          </div>
        </div>
  
        {/* Divider */}
        <div className="hidden md:block border-l-2 border-green-500 mx-4"></div>
  
        {/* Main Content */}
        <div className="w-full md:w-3/4 lg:w-2/3 ml-0 md:ml-6 lg:ml-8">
          <h2 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 md:mb-6 font-['Black_Mango']">EdTalk</h2>
          <p style={{wordSpacing:'0.5em', lineHeight: '1.8em'}} className="font-medium leading-relaxed font-poppins text-lg md:text-xl">
          EdTalk stands as an exclusive program made for Campus Leads, who serve as the 'CEO of EdVenture Park' at their respective campuses. This program, EdTalk, is built upon the foundation of the 3E’s - Experience, Engagement, and Expression.
            <br /><br />
            These elements collectively contribute to the growth of self-assurance among our Campus Leads, a trait nurtured organically through their regular interactions and discussions.

          </p>
        </div>
      </div>
      </div>
  
  
      {/* Snapshots Section */}
      <div className="ml-4 md:ml-10 md:mr:48 mt-10 md:mt-20 mr-10  bg-gray-900 text-white py-8 md:py-10 px-4 md:px-5 w-[95%] overflow-x-hidden">
      <h2 className="text-white text-2xl md:text-4xl font-bold mb-10 md:mb-20 ml-4 md:ml-20">
  Here's some of our <span className="bg-green-600 p-1 md:p-2">EdTalk</span> <br />
  Snapshots
</h2>

      
<div className="flex flex-col md:flex-row justify-center items-center  w-full ">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg ">
              <img src={e1} alt="" className="w-[470px] md:w-[670px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2 ">
              <img src={e2} alt="" className="w-[470px] md:w-[750px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center  w-full">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={e3} alt="" className="w-[470px] md:w-[927px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2">
              <img src={e4} alt="" className="w-[370px] md:w-[500px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mb-2 w-full">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={e5} alt="" className="w-[370px] md:w-[927px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2">
              <img src={e6} alt="" className="w-[370px] md:w-[500px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
      </div>

      <div style={{wordSpacing:'0.3em'}}className="mt-6 md:mt-10 text-black text-lg sm:text-xl md:text-[26px] leading-[1.5] md:leading-[1.393] capitalize mx-4 md:mx-10 mb-12 md:mb-24 font-poppins">
        <p>
          During these sessions, the Moderator and Panellists share their
          viewpoints, offering valuable insights that enrich the audience's
          understanding and provide key takeaways. This process not only
          imparts valuable principles but also enriches the ecosystem with its
          ambitious outcomes.
        </p>
        <p className="mt-6 font-poppins">
          The core objective of EdTalk is to provide continuous support to
          Campus Leads as they confront significant challenges, while also
          equipping them with the skill-based tools necessary for their growth.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-500 flex flex-col items-center py-16 md:py-24 w-full">
        <p className="text-center text-2xl sm:text-3xl md:text-4xl text-black font-bold mb-6 md:mb-8 font-poppins">Want to be a part of these exclusive discussions?</p>
        <p className="font-normal text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 font-poppins">Join as a Campus Lead!</p>
        <button className="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-lg font-poppins">Join Now</button>
      </div>
    </div>
  );
};

export default Desktop5;

