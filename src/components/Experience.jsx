import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  // Animation Variants for smooth reveal on scroll
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: customDelay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly slower stagger for a premium feel
        delayChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="experience" 
      className="py-16 sm:py-24 md:py-32 lg:py-40 px-5 sm:px-8 md:px-12 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
        
        {/* Giant Heading with Scroll Reveal */}
        <motion.h2 
          className="text-[clamp(3.5rem,10vw,9rem)] 2xl:text-[10rem] font-display leading-[0.85] md:leading-[0.8] tracking-tighter uppercase mb-12 sm:mb-16 md:mb-20 select-none text-white/95"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0.1}
        >
          /EXPERIENCE
        </motion.h2>
        
        {/* Experience Content Block - Added group hover effect for the border */}
        <div className="border-t border-white/20 pt-8 sm:pt-12 md:pt-16 flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 group transition-colors duration-500 hover:border-white/40">
          
          {/* Left Column: Company & Timeline */}
          <motion.div 
            className="md:w-1/3 flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            custom={0.2}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-none">
              Tech Reign <br className="hidden md:block" /> Era Services
            </h3>
            {/* Styled the dates/location to look more technical and crisp */}
            <div className="mt-4 sm:mt-6 inline-block bg-white/10 px-3 py-1.5 rounded-sm">
              <p className="text-gray-300 uppercase tracking-widest text-[10px] sm:text-xs font-semibold">
                Noida, India • Nov 2024 - Present
              </p>
            </div>
          </motion.div>

          {/* Right Column: Role & Contributions */}
          <div className="md:w-2/3">
            <motion.h4 
              className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 text-white tracking-wide"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              custom={0.25}
            >
              Full Stack Developer
            </motion.h4>
            
            <motion.ul 
              className="space-y-4 sm:space-y-5"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Custom List Items with perfect alignment on mobile and desktop */}
              {[
                <>Built scalable full-stack web applications using <span className="text-white font-medium">React.js</span> and <span className="text-white font-medium">Django</span>.</>,
                "Developed production-ready SaaS platforms, company websites, and web applications.",
                "Implemented responsive UI, secure JWT authentication, and REST API integrations.",
                "Contributed to 9 full-scale production projects under NDA across SaaS and business applications.",
                "Improved overall platform performance, system stability, and code reliability in production environments."
              ].map((text, index) => (
                <motion.li 
                  key={index} 
                  variants={listItemVariants}
                  className="flex items-start gap-3 sm:gap-4 text-gray-400 font-light text-sm sm:text-base md:text-lg leading-relaxed group/item"
                >
                  {/* Sleek Custom Bullet Point */}
                  <span className="text-white/50 mt-1 sm:mt-1.5 text-xs sm:text-sm transition-colors group-hover/item:text-white">
                    ▹
                  </span>
                  <span className="flex-1 transition-colors duration-300 group-hover/item:text-gray-200">
                    {text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;