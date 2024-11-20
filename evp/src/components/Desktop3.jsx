




import React from 'react';
import { Link } from 'react-router-dom';

import rocket from '../assets/images/desktop3/rocket.png';
import preincubation from '../assets/images/desktop3/pre-incubation.png';
import img from '../assets/images/desktop3/e2.png';
import capsule from '../assets/images/desktop3/CapsuleSupport.png';
import workshop from '../assets/images/desktop3/Workshop.png';
import investor from '../assets/images/desktop3/InvestorConnect.png';


const Desktop3 = () => {
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
          <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-8 md:text-2xl lg:text-3xl font-['Black_Mango']">Pre-Incubation Program</h2>
          <p  style={{ wordSpacing: '0.5em' }} className="font-medium  leading-relaxed font-poppins text-left text-xl ">
The Pre-incubation Program is a <span className='font-bold'>16-week long</span> structured and intensive program, where we work with student entrepreneurs, taking them
through the fundamental tracks of building a company, organizing exclusive sessions/workshops, and giving them all the support & guidance they need for them 
to take their idea to the next level. Students can experiment with their ideas and have an opportunity to start their 
own companies while still in college.
<br/><br/>Participants often gain essential business skills, including market analysis, product development, and pitching.

   
          </p>
        </div>
      </div>
  

       
        <br/>
             <br/>

        <div className="rounded-[4.8px] border-[1px_solid_#169D53] bg-[#169D53] relative mb-20 flex px-6 py-3 w-[192.1px] box-sizing-border">
          <span className="break-words font-poppins font-bold text-[23.4px] text-[#FFFFFF] hover:cursor-pointer">
            APPLY NOW
          </span>
        </div>
        <div className="inline-block break-words font-['League_Gothic'] text-[28px] sm:text-[40px] md:text-[70px] lg:text-[100px] text-[#000000] uppercase">
  India's First Student Focused Incubation Program
</div>

        <img src={rocket} alt="Rocket" className="w-[300px] sm:w-[600px] md:w-[800px] mb-8 " />
        <div className="m-[0_58.3px_0_58.3px] inline-block self-start text-justify break-words font-poppins text-[16px] sm:text-[20.7px] leading-[1.478] capitalize text-[#000000] mb-3">
          <h1 style={{wordSpacing:'0.8em'}} className="font-poppins font-bold">
           <i> We take immense pride to be India&#39;s First and Favourite Student Startup Incubator <br></br>introducing India&#39;s first Pre-Incubation Program, tailored to suit the needs of the STUDENTS!</i>
          </h1>
          <br />
          <div className="mt-6 md:mt-10">
            <h1 className="font-poppins">
              <span className="font-bold font-poppins">Audience:</span> Idea Stage Startups
            </h1>
          </div>
          <div>
            <h1 className="font-poppins">
              <span className="font-bold font-poppins">Expected Outcomes:</span> Achieving Technical PoC / Launch!
            </h1>
          </div>
          <div>
            <h1 className="font-poppins">
              <span className="font-bold font-poppins">Investor Pitches:</span> Startups Are Trained To Be Investment-Ready From Day 1
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center h-auto mt-4 mx-4 py-16 space-y-8 lg:space-y-0 lg:space-x-0">
  <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-green-700 via-green-400 to-white w-full lg:w-1/4 h-[400px] md:h-[500px] lg:h-[600px]">
    <img src={img} alt="1:1 Mentoring" className="w-40 h-40 md:w-80 md:h-80 rounded-full mt-10 border-2 border-black"/>
    <h2 className="text-xl md:text-2xl font-bold mt-4">1:1 Mentoring</h2>
  </div>
  <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-green-600 via-slate-200 to-green-50 w-full lg:w-1/4 h-[400px] md:h-[500px] lg:h-[600px]">
    <img src={capsule} alt="Capsule based Support" className="w-40 h-40 md:w-80 md:h-80 rounded-full mb-20 border-2 border-black" />
    <h2 className="text-xl md:text-2xl font-bold mt-4">Capsule based Support</h2>
  </div>
  <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-green-700 via-green-400 to-white w-full lg:w-1/4 h-[400px] md:h-[500px] lg:h-[600px]">
    <img src={workshop} alt="Exclusive Workshops" className="w-40 h-40 md:w-80 md:h-80 rounded-full border-2   border-black"/>
    <h2 className="text-xl md:text-2xl font-bold mt-4">Exclusive Workshops</h2>
  </div>
  <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-green-600 via-slate-200 to-green-50 w-full lg:w-1/4 h-[400px] md:h-[500px] lg:h-[600px]">
    <img src={investor} alt="Investor Connects" className="w-40 h-40 md:w-80 md:h-80 rounded-full mb-20 border-2 border-black"/>
    <h2 className="text-xl md:text-2xl font-bold mt-4">Investor Connects</h2>
  </div>
</div>



        <h2 className="text-black text-6xl font-semibold lg:mr-[1390px] md:mr-0 mb-3">Tracks</h2>
        <p className="m-[0_58.3px_0_58.3px] inline-block self-start text-justify break-words font-poppins text-[16px] sm:text-[20.7px] leading-[1.478] capitalize text-[#000000] mb-10">
       
        The Pre-Incubation Program comprises a series of interconnected tracks, each<br></br> contributing
         to the development of a robust foundation for the entrepreneurial journey.
</p>

          
       
  


   
    <div className="rounded-[12px] m-2">
            <img src={preincubation} alt="" className="w-[300px] md:w-[500px] h-[450px] md:h-[700px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
          </div>

       
        <div className="bg-[#169D53] relative flex flex-col items-center p-[100px_0_100px_0] w-full box-sizing-border">
          <div className="m-[0_0_44px_0] inline-block break-words font-Poppins font-medium text-[25px] sm:text-[35px] md:text-[40.8px] leading-[0.894] text-[#000000]">
            Check Out Our Company Portfolio
          </div>
          <button className="bg-white text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-lg font-poppins"></button>
          </div>
      </div>
    </div>
    
  )
}

export default Desktop3;



