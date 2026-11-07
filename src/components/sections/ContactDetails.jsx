import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { ArrowUpRight, SocialIcon } from '@/components/ui/Icon';
import { CONTACTS, SOCIALS } from '@/data/content';
import { cn } from '@/utils/cn';

const row = 'flex flex-wrap gap-x-4 gap-y-2 border-b border-line py-6';
const label = 'basis-full pt-2 text-small text-text-subtle sm:basis-[calc(33.333%-0.6875rem)]';
const value = 'min-w-0 flex-1 text-detail';
const underlined =
  'text-text underline decoration-line-strong underline-offset-[6px] transition-colors duration-250 ease-out-expo hover:text-primary-ink ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

export default function ContactDetails() {
  return (
    <Section aria-labelledby="contacts-info-title" className="2xl:pt-24">
      <div className="flex flex-wrap gap-x-4 gap-y-6">
        <p className="eyebrow-col flex self-start lg:pt-6">
          <Eyebrow>Details</Eyebrow>
        </p>
        <div className="min-w-0 flex-1">
          <h2 id="contacts-info-title" className="sr-only">
            Contact information
          </h2>
          <address className="not-italic">
            <dl className="border-t border-line">
              <Reveal className={row}>
                <dt className={label}>Workshop address</dt>
                <dd className={cn(value, 'flex flex-col items-start gap-2')}>
                  {CONTACTS.address}
                  <a
                    href={CONTACTS.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(underlined, 'inline-flex min-h-10 items-center gap-2 text-small uppercase tracking-[0.04em]')}
                  >
                    Get directions
                    <ArrowUpRight />
                  </a>
                </dd>
              </Reveal>
              <Reveal delay={60} className={row}>
                <dt className={label}>Phone</dt>
                <dd className={value}>
                  <a href={'tel:' + CONTACTS.phoneRaw} className={underlined}>
                    {CONTACTS.phone}
                  </a>
                </dd>
              </Reveal>
              <Reveal delay={120} className={row}>
                <dt className={label}>E-mail</dt>
                <dd className={value}>
                  <a href={'mailto:' + CONTACTS.email} className={underlined}>
                    {CONTACTS.email}
                  </a>
                </dd>
              </Reveal>
              <Reveal delay={180} className={row}>
                <dt className={label}>Messengers</dt>
                <dd className={cn(value, 'flex flex-wrap gap-2')}>
                  {SOCIALS.map((s) => (
                    <Button key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" variant="outline-dark">
                      <SocialIcon name={s.icon} />
                      {s.label}
                    </Button>
                  ))}
                </dd>
              </Reveal>
            </dl>
          </address>
        </div>
      </div>
    </Section>
  );
}
