'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const matchMedia = window.matchMedia('(pointer: coarse)');
      setIsTouch(matchMedia.matches);
      if (matchMedia.matches) return;

      const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      };

      const handleMouseOver = (e) => {
        const target = e.target;
        if (
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') ||
          target.closest('button') ||
          target.dataset.cursor === 'pointer'
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mouseover', handleMouseOver);
      window.addEventListener('mouseout', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('mouseover', handleMouseOver);
        window.removeEventListener('mouseout', handleMouseLeave);
      };
    }
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          mass: 0.2,
        }}
      />
      {/* Outer glow */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'linear',
        }}
      />
    </>
  );
}
