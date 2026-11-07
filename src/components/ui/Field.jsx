import { useId } from 'react';
import { cn } from '@/utils/cn';

/* Dark-band text input from the design: the label doubles as placeholder and accessible name */
export default function Field({ label, error, className, ref, ...rest }) {
  const errId = useId();
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <input
        ref={ref}
        aria-label={label}
        placeholder={label}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        className={cn(
          'h-12 w-full rounded-none border bg-secondary-950/40 px-4 text-base text-text-inverse placeholder:text-text-placeholder',
          'transition-[border-color,box-shadow,background-color] duration-250 ease-out-expo',
          'hover:bg-secondary-950/70 focus:bg-secondary-950/90 focus:shadow-[0_0_0_1px_var(--color-primary)] focus:outline-none',
          error ? 'border-danger' : 'border-line-field',
        )}
        {...rest}
      />
      {error && (
        <p id={errId} className="text-caption text-danger-text">
          {error}
        </p>
      )}
    </div>
  );
}
