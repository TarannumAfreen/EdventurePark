{/* <p className="font-normal text-base sm:text-lg leading-relaxed font-poppins ">
Founders' Friday is EdVenture Park's flagship event held on the
first Friday of every month. It serves as a "No-Agenda Networking
Event" bringing together Founders, Entrepreneurs, Investors, and
other key members of the startup ecosystem. The event is a tribute
to founders, celebrating their endeavors, challenges, and
aspirations. Founders' Friday focuses on networking, emphasizing
the importance of connections in the startup world.
<br />
</p> */}


import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../assets/images/desktop7/1.png';
import img2 from '../assets/images/desktop7/2.png';
import img3 from '../assets/images/desktop7/3.png';
import img4 from '../assets/images/desktop7/4.png';
import img5 from '../assets/images/desktop7/5.png';
import img6 from '../assets/images/desktop7/6.png';
import image from "../assets/images/desktop7/image.png";

const Desktop7 = () => {
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
          <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-8 md:text-2xl lg:text-3xl font-['Black_Mango']">Fonders' Friday</h2>
          <p  style={{ wordSpacing: '0.5em',lineHeight: '1.8em' }} className="font-medium  leading-relaxed font-poppins text-left text-xl ">Founders' Friday is EdVenture Park's flagship event held on the first Friday of every month. It serves as a "No-Agenda Networking Event" bringing together Founders, Entrepreneurs, Investors, and other key members of the startup ecosystem. The event is a tribute to founders, celebrating their endeavors, challenges, and aspirations. Founders' Friday focuses on networking, emphasizing the importance of connections in the startup world.


   
          </p>
        </div>
      </div>

      <img src={image}/>
          
         
        

        
        


        <div style={{wordSpacing:'0.3em' , lineHeight:'1.6em'}} className="m-2 lg:m-24 inline-block text-justify-start break-words font-poppins font-medium text-base lg:text-lg xl:text-2xl leading-relaxed text-[#000000] ">
  The event includes Crowd Pitching, where founders present their concepts in a minute to the audience, gaining valuable insights and validation for their ideas. This segment serves as a platform for founders to enhance their presentation skills and boost self-confidence. The "Best Pitch of the Day" award is given to the founder with the most applause.
  <br />
  <br />
  Another highlight is "Business Showers," a festive celebration of startup launches. EdVenture Park becomes a launch collaborator, providing support from strategic planning to product demonstrations. This commitment is rooted in understanding the challenges founders face, making EdVenture Park a steadfast well-wisher throughout their entrepreneurial journey.
</div>








      {/* Snapshots Section */}
      <div className="ml-4 md:ml-10 md:mr:48 mt-2 md:mt-14 mr-10  bg-gray-900 text-white py-6 md:py-6 px-4 md:px-5 w-[95%] overflow-x-hidden">
      <h2 className="text-white text-2xl md:text-4xl font-bold mb-10 md:mb-20 ml-4 md:ml-20">
      Founders' Friday x Business Showers </h2>

      
<div className="flex flex-col md:flex-row justify-center items-center  w-full ">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg ">
              <img src={img1} alt="" className="w-[470px] md:w-[670px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2 ">
              <img src={img2} alt="" className="w-[470px] md:w-[750px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center  w-full">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={img3} alt="" className="w-[470px] md:w-[927px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2">
              <img src={img4} alt="" className="w-[470px] md:w-[500px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mb-2 w-full">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={img5} alt="" className="w-[470px] md:w-[500px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2">
              <img src={img6} alt="" className="w-[470px] md:w-[927px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
      </div>






   {/* Green Color Box at the End */}
      <div className="bg-green-500 flex flex-col items-center py-16 md:py-24 w-full mt-5">
        <p className="text-center text-2xl sm:text-3xl md:text-4xl text-black font-bold mb-6 md:mb-8 font-poppins">Want to be a part of these exclusive discussions?</p>
        <p className="font-normal text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 font-poppins">Join as a Campus Lead!</p>
        <button className="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-lg font-poppins">Join Now</button>
      </div>

      
      </div>
    </div>
  );
};

export default Desktop7;

