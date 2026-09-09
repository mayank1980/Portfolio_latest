import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import local PNG icons & Footer image
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import footerImg from '../assets/img/footer.png';

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
      className="bg-[#e2e4e7] py-10 sm:py-14 md:py-16 px-5 sm:px-8 md:px-12 relative overflow-hidden border-t border-gray-300"
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        
        {/* Top CTA Row */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 border-b border-black/15 pb-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0.1}
        >
          <div className="flex items-start md:items-center gap-3 sm:gap-4 md:gap-6">
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="shrink-0 cursor-pointer"
            >
              <ArrowUpRight className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 text-black" />
            </motion.div>
            <div>
              <span className="text-[10px] sm:text-xs 2xl:text-sm uppercase tracking-widest text-gray-600 font-semibold mb-1 block">
                Career &amp; Engineering Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl 2xl:text-6xl font-display uppercase tracking-tight text-black leading-none">
                Let's Connect &amp;<br />Build Together
              </h2>
            </div>
          </div>

          <motion.a 
            href="mailto:mayankmehra6497678@gmail.com" 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="border-2 border-black bg-black text-white rounded-full px-6 sm:px-7 py-2.5 sm:py-3 uppercase tracking-widest text-[11px] sm:text-xs font-semibold hover:bg-transparent hover:text-black transition-colors duration-300 text-center shadow-sm whitespace-nowrap self-start md:self-auto"
          >
            Get In Touch
          </motion.a>
        </motion.div>
        
        {/* Giant Signature Name with Leaning Cutout Positioned at Start of M */}
        <div className="relative flex justify-center items-end my-4 md:my-8 overflow-visible select-none">
          <div className="relative inline-flex items-end">
            
            {/* Cutout shifted to the left edge of 'M' */}
            <motion.img
              src={footerImg}
              alt="Mayank Mehra"
              className="absolute bottom-0 -left-6 sm:-left-10 md:-left-14 lg:-left-16 -translate-x-1/2 pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)] z-10 h-[118%] max-h-[190px] sm:max-h-[300px] md:max-h-[420px] lg:max-h-[520px] 2xl:max-h-[580px] object-contain origin-bottom -rotate-[1deg]"
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
            />

            {/* Giant Background Text */}
            <motion.h1 
              className="text-[clamp(2.8rem,13.5vw,14rem)] 2xl:text-[15rem] font-display text-black leading-none tracking-tighter uppercase whitespace-nowrap text-center block"
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
        </div>
        
        {/* Bottom Bar with Links & Info */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between mt-6 pt-6 border-t border-black/10 text-[11px] sm:text-xs 2xl:text-sm uppercase tracking-widest text-gray-600 font-semibold items-center gap-4 text-center md:text-left relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.3}
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-6 items-center">
            <span>Noida, India</span>
            <span className="hidden sm:inline">•</span>
            <a href="tel:9654238353" className="hover:text-black transition">+91 9654238353</a>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:mayankmehra6497678@gmail.com" className="hover:text-black transition lowercase font-body font-normal">
              mayankmehra6497678@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/mayank-mehra-13a678230" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 hover:text-black transition group"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="underline-offset-4 group-hover:underline">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/mayank1980" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 hover:text-black transition group"
            >
              <img src={githubIcon} alt="GitHub" className="w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="underline-offset-4 group-hover:underline">GitHub</span>
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;