'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'EXPERIENCE', href: '/' },
  { label: 'HOW IT WORKS', href: '/how-it-works' },
  { label: 'AGENTX', href: '/agentx' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-near-black/80 backdrop-blur-xs border-b border-text-muted/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="px-gutter py-5 flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Left: AGENTX Logo */}
        <Link
          href="/"
          className="text-micro font-bold tracking-widest text-brand-warm-white hover:text-brand-blue transition-colors"
        >
          AGENTX
        </Link>

        {/* Center/Right: Navigation Links */}
        <div className="flex items-center gap-8 md:gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-micro font-normal tracking-widest text-text-secondary hover:text-brand-blue transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Indicator */}
          <div className="text-micro font-normal tracking-widest text-text-muted border-l border-text-muted/20 pl-8 ml-4">
            EN
          </div>
        </div>
      </div>
    </nav>
  );
};