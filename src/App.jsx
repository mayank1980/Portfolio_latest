import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

// 1. Import your new Chatbot
import Chatbot from './components/Chatbot';

function App() {
  // Check sessionStorage on initial render (prevents any flash/glitch on refresh)
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('hasSeenLoader');
  });

  const handleLoaderComplete = () => {
    sessionStorage.setItem('hasSeenLoader', 'true');
    setLoading(false);
  };

  return (
    <div className="bg-offwhite min-h-screen font-body text-black selection:bg-black selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={handleLoaderComplete} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Footer />
            
            {/* 2. Add the Floating Chatbot Component here */}
            <Chatbot />
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;