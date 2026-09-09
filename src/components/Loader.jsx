import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  // ONLY CHANGE: Adjusted the base text sizes (e.g., text-5xl instead of text-7xl) 
  // and added 'sm:' breakpoints to prevent horizontal cut-offs on tiny mobile screens.
  const greetings = [
    { text: "hello", style: "font-['Caveat',_cursive] text-6xl sm:text-7xl md:text-9xl font-normal lowercase tracking-normal" },
    { text: "hola", style: "font-['Caveat',_cursive] text-6xl sm:text-7xl md:text-9xl font-normal lowercase tracking-normal" },
    { text: "bonjour", style: "font-['Caveat',_cursive] text-6xl sm:text-7xl md:text-9xl font-normal lowercase tracking-normal" },
    { text: "नमस्ते", style: "font-['Kalam',_cursive] text-5xl sm:text-6xl md:text-8xl font-normal tracking-normal" },
    { 
      text: "MAYANK MEHRA", 
      // Lowered base text to 2xl and base tracking to 0.15em for small screens, scales up on sm and md
      style: "font-display font-medium tracking-[0.15em] sm:tracking-[0.25em] uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white" 
    }
  ];

  const [index, setIndex] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const isLastName = index === greetings.length - 1;

  // 1. Wait for fonts to fully load into browser cache before starting
  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      setFontsLoaded(true);
    }
  }, []);

  // 2. Run the greeting animation only after fonts are 100% ready
  useEffect(() => {
    if (!fontsLoaded) return;

    if (!isLastName) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 550);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [index, isLastName, onComplete, fontsLoaded]);

  // Silky cubic-bezier easing curve for entering
  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <>
      {/* Pre-load fonts with font-display: block to prevent fallback font flashing */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Kalam:wght@400;700&display=block');
      `}</style>

      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090b] text-white px-4 sm:px-6 select-none overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ 
          y: "-100%", 
          transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
        }}
      >
        <div className="relative flex items-center justify-center h-36 w-full max-w-5xl text-center overflow-hidden">
          {fontsLoaded && (
            /* mode="wait" ensures the old text is 100% removed before the new one renders */
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 16, 
                  scale: 0.98 
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: isLastName ? 0.65 : 0.42, 
                    ease: smoothEase,
                    opacity: { duration: 0.35 }
                  } 
                }}
                exit={{ 
                  opacity: 0, 
                  y: -14, 
                  scale: 1.02,
                  transition: { 
                    duration: 0.18, 
                    ease: "easeIn" 
                  } 
                }}
                className={`leading-none text-white whitespace-nowrap will-change-[transform,opacity] ${greetings[index].style}`}
              >
                {greetings[index].text}
              </motion.h1>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Loader;