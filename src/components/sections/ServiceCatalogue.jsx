import Button from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { ArrowRight } from '@/components/ui/Icon';
import { SERVICES } from '@/data/content';
import { cn } from '@/utils/cn';

/* Services page: one article per product, anchored by slug (home cards and footer link here) */
export default function ServiceCatalogue() {
  return (
    <Section aria-label="Product catalogue">
      {SERVICES.map((s, i) => (
        <article
          key={s.slug}
          id={s.slug}
          aria-labelledby={s.slug + '-title'}
          className={cn(
            'flex scroll-mt-24 flex-wrap gap-x-4 gap-y-6 border-t border-line py-12',
            i === SERVICES.length - 1 && 'border-b',
          )}
        >
          <div className="eyebrow-col">
            <span aria-hidden="true" className="hollow block font-display text-numeral-lg font-medium">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <Reveal as="h2" id={s.slug + '-title'} className="text-h3 font-normal uppercase">
              {s.title}
            </Reveal>
            <p className="max-w-[56ch] text-lead text-text-muted">{s.description}</p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.gallery.map((g, j) => (
                <Reveal as="li" key={g.src} delay={j * 80}>
                  <Image src={g.src} alt={g.alt} width={g.width} height={g.height} ratio="aspect-4/3" tone="light" />
                </Reveal>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button to="/contacts#lead" variant="dark">
                Get a price
              </Button>
              {s.hasProjects && (
                <Button to="/projects" variant="link">
                  View projects
                  <ArrowRight />
                </Button>
              )}
            </div>
          </div>
        </article>
      ))}
    </Section>
  );
}
