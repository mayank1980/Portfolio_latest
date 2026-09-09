import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation Variants for smooth reveal on scroll
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: customDelay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section 
      id="about" 
      className="bg-[#0a0a0a] text-white py-16 sm:py-24 md:py-32 lg:py-36 px-5 sm:px-8 md:px-12 relative flex flex-col justify-between min-h-[100dvh] overflow-hidden"
    >
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8 sm:gap-12 max-w-7xl 2xl:max-w-[1600px] mx-auto w-full relative my-auto">
        
        {/* Left: Giant Heading with Scroll Reveal */}
        <motion.div 
          className="md:w-1/2 flex items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0.1}
        >
          <h2 className="text-[clamp(3.5rem,14vw,11rem)] 2xl:text-[12rem] font-display leading-[0.85] md:leading-[0.8] tracking-tighter uppercase relative z-10 select-none">
            /ABOUT
          </h2>
        </motion.div>

        {/* Right: Narrative tailored to your Resume */}
        <motion.div 
          className="md:w-1/2 flex flex-col justify-end pt-4 sm:pt-8 md:pt-20 lg:pt-24 relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0.25}
        >
          {/* Interactive Arrow with Hover Rotation */}
          <motion.div 
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="inline-block w-fit cursor-pointer"
          >
            <ArrowUpRight className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 sm:mb-6 text-gray-500 hover:text-white transition-colors duration-300" />
          </motion.div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-gray-300 font-light leading-relaxed max-w-xl 2xl:max-w-3xl">
            "Mayank Mehra is a results-driven Full-Stack Developer specializing in building high-performance web applications with <span className="text-white font-normal">React.js</span> and <span className="text-white font-normal">Django</span>. With proven expertise delivering production-ready SaaS platforms, AI-assisted workflows, and role-based systems, Mayank crafts seamless digital experiences backed by clean, optimized code."
          </p>
        </motion.div>
      </div>

      {/* Bottom Status Bar */}
      <motion.div 
        className="max-w-7xl 2xl:max-w-[1600px] mx-auto w-full pt-8 sm:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] sm:text-xs 2xl:text-sm uppercase tracking-widest text-gray-500 font-medium gap-2 sm:gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span>CURRENTLY FULL STACK DEVELOPER AT TECH REIGN ERA SERVICES</span>
        <span>NOIDA, INDIA</span>
      </motion.div>
    </section>
  );
};

export default About;