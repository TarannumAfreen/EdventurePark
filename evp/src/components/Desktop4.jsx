





import React from 'react';
import { Link } from 'react-router-dom';

import i1 from '../assets/images/desktop4/i1.png';
import i2 from '../assets/images/desktop4/i2.png';
import i3 from '../assets/images/desktop4/i3.png';
import i4 from '../assets/images/desktop4/i4.png';
import i5 from '../assets/images/desktop4/i5.png';
import i6 from '../assets/images/desktop4/i6.png';
import preincubation from '../assets/images/desktop4/pre-incubation.png';

const Desktop4 = () => {
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
          <h2 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 md:mb-6 font-['Black_Mango']">Incubation Program</h2>
          <p  style={{ wordSpacing: '0.7em' , lineHeight: '1.8em'}} className="font-medium leading-relaxed font-poppins text-lg md:text-xl">
            The Incubation Program is a 32-week-long intensive and tailor-made program for early-stage startups focusing on achieving product-market fit (PMF).
            <br /><br />
            After completing the Pre-Incubation Program, selected companies transition to the Incubation Program. This program primarily focuses on discovering the product-market fit for the startup. Once PMF is achieved, the focus shifts towards scaling the company and securing investment from diverse industries.
            <br /><br />
            
          </p>
        </div>
      </div>
  
  

<br/>
<br />
<br />

        <div className="mt-10 mb-5 inline-block break-words font-['League_Gothic'] text-[35px] md:text-[120px] leading-[0.906] text-[#000000] tracking-extra-wide">
          BUILDING FUNDAMENTALLY RIGHT COMPANIES
        </div>
        <div className="mt-2 ml-4 md:ml-32 mr-4 md:mr-44 mb-12 md:mb-24 font-poppins inline-block self-start break-words text-[16px] md:text-[20px] leading-[1.582] text-[#000000] ">
         <h1  style={{wordSpacing:'0.3em'}} className='font-bold '><i> We build fundamentally right companies, and it's important that we create solutions that will benefit people.</i></h1>
          <div className="mt-6 md:mt-10">
            <h1><span className="font-bold font-poppins ">Audience:</span> Early & Growth Stage Startups</h1>
          </div>
          <div>
            <h1><span className="font-bold font-poppins">Expected Outcomes:</span> Substantial Growth, Scaling up, Market Share & Investment Ready</h1>
          </div>
        </div>

        

<div className="m-[0_16px_16px_16px] md:m-[0_255px_55px_255px] flex flex-col md:flex-row self-start w-full max-w-[1111px]">
  <div className="bg-[#9D1660] relative m-[0_0_16px_0] md:m-[0_85px_0_0] flex items-center justify-center px-8 md:px-16 py-2 md:py-4 w-full md:w-[513px] font-poppins">
    <span className="break-words font-medium text-lg md:text-[30px] tracking-[-1px] leading-[1.4] text-[#FFFFFF]">
      Problem focused 1:1<br />
    </span>
  </div>
  <div className="bg-[#9D9616] relative flex items-center justify-center px-8 md:px-16 py-2 md:py-4 w-full md:w-[513px] font-poppins">
    <span className="break-words font-medium text-lg md:text-[30px] tracking-[-1px] leading-[1.4] text-[#FFFFFF]">
      Phased Learnings<br />
    </span>
  </div>
</div>
<div className="m-[0_16px_32px_16px] md:m-[0_255px_128px_255px] flex flex-col md:flex-row self-start w-full max-w-[1111px] font-poppins">
  <div className="bg-[#169D53] relative m-[0_0_16px_0] md:m-[0_85px_0_0] flex items-center justify-center px-8 md:px-16 py-2 md:py-4 w-full md:w-[513px] font-poppins">
    <span className="break-words font-medium text-lg md:text-[30px] tracking-[-1px] leading-[1.4] text-[#FFFFFF]">
      Self-paced options
    </span>
  </div>
  <div className="bg-[#9D5316] relative flex items-center justify-center px-8 md:px-16 py-2 md:py-4 w-full md:w-[513px] font-poppins">
    <span className="break-words font-medium text-lg md:text-[30px] tracking-[-1px] leading-[1.4] text-[#FFFFFF]">
      Scrum Meetings<br />
    </span>
  </div>
</div> 




        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col md:flex-row justify-center items-center  w-full">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={i1} alt="" className="w-[370px] md:w-[500px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2 ">
              <img src={i2} alt="" className="w-[370px] md:w-[700px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center  w-full">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={i3} alt="" className="w-[370px] md:w-[700px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2">
              <img src={i4} alt="" className="w-[370px] md:w-[500px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mb-2 w-full">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={i5} alt="" className="w-[370px] md:w-[500px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2">
              <img src={i6} alt="" className="w-[370px] md:w-[700px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <br/>
      
        <h2 className="text-black text-6xl  font:[black_Mango] lg:mr-[1190px] md:mr-0 font-semibold pl-28 pt-16">Tracks</h2>

        <p className="lg:mr-64 md:mr-0 my-9 font-poppins w-2/3 lg:text-xl md:text-lg sm:text-base font-normal justify-left ">
Comparising a set of strategic tracks, this program provides startups with the tools and support they need to thrive in the competitive business landscape.
        
        </p>
   
    <div className="rounded-[12px] m-2">
            <img src={preincubation} alt="" className="w-[300px] md:w-[500px] h-[450px] md:h-[700px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Desktop4;


