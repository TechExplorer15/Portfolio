'use client';

import { motion } from 'framer-motion';
import skills, { allSkills } from '@/data/skills';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';

export default function Skills() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  // Duplicate for seamless marquee
  const marqueeItems = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-[clamp(80px,12vw,160px)] relative overflow-hidden">
      <div className="container-main">
        <SectionHeading label="// SKILLS" title="Technical Arsenal" />

        {/* Categorized Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants}>
              <GlowCard className="p-6 md:p-8 h-full">
                <div className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                  // {category.toUpperCase()}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-mono px-3 py-1.5 rounded-badge bg-surface-light text-muted hover:bg-accent-muted hover:text-accent transition-all duration-300 cursor-default border border-transparent hover:border-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Strip */}
      <div className="mt-24 relative overflow-hidden flex whitespace-nowrap before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-bg before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-bg after:to-transparent">
        <div 
          className="flex gap-8 w-max shrink-0 items-center"
          style={{ animation: 'marquee 25s linear infinite' }}
        >
          {marqueeItems.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="text-lg md:text-2xl font-display font-bold text-foreground/[0.08] uppercase tracking-wider px-4"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
