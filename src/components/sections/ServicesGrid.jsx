import { Link } from 'react-router-dom';
import Image from '@/components/ui/Image';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowUpRight } from '@/components/ui/Icon';
import { SERVICES } from '@/data/content';

/* Photo card with an outlined number above it and a dark caption panel near the bottom */
function ServiceCard({ service, index }) {
  return (
    <Link
      to={'/services#' + service.slug}
      className="relative block pt-6 text-text-inverse transition-transform duration-400 ease-out-expo hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:-translate-y-0.5"
    >
      <span aria-hidden="true" className="hollow absolute left-2 top-0 z-1 font-display text-numeral-sm font-medium">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="relative">
        <Image src={service.img} alt="" width={273} height={301} />
        <div className="absolute inset-x-0 bottom-[6.5%] flex min-h-[24%] flex-col gap-2 bg-secondary-900 p-4">
          <span className="flex items-start justify-between gap-2">
            <span className="text-base leading-[1.2] uppercase">{service.title}</span>
            <ArrowUpRight className="flex-none" />
          </span>
          <span className="text-caption text-text-inverse-muted">{service.summary}</span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <Section id="services" aria-labelledby="services-title">
      <SectionHeader
        id="services-title"
        eyebrow="Services"
        title={
          <>
            What you can order <span className="block text-accent-ink">metal products</span>
          </>
        }
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal as="li" key={s.slug} delay={i * 80}>
            <ServiceCard service={s} index={i} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
