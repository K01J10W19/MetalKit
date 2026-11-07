import { memo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SkipLink from '@/components/layout/SkipLink';
import AnimatedOutlet from '@/components/layout/AnimatedOutlet';

/*
 * Persistent shell. Layout itself does NOT subscribe to location —
 * only <AnimatedOutlet> (and Navbar, for its menu) do — so the memoized
 * Footer never re-renders because of a route change.
 */
const StableNavbar = memo(Navbar);
const StableFooter = memo(Footer);

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SkipLink />
      <StableNavbar />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <AnimatedOutlet />
      </main>
      <StableFooter />
    </div>
  );
}
