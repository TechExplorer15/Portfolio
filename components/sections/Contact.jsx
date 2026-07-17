'use client';

import { motion } from 'framer-motion';
import personal from '@/data/personal';
import Magnetic from '@/components/ui/Magnetic';
import { FiMail, FiDownload, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';

export default function Contact() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="contact" className="py-[clamp(80px,12vw,160px)] min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px] pointer-events-none z-0" />

      <div className="container-main relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="section-label mb-6">
            // WHAT'S NEXT?
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-[clamp(2.5rem,6vw,5rem)] font-display font-extrabold leading-[1.1] tracking-tight text-foreground"
          >
            Let's Build Something<br />
            <span className="text-accent">Great</span> Together
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-muted text-base md:text-lg font-sans max-w-xl mx-auto mt-6 leading-relaxed"
          >
            {personal.bio[2]}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full"
          >
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-8 py-4 rounded-btn font-medium text-sm hover:bg-accent-hover transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FiMail className="w-4 h-4" />
              Say Hello
            </a>
            <a 
              href={personal.resume} 
              download
              className="border border-border text-foreground px-8 py-4 rounded-btn font-medium text-sm hover:border-border-hover hover:bg-surface transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-8 mt-16"
          >
            <Magnetic>
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors font-mono text-sm flex items-center gap-2 group"
              >
                <FiLinkedin className="w-4 h-4" />
                LinkedIn
                <FiArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors font-mono text-sm flex items-center gap-2 group"
              >
                <FiGithub className="w-4 h-4" />
                GitHub
                <FiArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
