'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

/**
 * ScrollIndicator - Subtle animation showing user can scroll
 * Refined, editorial-style indicator with minimal visual weight
 */
export const ScrollIndicator: React.FC = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionPreference = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionPreference);
    return () => mediaQuery.removeEventListener('change', handleMotionPreference);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {/* Label */}
      <span className="text-micro text-text-muted tracking-widest">SCROLL</span>

      {/* Animated chevron */}
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-text-muted"
        animate={
          !isReducedMotion
            ? { y: [0, 4, 0] }
            : { y: 0 }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <polyline points="6 9 12 15 18 9" />
      </motion.svg>
    </div>
  );
};
