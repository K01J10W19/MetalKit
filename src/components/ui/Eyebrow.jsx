import { cn } from '@/utils/cn';

/* Section label from the design: dark pill with a glowing amber dot */
export default function Eyebrow({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-primary/50 bg-surface-pill py-2 pl-3 pr-4',
        'text-caption leading-none font-semibold uppercase tracking-[0.12em] text-background',
        className,
      )}
    >
      <span aria-hidden="true" className="size-2 flex-none rounded-full bg-primary shadow-halo" />
      {children}
    </span>
  );
}
