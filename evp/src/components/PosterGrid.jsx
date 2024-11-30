import React from 'react';
import gridphoto1 from "../assets/images/Home/gridpic1.png";
import gridphoto2 from "../assets/images/Home/gridpic2.png";
import gridphoto3 from "../assets/images/Home/gridpic3.png";
import gridphoto4 from "../assets/images/Home/gridpic4.png";
import gridphoto5 from "../assets/images/Home/gridpic5.png";
import gridphoto6 from "../assets/images/Home/gridpic6.png";
import EVPnewlogo2 from "../assets/images/Home/EVP new logo 2.png";

function PosterGrid() {
  return (
    <div className="flex flex-col items-center bg-white w-full min-h-screen p-10">
  
      <h1 className="text-6xl font-bold mb-16 tracking-wider text-center">
        STUDENT <span className="text-green-700">FOUNDERS</span>
      </h1>

   
      <div className="grid grid-cols-6 w-full max-w-screen-2xl">
       
        <div className="w-full h-40">
          <img
            src={gridphoto1}
            alt="Student Founder 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-700 w-full h-40"></div>
        <div className="bg-white w-full h-40"></div>
        <div className="w-full h-40">
          <img
            src={gridphoto2}
            alt="Student Founder 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-700 w-full h-40"></div>
        <div className="bg-white w-full h-40"></div>

        
        <div className="bg-green-700 w-full h-40"></div>
        <div className="w-full h-40">
          <img
            src={gridphoto3}
            alt="Student Founder 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-700 w-full h-40"></div>
        <div className="w-full h-40">
          <img
            src={gridphoto4}
            alt="Student Founder 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-700 w-full h-40"></div>
        <div className="bg-white w-full h-40"></div>

        <div className="w-full h-40">
          <img
            src={gridphoto5}
            alt="Student Founder 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white w-full h-40"></div>
        <div className="w-full h-40">
          <img
            src={gridphoto6}
            alt="Student Founder 6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-700 w-full h-40"></div>
        <div className="bg-white w-full h-40"></div>
        <div className="bg-green-700 w-full h-40"></div>

      
        <div className="bg-green-700 w-full h-40"></div>
        <div className="bg-white w-full h-40"></div>
        <div className="bg-green-700 w-full h-40"></div>
        <div className="bg-white w-full h-40"></div>
        <div className="bg-green-700 w-full h-40"></div>
        <div className="bg-white w-full h-40"></div>
      </div>

      
      <div className="my-16">
        <img
          src={EVPnewlogo2}
          alt="EdVenture Park Logo"
          
        />
      </div>

      
      <div className="text-center">
        <p className="text-3xl font-medium">Giving India</p>
        <p className="text-5xl font-bold text-green-700">Its True</p>
        <p className="text-3xl font-medium">
          Student-Startup{" "}
          <span className="text-green-700 font-extrabold text-6xl">UNICORN</span>
        </p>
      </div>
    </div>
  );
}

export default PosterGrid;
