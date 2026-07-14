'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Awwwards-style text reveal component.
 * Splits text into characters or words and staggers their animation on scroll.
 */
export default function TextReveal({ 
  text, 
  className = '', 
  delay = 0, 
  type = 'char', // 'char' or 'word'
  staggerAmount = 0.03
}) {
  const ref = useRef(null);
  
  // Split the text based on the type
  const elements = type === 'char' ? text.split('') : text.split(' ');

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerAmount,
        delayChildren: delay,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: '120%', 
      opacity: 0,
      rotateZ: 5
    },
    show: { 
      y: '0%', 
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom premium ease (similar to Expo.easeOut)
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-wrap text-reveal-mask ${className}`}
    >
      {elements.map((el, i) => (
        <div key={i} className="overflow-hidden">
          <motion.span
            variants={itemVariants}
            className="inline-block origin-bottom-left"
            style={{ 
              // Preserve spaces if splitting by words, or handle space characters if splitting by chars
              marginRight: type === 'word' ? '0.25em' : (el === ' ' ? '0.25em' : '0')
            }}
          >
            {el === ' ' ? '\u00A0' : el}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}
