'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import personal from '@/data/personal';
import TextReveal from '@/components/ui/TextReveal';
import Button from '@/components/ui/Button';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax effects
  const yBg1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={containerRef} className="min-h-[100svh] flex items-center justify-center relative overflow-hidden bg-bg">
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Removed messy gradient blobs in favor of pure stark drafting table look */}
      </div>

      <motion.div 
        style={{ opacity: opacityText, scale: scaleText }}
        className="container-main text-center relative z-10 w-full flex flex-col items-center pt-24"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-badge border border-border bg-surface/50 backdrop-blur-md text-sm font-mono text-muted mb-8 md:mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          Available for Opportunities
        </motion.div>

        {/* Headline with TextReveal */}
        <div className="flex flex-col items-center leading-[1.05] tracking-tighter text-[clamp(2rem,5.5vw,6rem)] font-display font-extrabold uppercase text-foreground z-10 w-full max-w-full">
          <TextReveal text="Engineering" delay={0.1} />
          <TextReveal text="The" delay={0.2} />
          <div className="flex items-end whitespace-nowrap max-w-full">
            <TextReveal text="Future" delay={0.3} />
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 10 }}
              className="text-accent text-[clamp(2rem,5.5vw,6rem)] leading-[0.8]"
            >
              .
            </motion.span>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-mono text-muted text-sm md:text-base tracking-wide mt-8 max-w-lg mx-auto"
        >
          Computer Engineering Student · {personal.location}
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <Button href="#work" variant="primary">
            View My Work
          </Button>
          <Button href="#contact" variant="outline">
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
      >
        <div
          className="w-px h-12 bg-muted/30 overflow-hidden relative"
        >
          <div 
            className="w-full h-1/3 bg-accent absolute top-0" 
            style={{ animation: 'scroll-indicator 2s ease-in-out infinite' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

