import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import { cn } from '@/utils/cn';

const base =
  'inline-flex cursor-pointer select-none items-center justify-center gap-2 uppercase tracking-[0.04em] ' +
  'transition-[background-color,color,border-color,box-shadow,transform] duration-250 ease-out-expo ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ' +
  'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60';

const sizes = {
  sm: 'min-h-10 px-6 text-small',
  md: 'min-h-12 px-6 text-small',
  lg: 'min-h-12 px-8 text-body',
  xl: 'min-h-16 px-6 py-4 text-center text-lead', // full-width hero bar
};

const variants = {
  primary: 'bg-primary font-medium text-secondary-950 hover:bg-primary-300 hover:shadow-glow',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-secondary-950',
  dark: 'bg-secondary-950 font-medium text-text-inverse hover:bg-surface-image hover:text-primary',
  'outline-dark': 'border border-secondary-950 text-secondary-950 hover:bg-secondary-950 hover:text-text-inverse',
  link: 'px-2 text-secondary-950 hover:text-primary-ink',
};

/* Renders a router <Link> (to), an <a> (href) or a <button> */
export default function Button({ to, href, variant = 'primary', size = 'md', loading = false, className, children, ...rest }) {
  const cls = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      {loading && <Spinner size="sm" />}
      {children}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest} disabled={loading || rest.disabled} aria-busy={loading || undefined}>
      {content}
    </button>
  );
}
