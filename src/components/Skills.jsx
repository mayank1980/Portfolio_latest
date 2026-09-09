import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { 
      category: "Frontend", 
      tools: "HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Framer Motion, Bootstrap, Redux Toolkit, Responsive UI Architecture" 
    },
    { 
      category: "Backend", 
      tools: "Django, Django REST Framework (DRF), FastAPI (Basic), PostgreSQL, SQL, Database Management" 
    },
    { 
      category: "Tools & Cloud", 
      tools: "Git, GitHub, CI/CD Pipelines, Postman, Firebase, Google Cloud Platform (GCP), AWS" 
    },
    { 
      category: "APIs & Core", 
      tools: "RESTful APIs, JWT Authentication, OAuth, Stripe Integration, Paytm, System Architecture, Performance & Code Optimization" 
    }
  ];

  // Container animation with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Card reveal animation variant
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-5 sm:px-8 md:px-12 bg-offwhite border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        
        {/* Header Label with Fade In */}
        <motion.p 
          className="text-[10px] sm:text-xs 2xl:text-sm uppercase tracking-widest mb-8 sm:mb-12 border-b border-gray-300 pb-3 sm:pb-4 text-gray-500 font-semibold"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Technical Arsenal
        </motion.p>

        {/* Responsive Grid with Stagger Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 2xl:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex flex-col gap-2 sm:gap-3 group"
            >
              <h4 className="font-display text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl uppercase tracking-wider text-black transition-colors duration-300">
                {skill.category}
              </h4>
              <p className="text-gray-700 font-normal leading-relaxed text-sm sm:text-base md:text-lg 2xl:text-xl">
                {skill.tools}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;