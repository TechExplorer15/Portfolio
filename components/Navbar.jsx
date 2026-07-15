'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Magnetic from '@/components/ui/Magnetic';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const menuVariants = {
    closed: { x: '100%', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    open: { x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-surface/90 backdrop-blur-xl py-4 border-b border-border shadow-sm' : 'bg-transparent py-8 mt-[2px]'
        }`}
      >
        <div className="container-main flex items-center justify-between">
          <a href="#" className="font-sans font-bold text-2xl tracking-tighter z-50 relative text-foreground">
            TW<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <Magnetic>
                    <a
                      href={link.href}
                      className="text-foreground hover:text-accent transition-colors text-sm font-semibold relative group py-2 block px-2"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="bg-foreground text-bg px-6 py-2.5 rounded-full font-sans font-semibold text-sm hover:bg-accent transition-all duration-300"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl flex flex-col justify-center px-10 md:hidden"
          >
            <ul className="flex flex-col gap-8">
              {links.map((link) => (
                <motion.li key={link.name} variants={linkVariants}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-display font-bold text-foreground"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={linkVariants} className="mt-8">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-accent text-white px-8 py-4 rounded-btn font-medium text-lg inline-block text-center w-full"
                >
                  Let's Talk
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
