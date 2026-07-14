'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const bootLines = [
  "INITIALIZING SYSTEM ARCHITECTURE...",
  "MOUNTING VIRTUAL FILE SYSTEM...",
  "LOADING DEPENDENCIES [OK]",
  "ESTABLISHING SECURE CONNECTION...",
  "FETCHING ENGINEERING PROFILE: TANMAY WAGH",
  "LOADING TECH STACK: REACT, NEXT.JS, TAILWIND, NODE.JS",
  "SYSTEM BOOT SUCCESSFUL. INITIATING UI..."
];

export default function Loader({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        setLines(prev => [...prev, bootLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 800);
        }, 300);
      }
    }, 120); // Fast typing speed

    return () => clearInterval(interval);
  }, [onComplete]);

  const exitVariants = {
    exit: {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.div
      variants={exitVariants}
      initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      animate={isComplete ? 'exit' : ''}
      className="fixed inset-0 z-[999] bg-bg flex flex-col justify-end p-8 md:p-16 pointer-events-none"
    >
      <div className="max-w-4xl w-full mx-auto font-mono text-xs md:text-sm">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`mb-2 ${i === bootLines.length - 1 ? 'text-accent font-bold' : 'text-foreground'}`}
          >
            <span className="text-muted mr-2">{'>'}</span> {line}
          </motion.div>
        ))}
        {!isComplete && (
          <motion.div 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-4 bg-accent mt-2 inline-block"
          />
        )}
      </div>
    </motion.div>
  );
}
