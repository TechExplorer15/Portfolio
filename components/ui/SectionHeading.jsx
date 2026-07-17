'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/components/ui/TextReveal';

export default function SectionHeading({ label, title, centered = false }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`section-label inline-block mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
      >
        {label}
      </motion.div>
      <TextReveal 
        text={title} 
        type="word" 
        delay={0.1}
        className={`font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-foreground leading-[1.1] ${centered ? 'justify-center' : ''}`}
      />
    </div>
  );
}
