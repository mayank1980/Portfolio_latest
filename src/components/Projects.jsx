import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    { 
      id: "01",
      name: "OPEN UI SYSTEM", 
      category: "Open-Source Component Library (React & Next.js)",
      description: "A free, copy-paste UI component library crafted for React and Next.js developers. Features production-ready micro-interactions, accessible primitives, pure Tailwind CSS styles, and fluid Framer Motion animations.",
      tech: "React.js • Next.js • Tailwind CSS • Framer Motion • Radix UI Primitives",
      link: null, // Link removed as requested
      badge: "In Active Development"
    },
    { 
      id: "02",
      name: "UNISYS OBA", 
      category: "Enterprise Academic SaaS",
      description: "A full-scale university management and assessment system engineered for centralized & decentralized universities. Features custom local exam servers, Safe Exam Browser integrations, AI-powered exams, and multi-tenant architecture.",
      tech: "React.js • Django • Safe Exam Browser • GCP • Firebase",
      link: "https://betaobafrontend.unisys.online/",
      badge: "Production SaaS"
    },
    { 
      id: "03",
      name: "TENSILEPRO", 
      category: "AI Project & Enterprise Resource SaaS",
      description: "An AI-driven project management and enterprise operations platform. Features interactive Kanban workflows, automated payroll systems, biometric attendance tracking, and predictive burndown analytics for engineering teams.",
      tech: "React.js • Django • AI Analytics • PostgreSQL • Redux Toolkit",
      link: "https://tensile.pro/",
      badge: "Live Enterprise Platform"
    },
    { 
      id: "04",
      name: "TRACK BEACON", 
      category: "Privacy-First Workforce Telemetry SaaS",
      description: "An ethical enterprise workforce analytics platform built at Tech Reign Era. Measures aggregate team velocity and workload imbalances without intrusive keystroke logging. Features low-CPU native background agents and GDPR compliance.",
      tech: "React.js • Django REST API • Native Telemetry Agent • WebSockets",
      link: "https://beacon.techreignera.in/",
      badge: "Live SaaS"
    },
    { 
      id: "05",
      name: "TAALIF", 
      category: "AI Publishing Ecosystem (Web & App)",
      description: "An AI-powered author and book management platform designed for Web and Mobile. Digitizes the complete end-to-end creative workflow from draft manuscript creation to global multi-tier publishing.",
      tech: "React.js • Django • Flutter (Mobile) • AWS • Firebase",
      link: "https://taalif.cloud/",
      badge: "Live Web & App"
    },
    { 
      id: "06",
      name: "ILC", 
      category: "Interactive E-Learning Platform",
      description: "A multi-level interactive learning environment engineered with a custom graphics-rich UI. Enables students to purchase courses and stream educational materials across diverse categories.",
      tech: "React.js • Django • GCP • PostgreSQL",
      link: "https://interactive.edu.my/",
      badge: "Live Platform"
    },
    { 
      id: "07",
      name: "BAWSALA", 
      category: "KPI & Enterprise Analytics",
      description: "A KPI-based organizational performance and analytics system designed to track core metrics, evaluate business health, and systematically achieve organizational objectives.",
      tech: "React.js • Django REST Framework • Data Visualization",
      link: "https://bawsala.cloud/",
      badge: "Live Analytics SaaS"
    },
    { 
      id: "08",
      name: "CRICZ", 
      category: "Cricket Scoring & Tournament App",
      description: "A high-performance mobile application (similar to CricHeroes) built with Flutter for live real-time ball-by-ball cricket scoring, player profiles, and tournament management.",
      tech: "Flutter • Django API • Real-Time Database • Firebase",
      link: null, // Button removed as requested
      badge: "Mobile App"
    }
  ];

  return (
    <section id="projects" className="py-28 md:py-36 px-6 md:px-12 bg-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-gray-300 pb-8 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Selected Works</p>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-black">
              Production Systems
            </h2>
          </div>
          <p className="text-sm md:text-base text-gray-600 max-w-md font-normal leading-relaxed">
            Enterprise multi-tenant SaaS platforms, open-source libraries, AI tools, and cross-platform mobile apps.
          </p>
        </div>
        
        {/* Project Items List */}
        <div className="flex flex-col divide-y divide-gray-300">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group py-12 md:py-16 flex flex-col lg:flex-row justify-between lg:items-center gap-8 transition-all duration-500 hover:px-4"
            >
              {/* Left Column: Project Name & Tech */}
              <div className="lg:w-1/2 flex flex-col gap-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-gray-400 font-bold">{project.id}</span>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight text-black group-hover:translate-x-2 transition-transform duration-300">
                    {project.name}
                  </h3>
                </div>
                
                <div className="flex flex-wrap items-center gap-2.5 mt-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {project.category}
                  </span>
                  
                  {/* Status Badge */}
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${
                    project.badge === "In Active Development" 
                      ? "bg-amber-200 text-amber-950 border border-amber-300 font-semibold" 
                      : "bg-black text-white"
                  }`}>
                    {project.badge}
                  </span>
                </div>

                <span className="text-xs md:text-sm font-medium text-black/70 mt-2">
                  {project.tech}
                </span>
              </div>

              {/* Right Column: In-Depth Description & Link Button */}
              <div className="lg:w-1/2 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed max-w-md">
                  {project.description}
                </p>

                {/* Only renders button if a live link is provided */}
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-black rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-black group-hover:bg-black group-hover:text-white transition-colors duration-300 whitespace-nowrap self-start md:self-auto shadow-sm hover:shadow"
                  >
                    <span>View Live</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;