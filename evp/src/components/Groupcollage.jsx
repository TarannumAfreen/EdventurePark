import React from 'react';
import pic1 from "../assets/images/Home/remove1.png";
import pic2 from "../assets/images/Home/remove2.png";
import pic3 from "../assets/images/Home/remove3.png";
import pic4 from "../assets/images/Home/remove4.png";
import pic5 from "../assets/images/Home/remove5.png";
import pic6 from "../assets/images/Home/remove6.png";
import pic7 from "../assets/images/Home/remove7.png";
import pic8 from "../assets/images/Home/remove8.png";
import pic9 from "../assets/images/Home/remove9.png";
import pic11 from "../assets/images/Home/remove11.png"; 
import pic12 from "../assets/images/Home/remove12.png";
import pic13 from "../assets/images/Home/remove13.png";
import pic14 from "../assets/images/Home/remove14.png";

function Groupcollage() {
  return (
    <div className="bg-emerald-600 p-4 mb-4 relative">
  
      <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
        <p className="text-sm md:text-base font-semibold text-black">
          “Crucial Insights building startup. The experience of pre Incubation program was great. It's designed to help founders build basic blocks & understand how do you even get started with your idea”
        </p>
        <p className="text-sm md:text-base font-bold text-black mt-2">
          - Azhar Mohiddun, Founder & CEO Bioreform
        </p>
      </div>

   
      <div className="flex flex-wrap justify-start space-x-4 mt-16">
        <div className="w-auto h-auto">
          <img src={pic1} alt="Image 1" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic2} alt="Image 2" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic3} alt="Image 3" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic4} alt="Image 4" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic5} alt="Image 5" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic6} alt="Image 6" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic7} alt="Image 7" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic8} alt="Image 8" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic9} alt="Image 9" className="w-full h-auto object-cover" />
        </div>
       
        <div className="w-auto h-auto">
          <img src={pic11} alt="Image 11" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic12} alt="Image 12" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic13} alt="Image 13" className="w-full h-auto object-cover" />
        </div>
        <div className="w-auto h-auto">
          <img src={pic14} alt="Image 14" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Groupcollage;
