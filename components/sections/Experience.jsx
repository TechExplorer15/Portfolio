'use client';

import { motion } from 'framer-motion';
import experience from '@/data/experience';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';

export default function Experience() {
  return (
    <section id="experience" className="py-[clamp(80px,12vw,160px)] relative">
      <div className="container-main">
        <SectionHeading label="// EXPERIENCE" title="Where I've Worked" />

        <div className="mt-16 max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-[7px] top-0 bottom-0 w-px bg-border-hover origin-top"
          />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-[15px] h-[15px] rounded-full border-2 border-accent bg-bg group-hover:bg-accent transition-colors z-10" />

                {/* Content Card */}
                <div className="ml-10">
                  <GlowCard className="p-6 md:p-8">
                    <div className="font-mono text-xs text-accent tracking-widest uppercase">
                      {exp.period}
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mt-2">
                      {exp.title}
                    </h3>
                    <div className="font-mono text-sm text-muted mt-1">
                      @ {exp.company}
                    </div>
                    <p className="text-muted text-sm leading-relaxed mt-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-badge bg-accent-muted text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
