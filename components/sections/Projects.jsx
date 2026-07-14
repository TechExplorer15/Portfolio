'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import projects from '@/data/projects';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// A specialized 3D tilt container for the project images
function ProjectImage3D({ src, alt }) {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] rounded-none border border-border overflow-hidden group shadow-[8px_8px_0px_rgba(0,0,0,0.15)] bg-surface flex items-center justify-center p-4">
      {/* Grid background for the image container */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-0"></div>
      
      <div className="relative w-full h-full rounded-sm overflow-hidden border border-border/50 z-10 transform transition-transform duration-700 ease-out group-hover:scale-[1.02]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top filter contrast-[1.05] brightness-95"
        />
        <div className="absolute inset-0 bg-accent/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Technical framing lines */}
      <div className="absolute top-0 left-4 w-px h-2 bg-accent z-20"></div>
      <div className="absolute top-4 left-0 w-2 h-px bg-accent z-20"></div>
      <div className="absolute bottom-0 right-4 w-px h-2 bg-accent z-20"></div>
      <div className="absolute bottom-4 right-0 w-2 h-px bg-accent z-20"></div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-section-spacing relative bg-surface-light border-y border-border">
      <div className="container-main">
        <SectionHeading label="// WORK" title="Engineered Solutions" />

        <div className="mt-24 flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <div key={project.id} className="relative flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
              
              {/* Left Side: Sticky Technical Readout */}
              <div className="w-full lg:w-5/12 lg:sticky lg:top-32 z-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="font-mono text-accent text-sm mb-6 flex items-center gap-4">
                    <span className="w-8 h-px bg-accent inline-block" />
                    SYS_FILE: 0{index + 1}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-foreground leading-tight tracking-tight uppercase">
                    {project.title}
                  </h3>
                  
                  <div className="bg-surface border border-border p-6 mb-8 shadow-[4px_4px_0px_rgba(0,0,0,0.03)]">
                    <p className="font-mono text-xs text-dim mb-3 uppercase tracking-wider">Project Scope</p>
                    <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <p className="font-mono text-xs text-dim mb-3 uppercase tracking-wider mt-6 pt-6 border-t border-border">Architecture</p>
                    <p className="text-muted text-sm md:text-base leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="bg-bg border border-border px-3 py-1.5 text-xs font-mono text-foreground uppercase tracking-widest"
                      >
                        {t}
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
                </motion.div>
              </div>

              {/* Right Side: Visual Data (Scrolling) */}
              <div className="w-full lg:w-7/12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  <ProjectImage3D src={project.image} alt={project.title} />
                </motion.div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

