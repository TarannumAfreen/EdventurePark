

import React from 'react';
import { Link } from 'react-router-dom';

import b2 from '../assets/images/desktop6/b2.png';
import b4 from '../assets/images/desktop6/b4.png';
import b5 from '../assets/images/desktop6/b5.png';
import b7 from '../assets/images/desktop6/b7.png';
import b6 from '../assets/images/desktop6/b6.png';
import radar from '../assets/images/desktop6/Radar.png';
import skull from '../assets/images/desktop6/skull.png'

const Desktop6 = () => {
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
          <h2 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 md:mb-6 font-['Black_Mango']">Builders' Sunday</h2>
          <p style={{wordSpacing:'0.5em' ,lineHeight: '1.8em'}} className="font-medium leading-relaxed font-poppins text-lg md:text-xl">
          Introducing EdVenture Park's Hardware Incubator - India’s fastest prototyping centre for hardware and technology enthusiasts through thoughtfully organized meet-ups. These gatherings are designed to create and enhance their practical skills in  creation. We invite individuals from diverse backgrounds to refine their expertise.
            <br /><br />
           In line with promoting the idea of inclusive communities, Edventure Parks' Hardware incubator extends a warm invitation to individuals from diverse educational backgrounds, offering them the chance to refine their hardware expertise.
            
             </p>
        </div>
      </div>
      <div className="container mt-4 md:mt-36 mx-4 md:mx-12 lg:mx-24 mb-4 flex flex-col items-center md:flex-row md:items-start">
  <h1 
    className="text-5xl md:text-6xl lg:text-[145px] lg:ml-2 font-bold tracking-wider font-['League_Gothic'] w-full text-center md:text-left"
    style={{ lineHeight: "1.2" }}
  >
    Innovation meets Instruction
  </h1>
  <img 
    src={skull} 
    alt="Skeleton holding its head" 
    className="mt-4 md:mt-0 w-40 h-auto hover:cursor-pointer md:ml-8 lg:ml-12"
  />
</div>

<div className="flex flex-col w-full md:w-auto">
  <div className="m-0 md:m-[0_0_56px_0] flex flex-col self-start w-full">
  <div className="m-0 md:ml-8 lg:ml-52 inline-block font-['Poppins'] font-bold text-2xl md:text-3xl lg:text-5xl leading-tight text-[#2b2b2b] border-b-2 border-green-900 w-fit">
  Here’s some of our Hardware <br /> Creations
</div>
</div>




          
          <div className="flex flex-col items-center justify-center w-full  mr-28 mt-10">
          <div className="flex flex-col md:flex-row justify-center items-center  w-full ">
           
            <div className="rounded-[12px] m-2 ">
              <img src={b4} alt="" className="w-[370px] md:w-[700px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={b2} alt="" className="w-[370px] md:w-[700px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center  w-full">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={b5} alt="" className="w-[370px] md:w-[800px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2">
              <img src={b6} alt="" className="w-[370px] md:w-[600px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mb-2 w-full">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={b7} alt="" className="w-[370px] md:w-[600px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2">
              <img src={radar} alt="" className="w-[370px] md:w-[800px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          
          <br/>
          
          <h1 className="text-xs md:text-2xl lg:text-2xl ml-2 md:ml-3 lg:ml-52 lg:mr-60 mt-4 md:mt-6 lg:mt-12 font-poppins leading-relaxed text-black ">
  By providing complimentary access to an interactive and invigorating environment, coupled with well-structured modules and components, our aim is to cultivate a hands-on approach to learning. This approach serves to instill practical knowledge and engagement.
</h1>

<div className="bg-[#169D53] relative flex flex-col items-center p-8 md:p-20 w-full md:w-[1782px] box-border ml-0 md:ml-20 mt-12 md:mt-32">
  <h1 className="text-2xl md:text-4xl font-bold text-center font-poppins">
    Become an official member of our quirky, fun-loving team
  </h1>
  <div className="mt-4 mb-8 md:mt-6 md:mb-10 font-poppins font-normal text-lg md:text-2xl tracking-tight text-[#000000] text-center">
    Join our community
  </div>
  <button className="bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-lg font-poppins">
    Join Now
  </button>
</div>
</div>
</div>

    </div>
    </div>
   
  );
};

export default Desktop6;

