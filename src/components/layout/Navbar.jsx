import { useEffect, useId, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { NAV_LINKS } from '@/data/content';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/utils/cn';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-primary';

export default function Navbar() {
  const scrolled = useScrolled(24);
  const location = useLocation();
  // The menu belongs to the location it was opened on, so any navigation closes it
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === location.key;
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpenOn(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-400 ease-out-expo',
        scrolled || open ? 'bg-secondary-950/94 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="shell">
        <nav aria-label="Main navigation" className="flex h-20 items-center justify-between gap-6 border-b border-text-inverse/20">
          <Link to="/" aria-label="METAL KIT — home" className={cn('-m-2 flex items-center p-2 focus-visible:outline-offset-2', focusRing)}>
            <Logo />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={cn(
                    'relative inline-flex min-h-12 items-center text-body uppercase tracking-[0.02em] text-text-inverse transition-colors duration-250 ease-out-expo hover:text-primary focus-visible:outline-offset-4',
                    focusRing,
                  )}
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-x-0 bottom-2 h-px origin-left bg-primary transition-transform duration-400 ease-out-expo',
                          isActive ? 'scale-x-100' : 'scale-x-0',
                        )}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button to="/contacts#lead" variant="outline" size="sm" className="hidden flex-none whitespace-nowrap sm:inline-flex">
              Get in touch
            </Button>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpenOn(open ? null : location.key)}
              className={cn(
                '-mr-2 flex size-12 cursor-pointer items-center justify-center text-text-inverse transition-colors duration-250 ease-out-expo hover:text-primary focus-visible:-outline-offset-2 lg:hidden',
                focusRing,
              )}
            >
              <span aria-hidden="true" className="relative block h-4 w-6">
                <span className={cn('absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-400 ease-out-expo', open && 'translate-y-[7px] rotate-45')} />
                <span className={cn('absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity duration-250', open && 'opacity-0')} />
                <span className={cn('absolute left-0 top-[14px] h-0.5 w-6 bg-current transition-transform duration-400 ease-out-expo', open && '-translate-y-[7px] -rotate-45')} />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id={menuId}
        className={cn(
          'grid transition-[grid-template-rows,opacity,visibility] duration-600 ease-out-expo lg:hidden',
          open ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="shell flex flex-col pb-8 pt-2">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={cn(
                    'flex min-h-16 items-center justify-between gap-4 border-b border-text-inverse/12 text-menu uppercase text-text-inverse transition-colors duration-250 ease-out-expo hover:text-primary focus-visible:-outline-offset-2',
                    focusRing,
                  )}
                >
                  {({ isActive }) => (
                    <>
                      <span>{l.label}</span>
                      <span aria-hidden="true" className={cn('size-2 bg-primary', isActive ? 'opacity-100' : 'opacity-0')} />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li className="pt-6">
              <Button to="/contacts#lead" className="w-full text-body">
                Get in touch
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
