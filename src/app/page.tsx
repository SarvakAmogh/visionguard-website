'use client';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { FadeInUp } from '@/components/FadeInUp';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Empty template */}
      <Section id="experience" fullHeight variant="full" className="flex items-center justify-center pt-24">
        <Container size="lg">
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-display-lg mb-6">Experience</h1>
              <p className="text-body-lg text-text-secondary">Foundation ready for cinematic content</p>
            </div>
          </FadeInUp>
        </Container>
      </Section>
    </div>
  );
}