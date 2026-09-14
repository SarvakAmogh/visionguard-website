'use client';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { FadeInUp } from '@/components/FadeInUp';

export default function HowItWorks() {
  return (
    <div className="w-full">
      <Section id="how-it-works" fullHeight variant="full" className="flex items-center justify-center pt-24">
        <Container size="lg">
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-display-lg mb-6">How It Works</h1>
              <p className="text-body-lg text-text-secondary">PERCEIVE → REDACT → REASON → ACT</p>
            </div>
          </FadeInUp>
        </Container>
      </Section>
    </div>
  );
}