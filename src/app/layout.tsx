import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'VisionGuard | Privacy-First Perception Layer for Browser AI',
  description: 'Smart India Hackathon 2026 - AgentX VisionGuard: A privacy-first perception layer for browser AI agents. PERCEIVE → REDACT → REASON → ACT',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#08090B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#08090B" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%231A3C6E'>V</text></svg>" />
      </head>
      <body className="bg-brand-near-black text-brand-warm-white">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}