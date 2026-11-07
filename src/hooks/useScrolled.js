import { useSyncExternalStore } from 'react';

const subscribe = (onChange) => {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
};

/* True once the page is scrolled past `threshold` px; re-renders only when that flips */
export function useScrolled(threshold = 0) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );
}
