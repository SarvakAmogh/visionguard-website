'use client';

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const MAX_WIDTHS = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  return (
    <div className={`w-full mx-auto ${MAX_WIDTHS[size]} px-gutter ${className}`}>
      {children}
    </div>
  );
};