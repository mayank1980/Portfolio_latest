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
          staggerChildren: 0.1,
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
        className="py-16 sm:py-24 md:py-32 lg:py-36 px-5 sm:px-8 md:px-12 bg-black text-white overflow-hidden"
      >
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
          
          {/* Giant Heading with Scroll Reveal */}
          <motion.h2 
            className="text-[clamp(3.5rem,10vw,8rem)] 2xl:text-[9rem] font-display leading-[0.85] md:leading-[0.8] tracking-tighter uppercase mb-10 sm:mb-14 md:mb-16 select-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            custom={0.1}
          >
            /EXPERIENCE
          </motion.h2>
          
          {/* Experience Content Block */}
          <div className="border-t border-white/20 pt-8 sm:pt-12 flex flex-col md:flex-row justify-between group">
            
            {/* Company & Timeline */}
            <motion.div 
              className="md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              custom={0.2}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-display uppercase tracking-wider text-white">
                Tech Reign Era Services
              </h3>
              <p className="text-gray-400 uppercase tracking-widest text-[11px] sm:text-xs md:text-sm 2xl:text-base mt-2 sm:mt-3 font-medium">
                Noida, India • Nov 2024 - Present
              </p>
            </motion.div>

            {/* Role & Contributions */}
            <div className="md:w-2/3">
              <motion.h4 
                className="text-xl sm:text-2xl 2xl:text-3xl font-medium mb-4 sm:mb-6 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUpVariant}
                custom={0.25}
              >
                Full Stack Developer
              </motion.h4>
              
              <motion.ul 
                className="text-gray-300 font-light text-sm sm:text-base md:text-lg 2xl:text-xl space-y-2.5 sm:space-y-3 list-disc list-inside leading-relaxed"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.li variants={listItemVariants}>
                  Built scalable full-stack web applications using <span className="text-white font-normal">React.js</span> and <span className="text-white font-normal">Django</span>.
                </motion.li>
                <motion.li variants={listItemVariants}>
                  Developed production-ready SaaS platforms, company websites, and web applications.
                </motion.li>
                <motion.li variants={listItemVariants}>
                  Implemented responsive UI, secure JWT authentication, and REST API integrations.
                </motion.li>
                <motion.li variants={listItemVariants}>
                  Contributed to 9 full-scale production projects under NDA across SaaS and business applications.
                </motion.li>
                <motion.li variants={listItemVariants}>
                  Improved overall platform performance, system stability, and code reliability in production environments.
                </motion.li>
              </motion.ul>
            </div>

          </div>
        </div>
      </section>
    );
  };

  export default Experience;