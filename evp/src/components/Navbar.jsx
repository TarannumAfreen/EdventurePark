// import React from 'react';
// import Hamburger from "./Hamburger";
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/newevplogo.png'

// function Navbar({ currentPage }) {
//   return (
//     <>
//       {/* Mobile view */}
//       <div
//         className="pt-[24px] flex lg:hidden md:hidden"
//         style={{
//           justifyContent: 'space-between'
//         }}
//       >
//         <img
//           style={{ width: '40vw', maxWidth: '200px' }}
//           src={logo}
//           alt="EVP Logo"
//         />
//         <div style={{ alignSelf: 'center', marginRight: '12px' }}>
//           <div className="flex">
//             <a
//               href="https://edventurepark.incubators.app/register"
//               className="flex align-center"
//             >
//               <button
//                 style={{
//                   background: '#169D53',
//                   padding: '4px 12px',
//                   borderRadius: 4,
//                   color: 'white',
//                   fontSize: '18px',
//                   fontFamily: 'Inter'
//                 }}
//               >
//                 Apply Now
//               </button>
//             </a>
//             <Hamburger currentPage={currentPage} />
//           </div>
//         </div>
//       </div>

//       {/* Desktop view */}
//       <div
//         className="hidden lg:flex md:flex"
//         style={{
//           justifyContent: 'space-between',
//           padding: '18px',
//         }}
//       >
//         <img
//           style={{ width: '40vw', maxWidth: '200px' }}
//           src="./img/EVP new logo 1.png"
//           alt="EVP Logo"
//         />
//         <div style={{ alignSelf: 'center', marginRight: '24px' }}>
//           <div className="flex">
//             <div
//               className="flex items-center text-[18px]"
//               style={{ fontFamily: 'Inter' }}
//             >
//               <ul className="flex">
//                 <li
//                   style={
//                     currentPage === 'home'
//                       ? { color: '#169D53', fontWeight: 'bold' }
//                       : { color: 'black' }
//                   }
//                   className="m-[12px]"
//                 >
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li
//                   style={
//                     currentPage === 'aboutus'
//                       ? { color: '#169D53', fontWeight: 'bold' }
//                       : { color: 'black' }
//                   }
//                   className="m-[12px]"
//                 >
//                   <Link to="/about">About Us</Link>
//                 </li>
//                 <li
//                   style={
//                     currentPage === 'portfolio'
//                       ? { color: '#169D53', fontWeight: 'bold' }
//                       : { color: 'black' }
//                   }
//                   className="m-[12px]"
//                 >
//                   <Link to="/search-engine">Portfolio</Link>
//                 </li>
//                 <li
//                   style={
//                     currentPage === 'programs'
//                       ? { color: '#169D53', fontWeight: 'bold' }
//                       : { color: 'black' }
//                   }
//                   className="m-[12px]"
//                 >
//                   <Link to="/programs">Programs</Link>
//                 </li>
//               </ul>
//             </div>
//             <a
//               href="https://edventurepark.incubators.app/register"
//               className="flex align-center"
//             >
//               <button
//                 style={{
//                   background: '#169D53',
//                   padding: '4px 12px',
//                   borderRadius: 4,
//                   color: 'white',
//                   fontSize: '18px',
//                   fontFamily: 'Inter'
//                 }}
//               >
//                 Apply Now
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;


// import React from 'react';
// import Hamburger from "./Hamburger";
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/newevplogo.png'; // Ensure this path is correct

// function Navbar({ currentPage }) {
//   return (
//     <>
//       {/* Mobile view */}
//       <div className="pt-4 flex justify-between items-center lg:hidden md:hidden px-4">
//         <img
//           className="w-[40vw] max-w-[200px]"
//           src={logo}
//           alt="EVP Logo"
//         />
//         <div className="flex items-center">
//           <a
//             href="https://edventurepark.incubators.app/register"
//             className="flex align-center"
//           >
//             <button
//               className="bg-[#169D53] px-3 py-1 rounded text-white text-lg font-inter"
//             >
//               Apply Now
//             </button>
//           </a>
//           <Hamburger currentPage={currentPage} />
//         </div>
//       </div>

