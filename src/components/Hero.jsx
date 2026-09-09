import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import mayankImg from '../assets/img/mayank.png';

const Hero = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Wait until all custom fonts are ready before rendering the marquee
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontLoaded(true);
      });
    } else {
      setFontLoaded(true);
    }
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[550px] w-full bg-[#e2e4e7] overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. Seamless Infinite Marquee */}
      {/* FIXED: Adjusted top positioning on mobile so it sits lower, behind the head */}
      <motion.div 
        className="absolute top-[48%] sm:top-[45%] md:top-[45%] -translate-y-1/2 w-full flex whitespace-nowrap z-0 pointer-events-none overflow-hidden select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: fontLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div 
          className="flex whitespace-nowrap will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Block 1 */}
          <div className="flex gap-[4vw] pr-[4vw]">
            <span className="text-[clamp(4.5rem,22vw,20rem)] 2xl:text-[22vw] font-display text-black leading-none tracking-tighter uppercase">MAYANK MEHRA</span>
            <span className="text-[clamp(4.5rem,22vw,20rem)] 2xl:text-[22vw] font-display text-black leading-none tracking-tighter uppercase">MAYANK MEHRA</span>
            <span className="text-[clamp(4.5rem,22vw,20rem)] 2xl:text-[22vw] font-display text-black leading-none tracking-tighter uppercase">MAYANK MEHRA</span>
            <span className="text-[clamp(4.5rem,22vw,20rem)] 2xl:text-[22vw] font-display text-black leading-none tracking-tighter uppercase">MAYANK MEHRA</span>
          </div>
          
          {/* Block 2 (Exact duplicate for seamless looping) */}
          <div className="flex gap-[4vw] pr-[4vw]">
            <span className="text-[clamp(4.5rem,22vw,20rem)] 2xl:text-[22vw] font-display text-black leading-none tracking-tighter uppercase">MAYANK MEHRA</span>
            <span className="text-[clamp(4.5rem,22vw,20rem)] 2xl:text-[22vw] font-display text-black leading-none tracking-tighter uppercase">MAYANK MEHRA</span>
            <span className="text-[clamp(4.5rem,22vw,20rem)] 2xl:text-[22vw] font-display text-black leading-none tracking-tighter uppercase">MAYANK MEHRA</span>
            <span className="text-[clamp(4.5rem,22vw,20rem)] 2xl:text-[22vw] font-display text-black leading-none tracking-tighter uppercase">MAYANK MEHRA</span>
          </div>
        </motion.div>
      </motion.div>

      {/* 2. Bottom Left Details */}
      <motion.div 
        className="absolute left-5 sm:left-6 md:left-12 bottom-6 sm:bottom-10 md:bottom-16 z-20 text-black flex flex-col items-start max-w-[65vw] sm:max-w-none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-semibold mb-0.5">Specialization</span>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-display uppercase tracking-tight text-black leading-none">
          Full Stack Developer
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-body text-gray-700 font-medium tracking-wide mt-1">
          React.js &amp; Frontend Specialist
        </p>
      </motion.div>

      {/* 3. Center Cutout Image */}
      {/* FIXED: Increased mobile height from h-[52vh] to h-[65vh] so the head reaches the text */}
      <motion.div 
        className="absolute bottom-0 z-10 w-full flex justify-center h-[65vh] sm:h-[75vh] md:h-[85vh] max-h-[1100px] pointer-events-none"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <img 
          src={mayankImg} 
          alt="Mayank Mehra" 
          className="h-full w-auto object-contain object-bottom drop-shadow-2xl pointer-events-auto"
        />
      </motion.div>

    </section>
  );
};

export default Hero;