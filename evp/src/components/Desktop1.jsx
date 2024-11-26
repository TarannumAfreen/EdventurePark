import React from "react";
import { Link } from "react-router-dom";

import rocket from "../assets/images/desktop3/rocket.png";
import preincubation from "../assets/images/desktop3/pre-incubation.png";
import img from "../assets/images/desktop3/e2.png";
import capsule from "../assets/images/desktop3/CapsuleSupport.png";
import workshop from "../assets/images/desktop3/Workshop.png";
import investor from "../assets/images/desktop3/InvestorConnect.png";

const Desktop1 = () => {
  return (
    <div className="bg-white p-0 w-full overflow-x-hidden">
      <div className="relative flex flex-col items-center w-full max-w-[2811.5px] overflow-x-hidden justify-start">
        {/* Header Section */}
        <div className="m-4 md:m-6 lg:m-8 flex flex-col md:flex-row justify-between items-center w-full max-w-[1509.6px]">
          {/* Add content for header */}
        </div>

        {/* Title Section */}
        <div className="mx-4 md:mx-8 lg:mx-12 mt-8 text-center font-bold font-['Black_Mango'] text-2xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-black mb-10">
          About us
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-start mt-4 mb-8 mx-4 md:mx-10 lg:mx-20">
          {/* Sidebar Links */}

          {/* Main Content */}

          <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-8 md:text-2xl lg:text-3xl font-['Black_Mango']">
            Incubation India - for the World!
          </h2>
        </div>

        <br />
        <br />

        <p className="font-medium  leading-relaxed font-poppins text-left text-xl ">
          Edventure park is a student-focused idea stage Startup incubator which
          aims to empower student-led startups through an intensive 4 month pre
          incubation programme.
        </p>

        <img
          src={rocket}
          alt="Rocket"
          className="w-[300px] sm:w-[600px] md:w-[800px] mb-8 "
        />

        <p className="font-medium  leading-relaxed font-poppins text-left text-xl ">
          Welcome to Edventure park, where student-driven innnovation knows no
          limits and where we incubate India's brightest ideas for he world.
          Within our walls,students find the freedom to experiment, the
          courageto learn from failures,and the support they need to thrive.
          Edventure Park isn't just an incubator;it's a launchpad for the next
          generation of the entrepreneurs.
        </p>

        <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-8 md:text-2xl lg:text-3xl font-['Black_Mango']">
          The Man Behind it all - Our CEO
        </h2>

        <div className="rounded-[12px] m-2">
          <img
            src={preincubation}
            alt=""
            className="w-[300px] md:w-[500px] h-[450px] md:h-[700px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out"
          />
        </div>

        <p className="font-medium  leading-relaxed font-poppins text-left text-xl ">
          Meraj Faheem is a serial entrepreneur , who started first as a student
          entrepreneur. He founded India's first coding bootcamp - The Hacking
          School (acquired by iCollege Australia), Code.in, Code For India,
          Maths.ai. He Founded India's first student focused startup incubator -
          EdVenture Park. Meraj is an Innovation Fellow with Govt. of Telangana.
          He also consults with various state Govts. primarily to help them set
          up incubation centres and Markerspaces. He's passionate about
          education, technology and student entrepreneurship.
        </p>

        <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-8 md:text-2xl lg:text-3xl font-['Black_Mango']">
          EdVenture Park's Culture Formula
        </h2>

        <div className="rounded-[12px] m-2">
          <img
            src={preincubation}
            alt=""
            className="w-[300px] md:w-[500px] h-[450px] md:h-[700px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out"
          />
        </div>
        <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-8 md:text-2xl lg:text-3xl font-['Black_Mango']">
          Board of Directors
        </h2>
        <div className="rounded-[12px] m-2">
          <img
            src={preincubation}
            alt=""
            className="w-[300px] md:w-[500px] h-[450px] md:h-[700px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="rounded-[12px] m-2">
          <img
            src={preincubation}
            alt=""
            className="w-[300px] md:w-[500px] h-[450px] md:h-[700px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out"
          />
        </div>
        <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-8 md:text-2xl lg:text-3xl font-['Black_Mango']">
          Our Core Team
        </h2>

        <p className="font-medium  leading-relaxed font-poppins text-left text-xl ">
          At the heart of Edventure Park, you'll find our dedicated Core Team,
          the driving force behind th edynamic engine that is Edventure Park.
          they take charge of running the operations, funding initiatives, and
          executing our pre-incubation program.
        </p>

        <div className="rounded-[12px] m-2">
          <img
            src={preincubation}
            alt=""
            className="w-[300px] md:w-[500px] h-[450px] md:h-[700px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out"
          />
        </div>

        <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-8 md:text-2xl lg:text-3xl font-['Black_Mango']">
              Our Executive Team 
            </h2>

            <p className="font-medium  leading-relaxed font-poppins text-left text-xl ">
         when it comes to exponential growth and taking startups to new heights, our X team is the "X" factor. They are the multipliers that propel student founders beyound expectations. These creative minds bring their expertise to the table whenever it's needed, working alongside students founders to help them transform their ideas into thriving startups.
        </p>
       

        <div className="bg-[#169D53] relative flex flex-col items-center p-[100px_0_100px_0] w-full box-sizing-border">
          <div className="m-[0_0_44px_0] inline-block break-words font-Poppins font-medium text-[25px] sm:text-[35px] md:text-[40.8px] leading-[0.894] text-[#000000]">
            Become the CEO OF <br />
            EdVenture Park at your campus!
          </div>
          <button className="bg-white text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-lg font-poppins"></button>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
