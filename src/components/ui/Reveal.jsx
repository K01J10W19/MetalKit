import { useLayoutEffect, useRef } from 'react';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

/*
 * Scroll-triggered entrance, as in the design: anything already on screen at mount
 * is left alone (no flash); the rest is hidden, then rises 32px into place when it
 * scrolls into view. delay in ms for staggering siblings.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, children, ...rest }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window) || window.matchMedia(REDUCED_MOTION).matches) return undefined;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return undefined;

    el.style.opacity = '0';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        el.style.opacity = '';
        el.animate(
          [
            { opacity: 0, transform: 'translateY(32px)' },
            { opacity: 1, transform: 'none' },
          ],
          { duration: 800, delay, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' },
        );
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      el.style.opacity = '';
    };
  }, [delay]);

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
