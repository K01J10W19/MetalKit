import { cn } from '@/utils/cn';

/* Shimmer placeholder; tone="dark" for use on dark bands */
export default function Skeleton({ className, tone = 'light' }) {
  return (
    <div
      aria-hidden="true"
      className={cn('relative overflow-hidden', tone === 'dark' ? 'bg-surface-image' : 'bg-surface-skeleton', className)}
    >
      <div
        className={cn(
          'absolute inset-0 animate-shimmer bg-linear-to-r from-transparent to-transparent',
          tone === 'dark' ? 'via-white/5' : 'via-background-soft/70',
        )}
      />
    </div>
  );
}
