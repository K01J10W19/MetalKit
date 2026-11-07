import Image from '@/components/ui/Image';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { ABOUT } from '@/data/content';

export default function About() {
  return (
    <Section aria-labelledby="about-title">
      <SectionHeader
        id="about-title"
        eyebrow="About us"
        title={
          <>
            We’ve been in the <span className="block text-accent-ink">metal fabrication</span> business for over 15 years
          </>
        }
      />
      <div className="offset-col mt-10 flex flex-wrap gap-x-12 gap-y-6 lg:mt-12">
        {ABOUT.map((text, i) => (
          <Reveal as="p" key={i} delay={i * 120} className="max-w-[520px] flex-[1_1_320px] text-body text-text-muted">
            {text}
          </Reveal>
        ))}
      </div>
      <Reveal className="offset-col mt-10 lg:mt-12">
        <Image src="/images/about.webp" alt="Arched steel carport in a private courtyard" width={864} height={456} />
      </Reveal>
    </Section>
  );
}
