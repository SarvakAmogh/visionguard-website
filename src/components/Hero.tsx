'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroCTA } from './HeroCTA';
import { ScrollIndicator } from './ScrollIndicator';
import { FadeInUp } from './FadeInUp';

/**
 * Hero - Premium cinematic homepage hero section
 * Occupies 100vh with dramatic typography, abstract visualization,
 * and refined micro-interactions
 */
export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-brand-near-black">
      {/* Background with abstract perception visualization */}
      <HeroBackground />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-gutter">
        {/* Main content container */}
        <div className="flex flex-col items-center justify-center gap-12 w-full max-w-4xl">
          {/* Headline */}
          <FadeInUp delay={0}>
            <motion.h1
              className="text-display-xl md:text-display-xl lg:text-display-xl text-center leading-tight"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              THE WEB,
              <br />
              ON YOUR TERMS.
            </motion.h1>
          </FadeInUp>

          {/* Supporting text */}
          <FadeInUp delay={0.2}>
            <motion.p
              className="text-body-lg md:text-body-lg text-center text-text-secondary max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              VisionGuard gives browser agents the ability to see, understand, and act — while keeping sensitive information on your device.
            </motion.p>
          </FadeInUp>

          {/* CTA Buttons */}
          <FadeInUp delay={0.4}>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center w-full"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <HeroCTA
                href="/#explore"
                label="EXPLORE VISIONGUARD"
                variant="primary"
              />
              <HeroCTA
                href="/how-it-works"
                label="HOW IT WORKS"
                variant="secondary"
              />
            </motion.div>
          </FadeInUp>
        </div>

        {/* Scroll indicator at bottom */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
};
