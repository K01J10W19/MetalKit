import { cn } from '@/utils/cn';

/* Vertical rhythm: 64px → 96px (lg) → 128px (2xl) */
const PAD = {
  both: 'py-16 lg:py-24 2xl:py-32',
  bottom: 'pb-16 lg:pb-24 2xl:pb-32',
};

export default function Section({ pad = 'both', className, children, ...rest }) {
  return (
    <section className={cn(PAD[pad], className)} {...rest}>
      <div className="shell">{children}</div>
    </section>
  );
}
