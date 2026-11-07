import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { cn } from '@/utils/cn';

/*
 * Signature header from the design: eyebrow pill pinned in the ¼ column (lg+),
 * uppercase title across the rest. Accent words are passed inside `title`
 * as <span className="text-accent-ink">…</span>; children sit under the title.
 */
export default function SectionHeader({ id, eyebrow, title, titleClassName, eyebrowClassName, children }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-6">
      <p className={cn('eyebrow-col flex self-start lg:pt-4', eyebrowClassName)}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </p>
      <Reveal className="flex min-w-0 flex-1 flex-col gap-10 lg:gap-16">
        <h2 id={id} className={cn('text-h2 font-normal uppercase', titleClassName)}>
          {title}
        </h2>
        {children}
      </Reveal>
    </div>
  );
}