//       {/* Desktop view */}
//       <div className="hidden lg:flex md:flex justify-between items-center p-4">
//         <img
//           className="w-[40vw] max-w-[200px]"
//           src={logo} // Use the same logo variable for consistency
//           alt="EVP Logo"
//         />
//         <div className="flex items-center space-x-4">
//           <ul className="flex space-x-4">
//             <li className={`text-lg ${currentPage === 'home' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
//               <Link to="/">Home</Link>
//             </li>
//             <li className={`text-lg ${currentPage === 'aboutus' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li className={`text-lg ${currentPage === 'portfolio' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
//               <Link to="/search-engine">Portfolio</Link>
//             </li>
//             <li className={`text-lg ${currentPage === 'programs' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
//               <Link to="/programs">Programs</Link>
//             </li>
//           </ul>
//           <a
//             href="https://edventurepark.incubators.app/register"
//             className="flex align-center"
//           >
//             <button
//               className="bg-[#169D53] px-3 py-1 rounded text-white text-lg font-inter"
//             >
//               Apply Now
//             </button>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/newevplogo.png'; // Ensure this path is correct
import { XMarkIcon } from '@heroicons/react/24/solid'; // Ensure this import is correct

// Hamburger component
const Hamburger = ({ onClick }) => (
  <button onClick={onClick} className="p-2 focus:outline-none">
    <span className="block w-6 h-1 bg-black mb-1"></span>
    <span className="block w-6 h-1 bg-black mb-1"></span>
    <span className="block w-6 h-1 bg-black"></span>
  </button>
);

function Navbar({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile view */}
      <div className="pt-4 flex justify-between items-center lg:hidden md:hidden px-4">
        <img
          className="w-[40vw] max-w-[200px]"
          src={logo}
          alt="EVP Logo"
        />
        <div className="flex items-center">
          <a
            href="https://edventurepark.incubators.app/register"
            className="flex align-center"
          >
            <button
              className="bg-[#169D53] px-3 py-1 rounded text-white text-lg font-inter"
            >
              Apply Now
            </button>
          </a>
          <Hamburger onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 z-10">
          <div className="flex justify-between items-center">
            <img
              className="w-[40vw] max-w-[200px]"
              src={logo}
              alt="EVP Logo"
            />
            <button onClick={toggleMenu} className="text-black">
              <XMarkIcon className="h-6 w-6" /> {/* Render the icon correctly */}
            </button>
          </div>
          <ul className="flex flex-col space-y-2 mt-4">
            <li className={`text-lg ${currentPage === 'home' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className={`text-lg ${currentPage === 'aboutus' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
              <Link to="/about" onClick={toggleMenu}>About Us</Link>
            </li>
            <li className={`text-lg ${currentPage === 'portfolio' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
              <Link to="/search-engine" onClick={toggleMenu}>Portfolio</Link>
            </li>
            <li className={`text-lg ${currentPage === 'programs' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
              <Link to="/programs" onClick={toggleMenu}>Programs</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop view */}
      <div className="hidden lg:flex md:flex justify-between items-center p-4">
        <img
          className="w-[40vw] max-w-[200px]"
          src={logo} // Use the same logo variable for consistency
          alt="EVP Logo"
        />
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li className={`text-lg ${currentPage === 'home' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`text-lg ${currentPage === 'aboutus' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
              <Link to="/about">About Us</Link>
            </li>
            <li className={`text-lg ${currentPage === 'portfolio' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
              <Link to="/search-engine">Portfolio</Link>
            </li>
            <li className={`text-lg ${currentPage === 'programs' ? 'text-[#169D53] font-bold' : 'text-black'}`}>
              <Link to="/programs">Programs</Link>
            </li>
          </ul>
          <a
            href="https://edventurepark.incubators.app/register"
            className="flex align-center"
          >
            <button
              className="bg-[#169D53] px-3 py-1 rounded text-white text-lg font-inter"
            >
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
