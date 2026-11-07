import { cn } from '@/utils/cn';

export default function Logo({ className, loading }) {
  return (
    <img
      src="/images/logo.webp"
      alt=""
      width="75"
      height="50"
      loading={loading}
      decoding="async"
      className={cn('block h-12 w-[72px] object-contain', className)}
    />
  );
}
