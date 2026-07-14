'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import personal from '@/data/personal';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';

export default function About() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="about" className="py-[clamp(80px,12vw,160px)] relative">
      <div className="container-main">
        <SectionHeading label="// ABOUT" title="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-16">
          {/* Left Col - Technical Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center min-h-[400px] md:min-h-[500px] py-12"
          >
            {/* Outer Technical Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-muted/30 pointer-events-none"
            />
            
            {/* Inner Technical Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-accent/20 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-accent" />
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent" />
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent" />
            </motion.div>

            {/* Crosshairs */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
              <div className="w-full h-px bg-muted/10 absolute" />
              <div className="h-full w-px bg-muted/10 absolute" />
            </div>

            {/* Profile Image Cutout */}
            <div className="relative z-10 w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden p-2 bg-surface shadow-[0_0_40px_rgba(37,99,235,0.1)] border border-border">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-bg">
                <Image
                  src="/images/profile.png"
                  alt={personal.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 filter contrast-125 scale-110 mix-blend-multiply"
                />
              </div>
            </div>

            {/* Technical Badges */}
            <div className="absolute bottom-4 right-4 md:right-8 bg-surface border border-border px-3 py-1 font-mono text-[10px] text-accent z-20">
              SYS.STATUS: ONLINE
            </div>
            <div className="absolute top-4 left-4 md:left-8 bg-surface border border-border px-3 py-1 font-mono text-[10px] text-muted z-20 uppercase">
              COORD: {personal.location}
            </div>
          </motion.div>

          {/* Right Col - Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-8"
          >
            <div className="space-y-6">
              {personal.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className={`${
                    i === 0 
                      ? 'text-foreground text-lg md:text-xl font-medium' 
                      : 'text-muted text-base md:text-lg'
                  } leading-relaxed`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.div variants={itemVariants} className="font-mono text-sm text-dim mt-10 flex items-center gap-2">
              <span className="text-xl">📍</span> {personal.location}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {personal.stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants}>
              <GlowCard className="p-6 md:p-8 flex flex-col items-center justify-center text-center">
                <span className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm font-mono text-muted mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
