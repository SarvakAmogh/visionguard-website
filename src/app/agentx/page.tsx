'use client';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { FadeInUp } from '@/components/FadeInUp';

export default function AgentX() {
  return (
    <div className="w-full">
      <Section id="agentx" fullHeight variant="full" className="flex items-center justify-center pt-24">
        <Container size="lg">
          <FadeInUp>
            <div className="text-center">
              <h1 className="text-display-lg mb-6">AgentX</h1>
              <p className="text-body-lg text-text-secondary">Team & Contact</p>
            </div>
          </FadeInUp>
        </Container>
      </Section>
    </div>
  );
}