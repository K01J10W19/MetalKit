import Accordion from '@/components/ui/Accordion';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { FAQ } from '@/data/content';

export default function Faq() {
  return (
    <Section aria-labelledby="faq-title">
      <SectionHeader id="faq-title" eyebrow="FAQ" title="Frequently asked questions" titleClassName="max-w-[16ch]" />
      <Reveal className="offset-col mt-10 lg:mt-12">
        <Accordion items={FAQ} />
      </Reveal>
    </Section>
  );
}
