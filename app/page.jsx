'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import useSmoothScroll from '@/hooks/useSmoothScroll';

import Loader from '@/components/Loader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode='wait'>
        {loading && <Loader key='loader' onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className='relative'>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
