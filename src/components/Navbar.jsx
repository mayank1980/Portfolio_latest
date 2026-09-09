import React from 'react';

// 1. Import your local icons from src/assets/icons/
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

// 2. Import your resume PDF from src/assets/doc/
import resumePDF from '../assets/doc/resume.pdf';

const Navbar = () => (
  <div className="fixed top-6 left-0 w-full px-6 flex justify-center z-50">
    <nav className="w-full max-w-7xl bg-white/90 backdrop-blur-md rounded-full px-5 py-2.5 flex justify-between items-center shadow-lg border border-gray-100/80">
      
      {/* 1. Logo & Name */}
      <a href="#" className="flex items-center gap-3 pl-1 group">
        <div className="bg-black text-white font-display px-2.5 py-1 text-lg rounded-sm tracking-tight leading-none group-hover:bg-gray-800 transition-colors">
          MM
        </div>
        <span className="font-bold uppercase text-xs md:text-sm tracking-widest text-black">
          Mayank Mehra
        </span>
      </a>
      
      {/* 2. Navigation Anchor Links */}
      <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-gray-700">
        <a href="#about" className="hover:text-black transition-colors">
          About
        </a>
        <a href="#experience" className="hover:text-black transition-colors">
          Experience
        </a>
        <a href="#projects" className="hover:text-black transition-colors">
          Projects
        </a>
        
        {/* NEW: Resume Download Link (Second to last) */}
        <a 
          href={resumePDF} 
          download="Mayank_Mehra_Resume.pdf" 
          className="hover:text-black transition-colors flex items-center gap-1"
        >
          Resume
        </a>

        <a href="#contact" className="hover:text-black transition-colors">
          Contact
        </a>
      </div>

      {/* 3. GitHub & LinkedIn using Local PNG Icons */}
      <div className="flex items-center gap-2.5">
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

    </nav>
  </div>
);

export default Navbar;