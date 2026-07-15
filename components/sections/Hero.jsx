'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import personal from '@/data/personal';

export default function Hero() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="min-h-[100svh] relative overflow-hidden bg-bg flex flex-col md:flex-row pt-24 md:pt-0">
      {/* Left Content Half */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-16 lg:p-24 relative z-10 h-[80svh] md:h-[100svh]">
        
        {/* Top Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-12 mt-8 md:mt-24"
        >
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-sans font-light text-foreground">+5</span>
            <span className="text-xs font-mono text-muted mt-2">Projects completed</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-sans font-light text-foreground">+10</span>
            <span className="text-xs font-mono text-muted mt-2">Technologies mastered</span>
          </div>
        </motion.div>

        {/* Middle Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="my-auto"
        >
          <h1 className="text-[clamp(6rem,16vw,14rem)] leading-[0.8] tracking-tighter font-sans font-light text-foreground -ml-2 mb-6">
            Hello
          </h1>
          <div className="flex items-center gap-3 text-muted">
            <div className="w-8 h-[2px] bg-foreground"></div>
            <p className="text-base md:text-lg text-foreground font-medium">
              It's {personal.name} a Computer Engineering student
            </p>
          </div>
        </motion.div>

        {/* Bottom Scroll Indication */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pb-4 md:pb-12"
        >
          <a href="#about" className="text-sm text-foreground flex items-center gap-2 group hover:text-accent transition-colors font-medium">
            Scroll down 
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>

      </div>

      {/* Right Image Half */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-[90%] md:w-1/2 h-[50vh] md:h-[90vh] flex items-end justify-end pointer-events-none z-0"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/profile.png"
            alt={personal.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom grayscale mix-blend-multiply filter contrast-125 md:object-right-bottom"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}

