'use client';

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
  variant?: 'full' | 'editorial' | 'narrow' | 'wide';
}

const variantStyles = {
  full: 'w-full min-h-screen',
  editorial: 'w-full py-section',
  narrow: 'w-full py-section max-w-2xl mx-auto px-gutter',
  wide: 'w-full py-section max-w-6xl mx-auto px-gutter',
};

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  fullHeight = false,
  variant = 'editorial',
}) => {
  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${fullHeight ? 'flex items-center justify-center' : ''} ${className}`}
    >
      {children}
    </section>
  );
};