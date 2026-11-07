import { cn } from '@/utils/cn';

const sizes = { sm: 'size-4 border-2', md: 'size-8 border-2', lg: 'size-12 border-3' };

/* Pass `label` when the spinner is the only loading cue; inside a labelled button omit it */
export default function Spinner({ size = 'md', className, label }) {
  const ring = (
    <span
      aria-hidden="true"
      className={cn('inline-block flex-none animate-spinner rounded-full border-current border-r-transparent', sizes[size], className)}
    />
  );
  if (!label) return ring;
  return (
    <span role="status" className="inline-flex">
      {ring}
      <span className="sr-only">{label}</span>
    </span>
  );
}
