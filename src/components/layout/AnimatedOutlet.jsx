import { useEffect, useRef, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

/*
 * Route transitions without an animation library. A new page waits while the
 * current one plays `page-out`; on animationend they swap and the new one plays
 * `fade-up`. Same-page navigations (hash links) swap immediately. The first page
 * load isn't animated, so the hero paints straight away (LCP).
 */
export default function AnimatedOutlet() {
  const location = useLocation();
  const outlet = useOutlet();
  const [view, setView] = useState({ location, outlet, animate: false });
  const [leaving, setLeaving] = useState(false);
  const shownPath = useRef(location.pathname);

  if (location !== view.location) {
    if (location.pathname === view.location.pathname) {
      setView({ location, outlet, animate: view.animate });
      if (leaving) setLeaving(false);
    } else if (!leaving) {
      setLeaving(true);
    }
  }

  const onAnimationEnd = (e) => {
    if (e.target !== e.currentTarget || !leaving) return;
    window.scrollTo(0, 0);
    setView({ location, outlet, animate: true });
    setLeaving(false);
    document.getElementById('main')?.focus({ preventScroll: true });
  };

  // Bring the #hash target into view once its page is on screen; a repeat click on
  // the current page without a hash goes back to the top
  useEffect(() => {
    const { pathname, hash, key } = view.location;
    const samePage = shownPath.current === pathname;
    shownPath.current = pathname;
    const behavior = window.matchMedia(REDUCED_MOTION).matches ? 'auto' : 'smooth';

    if (!hash) {
      if (samePage && key !== 'default') window.scrollTo({ top: 0, behavior });
      return undefined;
    }
    let timer;
    const seek = (tries) => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) target.scrollIntoView({ behavior, block: 'start' });
      else if (tries < 40) timer = setTimeout(() => seek(tries + 1), 50); // lazy page still loading
    };
    // Let a freshly swapped page settle into its entrance before scrolling
    timer = setTimeout(() => seek(0), samePage || behavior === 'auto' ? 0 : 400);
    return () => clearTimeout(timer);
  }, [view.location]);

  return (
    <div
      key={view.location.pathname}
      onAnimationEnd={onAnimationEnd}
      className={leaving ? 'animate-page-out' : view.animate ? 'animate-fade-up' : undefined}
    >
      {view.outlet}
    </div>
  );
}
