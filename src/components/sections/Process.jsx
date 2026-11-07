import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { STEPS } from '@/data/content';
import { cn } from '@/utils/cn';

function Steps({ className }) {
  return (
    <ol className={cn('grid gap-x-4 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {STEPS.map((s, i) => (
        <Reveal
          as="li"
          key={s.n}
          delay={(i % 3) * 80}
          className="flex flex-col gap-4 border-t border-line pb-8 pl-2 pr-4 pt-6 transition-colors duration-400 ease-out-expo hover:bg-background-soft"
        >
          <span aria-hidden="true" className={cn('font-display text-numeral', s.accent ? 'font-bold text-primary' : 'hollow font-medium')}>
            {s.n}
          </span>
          <h3 className="pt-4 text-h5 font-normal uppercase">
            <span className="sr-only">Step {s.n}. </span>
            {s.title}
          </h3>
          <p className="text-small text-text-muted">{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}

/*
 * Home: steps sit beside the eyebrow (visually hidden heading).
 * Services (`titled`): full section header, steps indented below it.
 */
export default function Process({ titled = false }) {
  if (titled) {
    return (
      <Section pad="bottom" aria-labelledby="process-title">
        <SectionHeader
          id="process-title"
          eyebrow="How we work"
          title={
            <>
              How we <span className="text-accent-ink">work</span>
            </>
          }
        />
        <Steps className="offset-col mt-10 lg:mt-12" />
      </Section>
    );
  }
  return (
    <Section aria-labelledby="process-title">
      <div className="flex flex-wrap gap-x-4 gap-y-6">
        <p className="eyebrow-col flex self-start lg:pt-6">
          <Eyebrow>How we work</Eyebrow>
        </p>
        <div className="min-w-0 flex-1">
          <h2 id="process-title" className="sr-only">
            How we work
          </h2>
          <Steps />
        </div>
      </div>
    </Section>
  );
}
