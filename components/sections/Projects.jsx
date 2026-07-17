'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import Image from 'next/image';
import projects from '@/data/projects';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section 
      id="work" 
      className="py-section-spacing relative bg-bg border-y border-border"
    >
      <div className="container-main">
        <SectionHeading label="// WORK" title="Engineered Solutions" />

        <div className="mt-16 md:mt-32 flex flex-col border-t border-border">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.id;
            
            return (
              <div 
                key={project.id} 
                className="border-b border-border group"
              >
                <div 
                  className="py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                  onClick={() => toggleExpand(project.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full pr-8">
                    <span className="font-mono text-xs md:text-sm text-muted hidden md:block">0{index + 1}</span>
                    <div className="flex flex-col">
                      <h3 className="text-3xl md:text-5xl font-sans font-light tracking-tighter uppercase text-foreground group-hover:pl-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                        {project.title}
                      </h3>
                      <p className="text-muted text-sm md:text-base mt-3 max-w-xl line-clamp-2 md:line-clamp-none group-hover:pl-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block font-mono text-sm text-muted uppercase tracking-widest transition-opacity duration-300">
                    {isExpanded ? 'CLOSE' : 'VIEW'}
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 md:pl-20 flex flex-col lg:flex-row gap-12 lg:gap-24">
                        <div className="w-full lg:w-1/2">
                          <p className="font-mono text-xs text-dim mb-3 uppercase tracking-wider">Project Scope</p>
                          <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                            {project.description}
                          </p>
                          <p className="font-mono text-xs text-dim mb-3 uppercase tracking-wider mt-6">Architecture</p>
                          <p className="text-muted text-sm md:text-base leading-relaxed">
                            {project.approach}
                          </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col justify-between">
                          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-10">
                            {project.tech.map((t, i) => (
                              <span 
                                key={i} 
                                className="text-xs font-sans font-semibold text-foreground uppercase tracking-widest flex items-center gap-2"
                              >
                                {t}
                                {i !== project.tech.length - 1 && <span className="w-1 h-1 rounded-full bg-accent inline-block"></span>}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex flex-wrap gap-4">
                            {project.live !== '#' && (
                              <Button href={project.live} variant="primary">
                                Deploy System
                              </Button>
                            )}
                            {project.github !== '#' && (
                              <Button href={project.github} variant="outline">
                                View Source
                              </Button>
                            )}
                          </div>
                          
                          {/* Image Fallback */}
                          <div className="mt-8 relative w-full h-[30vh] md:h-[40vh] rounded-sm overflow-hidden">
                            <Image src={project.image} alt={project.title} fill className="object-cover filter contrast-[1.05]" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
