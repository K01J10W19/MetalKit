import Image from '@/components/ui/Image';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { AUDIENCE } from '@/data/content';

export default function Audience() {
  return (
    <Section aria-labelledby="audience-title">
      <SectionHeader id="audience-title" eyebrow="Who it’s for" title="Who our metal structures are for" titleClassName="max-w-[20ch]">
        <p className="max-w-[34ch] text-statement uppercase">
          We build <span className="text-accent-ink">carports, staircases, gazebos and hangars</span> for private and commercial
          clients
        </p>
      </SectionHeader>

      <div className="offset-col mt-10 grid gap-x-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {AUDIENCE.map((a, i) =>
          a.kind === 'image' ? (
            <Reveal key={a.src} delay={(i % 3) * 80}>
              <Image src={a.src} alt={a.alt} width={a.width} height={a.height} tone="light" />
            </Reveal>
          ) : (
            <Reveal key={a.n} delay={(i % 3) * 80} className="flex flex-col gap-6 border-t border-line pb-10 pr-4 pt-6">
              <h3 className="flex gap-2 text-h4 font-normal uppercase">
                <span aria-hidden="true" className="flex-none pt-0.5 text-caption text-accent-ink">
                  {a.n}
                </span>
                {a.title}
              </h3>
              <p className="pl-6 text-body leading-[1.5] text-text-muted">{a.text}</p>
            </Reveal>
          ),
        )}
      </div>

      <Reveal as="p" className="offset-col mt-16 max-w-[36ch] text-statement uppercase lg:mt-30">
        We take on orders of any complexity: from{' '}
        <span className="text-accent-ink">small canopies to full-scale metal structures</span> for utility and commercial use
      </Reveal>
    </Section>
  );
}
