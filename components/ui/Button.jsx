'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium Button with magnetic hover effect and text marquee.
 */
export default function Button({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary', // 'primary' or 'outline'
  icon = null,
  download = false,
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative overflow-hidden rounded-btn font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 px-8 py-4 group';
  
  const variantStyles = {
    primary: 'bg-accent text-white hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]',
    outline: 'border border-border text-foreground hover:border-accent',
  };

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href, download } : { onClick };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isTouch && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, mass: 0.5 }}
      className="inline-block"
    >
      <Tag
        {...tagProps}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {/* Hover Fill Effect for Outline Button */}
        {variant === 'outline' && (
          <span className="absolute inset-0 bg-accent translate-y-[100%] rounded-full group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-out z-0" />
        )}

        <div className="relative z-10 flex items-center gap-2 overflow-hidden h-5">
          {/* Main Text & Icon */}
          <div className="flex items-center gap-2 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-8">
            {icon && <span className="w-4 h-4">{icon}</span>}
            <span>{children}</span>
          </div>
          
          {/* Duplicate Text & Icon (Slides in from bottom) */}
          <div className="absolute top-8 left-0 flex items-center gap-2 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-8 text-white">
            {icon && <span className="w-4 h-4">{icon}</span>}
            <span>{children}</span>
          </div>
        </div>
      </Tag>
    </motion.div>
  );
}
