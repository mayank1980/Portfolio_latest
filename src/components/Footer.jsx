import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import local PNG icons ONLY (Image removed as requested)
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

const Footer = () => {
  // Smooth reveal variant
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <footer 
      id="contact" 
      className="bg-[#e2e4e7] py-12 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 relative overflow-hidden border-t border-gray-300"
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        
        {/* Top CTA Row */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 border-b border-black/15 pb-8 sm:pb-10 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0.1}
        >
          <div className="flex items-start sm:items-center gap-4 sm:gap-5 md:gap-6">
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="shrink-0 cursor-pointer hidden sm:block"
            >
              <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16 2xl:w-20 2xl:h-20 text-black" />
            </motion.div>
            <div>
              <span className="text-[10px] sm:text-xs 2xl:text-sm uppercase tracking-widest text-gray-500 font-bold mb-1.5 block">
                Career &amp; Engineering Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-display uppercase tracking-tight text-black leading-[1.1]">
                Let's Connect &amp;<br className="hidden sm:block" /> Build Together
              </h2>
            </div>
          </div>

          <motion.a 
            href="mailto:mayankmehra6497678@gmail.com" 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full md:w-auto border-2 border-black bg-black text-white rounded-full px-6 sm:px-8 py-3 sm:py-3.5 uppercase tracking-widest text-xs sm:text-sm font-semibold hover:bg-transparent hover:text-black transition-colors duration-300 text-center shadow-sm whitespace-nowrap mt-2 md:mt-0"
          >
            Get In Touch
          </motion.a>
        </motion.div>
        
        {/* Giant Signature Name (Perfectly Centered now that image is gone) */}
        <div className="w-full flex justify-center items-center my-10 md:my-16 overflow-hidden select-none">
          <motion.h1 
            // Increased the clamp size slightly since it now has the full width of the screen
            className="text-[clamp(3rem,14.5vw,16rem)] 2xl:text-[18rem] font-display text-black leading-none tracking-tighter uppercase whitespace-nowrap text-center block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
          >
            MAYANK MEHRA
          </motion.h1>
        </div>
        
        {/* Bottom Bar with Links & Info */}
        <motion.div 
          className="flex flex-col xl:flex-row justify-between mt-8 pt-8 border-t border-black/10 text-[11px] sm:text-xs 2xl:text-sm uppercase tracking-widest text-gray-600 font-semibold items-center gap-6 xl:gap-4 text-center xl:text-left relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.3}
        >
          {/* Contact details wrapping beautifully on mobile */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 gap-y-2 sm:gap-x-6 items-center w-full xl:w-auto">
            <span className="whitespace-nowrap">Noida, India</span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a href="tel:9654238353" className="hover:text-black transition whitespace-nowrap">+91 9953598064</a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a 
              href="mailto:mayankmehra6497678@gmail.com" 
              className="hover:text-black transition lowercase font-body font-normal break-all sm:break-normal"
            >
              mayankmehra6497678@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-8 w-full xl:w-auto">
            <a 
              href="https://www.linkedin.com/in/mayank-mehra-13a678230" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 hover:text-black transition group"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="underline-offset-4 group-hover:underline">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/mayank1980" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 hover:text-black transition group"
            >
              <img src={githubIcon} alt="GitHub" className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="underline-offset-4 group-hover:underline">GitHub</span>
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;