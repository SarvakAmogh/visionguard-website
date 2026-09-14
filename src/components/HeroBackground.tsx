'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

/**
 * HeroBackground - Abstract digital/perception visual
 * Creates a sophisticated, understated composition suggesting
 * browser perception and privacy through subtle geometric abstraction
 */
export const HeroBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionPreference = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionPreference);
    return () => mediaQuery.removeEventListener('change', handleMotionPreference);
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep background with subtle grain */}
      <div className="absolute inset-0 bg-brand-near-black" />

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Abstract perception visualization */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="heroGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#1A3C6E"
              stopOpacity="0.08"
            />
            <stop
              offset="100%"
              stopColor="#1A3C6E"
              stopOpacity="0.02"
            />
          </linearGradient>

          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background gradient wash */}
        <rect width="1200" height="800" fill="url(#heroGradient)" />

        {/* Central abstracted frame - suggesting browser viewport */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Main viewport frame (subtle) */}
          <rect
            x="200"
            y="150"
            width="800"
            height="500"
            fill="none"
            stroke="#1A3C6E"
            strokeWidth="1"
            opacity="0.15"
            rx="2"
          />

          {/* Inner perception lines - abstract layers suggesting information flow */}
          <line
            x1="250"
            y1="200"
            x2="950"
            y2="200"
            stroke="#1A3C6E"
            strokeWidth="0.5"
            opacity="0.12"
          />
          <line
            x1="250"
            y1="300"
            x2="950"
            y2="300"
            stroke="#1A3C6E"
            strokeWidth="0.5"
            opacity="0.1"
          />
          <line
            x1="250"
            y1="400"
            x2="950"
            y2="400"
            stroke="#1A3C6E"
            strokeWidth="0.5"
            opacity="0.08"
          />
          <line
            x1="250"
            y1="500"
            x2="950"
            y2="500"
            stroke="#1A3C6E"
            strokeWidth="0.5"
            opacity="0.06"
          />

          {/* Left-side perception accent - suggesting privacy/data control */}
          <circle
            cx="220"
            cy="300"
            r="35"
            fill="none"
            stroke="#1A3C6E"
            strokeWidth="1"
            opacity="0.2"
            filter="url(#heroGlow)"
          />
          <circle
            cx="220"
            cy="300"
            r="20"
            fill="none"
            stroke="#1A3C6E"
            strokeWidth="0.5"
            opacity="0.15"
          />

          {/* Right-side accent - suggesting control/action */}
          <circle
            cx="980"
            cy="350"
            r="40"
            fill="none"
            stroke="#1A3C6E"
            strokeWidth="1"
            opacity="0.15"
          />
          <circle
            cx="980"
            cy="350"
            r="25"
            fill="none"
            stroke="#1A3C6E"
            strokeWidth="0.5"
            opacity="0.1"
          />

          {/* Central accent elements */}
          <motion.circle
            cx="600"
            cy="220"
            r="8"
            fill="none"
            stroke="#1A3C6E"
            strokeWidth="1"
            opacity="0.25"
            animate={
              !isReducedMotion
                ? { opacity: [0.15, 0.35, 0.15] }
                : { opacity: 0.25 }
            }
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.circle
            cx="600"
            cy="470"
            r="6"
            fill="none"
            stroke="#1A3C6E"
            strokeWidth="0.5"
            opacity="0.15"
            animate={
              !isReducedMotion
                ? { opacity: [0.1, 0.25, 0.1] }
                : { opacity: 0.15 }
            }
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          />

          {/* Subtle connecting elements */}
          <polyline
            points="300,250 400,280 500,260 600,290 700,265 800,295"
            fill="none"
            stroke="#1A3C6E"
            strokeWidth="0.5"
            opacity="0.08"
          />
        </motion.g>
      </svg>

      {/* Subtle parallax overlay for depth - responds to mouse if no reduced-motion */}
      {!isReducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at center, rgba(26, 60, 110, 0.04) 0%, transparent 70%)',
          }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        />
      )}
    </div>
  );
};
