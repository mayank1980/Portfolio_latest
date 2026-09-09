import React, { useState, useEffect, useRef } from 'react';

// 1. Import your local icons from src/assets/icons/
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

// 2. Import your resume PDF from src/assets/doc/
import resumePDF from '../assets/doc/resume.pdf';

const Navbar = () => {
  // State to manage mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Create a ref to attach to our navbar container to detect outside clicks
  const navRef = useRef(null);

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Handle clicking outside of the navbar to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open, and the click happened outside of our navRef
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full px-4 md:px-6 flex justify-center z-50">
      
      {/* 
        Attach the ref here. Anything clicked inside this <nav> 
        will NOT trigger the outside click closer. 
      */}
      <nav 
        ref={navRef}
        className="relative w-full max-w-7xl bg-white/90 backdrop-blur-md rounded-full px-5 py-2.5 flex justify-between items-center shadow-lg border border-gray-100/80"
      >
        
        {/* 1. Logo & Name */}
        <a href="#" className="flex items-center gap-3 pl-1 group" onClick={closeMenu}>
          <div className="bg-black text-white font-display px-2.5 py-1 text-lg rounded-sm tracking-tight leading-none group-hover:bg-gray-800 transition-colors">
            MM
          </div>
          <span className="font-bold uppercase text-xs md:text-sm tracking-widest text-black">
            Mayank Mehra
          </span>
        </a>
        
        {/* 2. DESKTOP Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-gray-700">
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#experience" className="hover:text-black transition-colors">Experience</a>
          <a href="#projects" className="hover:text-black transition-colors">Projects</a>
          <a 
            href={resumePDF} 
            download="Mayank_Mehra_Resume.pdf" 
            className="hover:text-black transition-colors flex items-center gap-1"
          >
            Resume
          </a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>

        {/* 3. Right Side: Social Icons & Mobile Menu Button */}
        <div className="flex items-center gap-2.5">
          
          {/* GitHub & LinkedIn (Hidden on Mobile, shown in dropdown instead) */}
          <div className="hidden md:flex items-center gap-2.5">
            <a 
              href="https://github.com/mayank1980" 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 p-2 rounded-full border border-gray-200 hover:border-black hover:bg-gray-100 transition-all duration-300 shadow-sm flex items-center justify-center"
            >
              <img src={githubIcon} alt="GitHub" className="w-4 h-4 object-contain" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mayank-mehra-13a678230" 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 p-2 rounded-full border border-gray-200 hover:border-black hover:bg-gray-100 transition-all duration-300 shadow-sm flex items-center justify-center"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 object-contain" />
            </a>
          </div>

          {/* Hamburger Menu Button (Visible ONLY on Mobile/Tablet) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-black transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* SVG changes from Hamburger to 'X' based on state */}
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

        </div>

        {/* 4. MOBILE Navigation Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-[115%] left-0 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-5 md:hidden text-sm font-semibold uppercase tracking-widest text-gray-700 origin-top animate-fade-in-down">
            <a href="#about" onClick={closeMenu} className="hover:text-black transition-colors block text-center">About</a>
            <a href="#experience" onClick={closeMenu} className="hover:text-black transition-colors block text-center">Experience</a>
            <a href="#projects" onClick={closeMenu} className="hover:text-black transition-colors block text-center">Projects</a>
            <a 
              href={resumePDF} 
              download="Mayank_Mehra_Resume.pdf" 
              onClick={closeMenu} 
              className="hover:text-black transition-colors block text-center"
            >
              Resume
            </a>
            <a href="#contact" onClick={closeMenu} className="hover:text-black transition-colors block text-center">Contact</a>
            
            {/* Social Icons inside mobile menu */}
            <div className="flex justify-center gap-4 mt-2 pt-4 border-t border-gray-200">
              <a href="https://github.com/mayank1980" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">
                <img src={githubIcon} alt="GitHub" className="w-5 h-5 object-contain" />
              </a>
              <a href="https://www.linkedin.com/in/mayank-mehra-13a678230" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>
        )}

      </nav>
    </div>
  );
};

export default Navbar;