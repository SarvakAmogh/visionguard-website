'use client';

import Link from 'next/link';
import React from 'react';

interface HeroCTAProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

/**
 * HeroCTA - Editorial-style call-to-action button
 * Restrained, premium aesthetic with subtle hover effects
 */
export const HeroCTA: React.FC<HeroCTAProps> = ({
  href,
  label,
  variant = 'primary',
  className = '',
}) => {
  const baseStyles =
    'text-micro font-normal tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue px-6 py-3 inline-block';

  const variants = {
    primary:
      'border border-brand-warm-white text-brand-warm-white hover:bg-brand-warm-white hover:text-brand-near-black',
    secondary:
      'border border-text-secondary text-text-secondary hover:border-brand-warm-white hover:text-brand-warm-white',
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={label}
    >
      {label}
    </Link>
  );
};
