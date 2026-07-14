'use client';

import { motion } from 'framer-motion';
import education from '@/data/education';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';

export default function Education() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="education" className="py-[clamp(80px,12vw,160px)] relative">
      <div className="container-main">
        <SectionHeading label="// EDUCATION" title="Academic Background" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {education.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <GlowCard className="p-6 md:p-8 h-full flex flex-col">
                <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                  {item.period}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                  {item.degree}
                </h3>
                <p className="font-mono text-sm text-muted mt-2">
                  {item.institution}
                </p>
                <div className="mt-auto pt-6">
                  <div className="border-t border-border pt-4">
                    <span className="inline-flex items-center gap-2 font-mono text-sm text-foreground">
                      <span className="w-2 h-2 rounded-full bg-success"></span>
                      {item.score}
                    </span>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
