import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

function Hamburger({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Toggle Button for Hamburger Menu */}
      <button onClick={toggleMenu}>
        <img className='w-[24px]' src='./img/hamburger.png' alt="Hamburger Menu" />
      </button>

      {/* Menu Content */}
      {isOpen && (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <button className="close-button" onClick={closeMenu}>
            <img className='w-[36px]' src='./img/close.png' alt="Close Menu" />
          </button>
          <ul className="flex flex-col">
            <li
              style={
                currentPage === 'home'
                  ? { color: '#169D53', fontWeight: 'bold' }
                  : { color: 'black' }
              }
              className="m-[12px]"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              style={
                currentPage === 'aboutus'
                  ? { color: '#169D53', fontWeight: 'bold' }
                  : { color: 'black' }
              }
              className="m-[12px]"
            >
              <Link to="/about">About Us</Link>
            </li>
            <li
              style={
                currentPage === 'portfolio'
                  ? { color: '#169D53', fontWeight: 'bold' }
                  : { color: 'black' }
              }
              className="m-[12px]"
            >
              <Link to="/search-engine">Portfolio</Link>
            </li>
            <li
              style={
                currentPage === 'programs'
                  ? { color: '#169D53', fontWeight: 'bold' }
                  : { color: 'black' }
              }
              className="m-[12px]"
            >
              <Link to="/programs">Programs</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          padding: 10px;
        }

        .menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .menu.open {
          opacity: 1;
          pointer-events: auto;
        }

        .menu a {
          text-decoration: none;
          color: #333;
          padding: 5px;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          padding: 10px;
          position: absolute;
          top: 10px;
          right: 10px;
        }
      `}</style>
    </div>
  );
}

export default Hamburger;
