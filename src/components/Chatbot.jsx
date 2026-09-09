import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, HelpCircle, Loader2 } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const initialMessage = {
    sender: 'ai',
    text: "Hello! I'm Mayank's AI Assistant. Ask me anything about his experience, skills, or projects!",
  };
  
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState('');
  
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setMessages([initialMessage]);
      setInput('');
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleHelpClick = () => {
    const helpMsg = {
      sender: 'ai',
      text: "💡 You can ask me things like:\n• \"What is his tech stack?\"\n• \"Tell me about his experience.\"\n• \"What are his recent projects?\"\n• \"Where did he study?\"\n• \"How can I contact him?\""
    };
    setMessages((prev) => [...prev, helpMsg]);
  };

  // --- UPGRADED, HIGHLY ROBUST AI LOGIC ---
  const processMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      let aiResponse = "";
      const lowerInput = text.toLowerCase();

      // We use \b to ensure it only matches whole words. 
      // This prevents "him" from triggering "hi", or "stack" triggering "ta".

      // 1. Guardrail against inappropriate language
      if (/\b(fuck|shit|bitch|ass|stupid|idiot|hate|crap|dumb)\b/.test(lowerInput)) {
        aiResponse = "I am a professional assistant. Please keep the conversation related to Mayank's professional qualifications.";
      }
      // 2. Contact & Hiring
      else if (/\b(contact|hire|email|phone|reach|number|call|message|talk|connect|touch)\b/.test(lowerInput)) {
        aiResponse = "You can easily reach Mayank via email at mayankmehra6497678@gmail.com, or by phone at +91 9654238353. His LinkedIn is also linked in the footer!";
      }
      // 3. Experience & Jobs
      else if (/\b(experience|work|job|role|company|history|career|employment|background|worked|internship)\b/.test(lowerInput)) {
        aiResponse = "Mayank is currently a Full Stack Developer (Nov 2024 - Present) at Tech Reign Era Services in Noida. He builds scalable web applications and SaaS platforms, contributing to 9 full-scale production projects under NDA.";
      }
      // 4. Projects & Work
      else if (/\b(projects|portfolio|build|built|unisys|taalif|ilc|apps|applications|software|websites|cricz|tensilepro)\b/.test(lowerInput)) {
        aiResponse = "Some notable projects include:\n1. Unisys (AI-powered Academic SaaS on GCP).\n2. Taalif (Book Author Management SaaS on AWS).\n3. ILC (High-impact E-Learning Platform).\nHe's highly experienced in multi-tenant architectures and AI-assisted workflows.";
      }
      // 5. Skills & Tech Stack
      else if (/\b(skills|tech|stack|technologies|frameworks|languages|react|django|frontend|backend|tools|database|sql|python|javascript)\b/.test(lowerInput)) {
        aiResponse = "Frontend: React.js, Next.js, Tailwind, JavaScript, HTML5/CSS3.\nBackend: Django, Node.js, PostgreSQL, SQL.\nTools: Git, GCP, AWS, Firebase, CI/CD, Postman.\nAPIs: REST, JWT, OAuth, Stripe, Paytm.";
      }
      // 6. Education & College
      else if (/\b(education|college|degree|university|study|iimt|school|graduated|bachelor|bachelors)\b/.test(lowerInput)) {
        aiResponse = "He is pursuing a Bachelor of Computer Science at IIMT College of Science and Technology, Greater Noida (Sep 2022 - Jun 2025). He's a top academic performer with two merit-based scholarships and two departmental hackathon wins.";
      }
      // 7. Location
      else if (/\b(location|where|city|live|based|country)\b/.test(lowerInput)) {
        aiResponse = "Mayank is based in Noida, India.";
      }
      // 8. Resume Download
      else if (/\b(resume|cv|download|document)\b/.test(lowerInput)) {
        aiResponse = "You can download Mayank's complete resume by clicking the 'Resume' link in the top navigation bar of this website.";
      }
      // 9. About & Summary
      else if (/\b(describe|summary|profile|who|about|bio|yourself)\b/.test(lowerInput)) {
        aiResponse = "Mayank is a results-driven Full-Stack Developer specializing in building high-performance web applications with React.js and Django. He crafts seamless, production-ready SaaS platforms with optimized, clean code.";
      }
      // 10. Greetings (Put last so it doesn't override specific questions)
      else if (/\b(hello|hi|hey|greetings|morning|afternoon|evening|yo|sup)\b/.test(lowerInput)) {
        aiResponse = "Hello there! How can I help you learn more about Mayank's professional background? You can ask about his skills, experience, or projects.";
      }
      // 11. Fallback / Catch-All
      else {
        aiResponse = "That's an interesting question! I am specifically programmed to summarize Mayank's resume. Try asking about his 'experience', 'tech stack', 'education', or 'how to contact him'.";
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
      setIsLoading(false); 
    }, 800); 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    processMessage(input);
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-[100]">
      <div className="relative flex items-end justify-end">
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ transformOrigin: "bottom right", height: '480px', maxHeight: '80vh' }}
              className="absolute bottom-0 right-0 w-[calc(100vw-2rem)] sm:w-96 bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col border border-gray-300"
            >
              {/* Header */}
              <div className="bg-black text-white px-5 py-4 flex justify-between items-center shrink-0 w-full">
                <div>
                  <h3 className="font-display uppercase tracking-widest text-sm leading-none mb-1">AI Assistant</h3>
                  <p className="text-[10px] text-gray-400 font-body uppercase tracking-wider leading-none">Mayank's Portfolio Bot</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={handleHelpClick} className="text-gray-400 hover:text-white transition-colors p-1 rounded-sm hover:bg-gray-800" aria-label="Help">
                    <HelpCircle className="w-4 h-4" />
                  </button>
                  <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1 rounded-sm hover:bg-gray-800" aria-label="Close Chat">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-[#f5f5f5]">
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`max-w-[85%] p-3 text-sm font-body leading-relaxed whitespace-pre-wrap shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-black text-white self-end rounded-tl-xl rounded-tr-xl rounded-bl-xl' 
                        : 'bg-white text-black self-start border border-gray-200 rounded-tl-xl rounded-tr-xl rounded-br-xl'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isLoading && (
                  <div className="max-w-[85%] p-3 text-sm font-body bg-white text-black self-start border border-gray-200 rounded-tl-xl rounded-tr-xl rounded-br-xl shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                    <span className="text-gray-500">Typing...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form onSubmit={handleFormSubmit} className="border-t border-gray-200 p-3 bg-white flex items-center gap-2 shrink-0 w-full">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-100 border border-transparent focus:border-black/20 focus:bg-white text-sm font-body px-4 py-2.5 outline-none transition-all rounded-sm disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-black text-white p-2.5 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors shrink-0 flex items-center justify-center shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 bg-black text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-800 transition-colors border border-black/10"
              aria-label="Open Chat"
            >
              <MessageSquare className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
};

export default Chatbot;