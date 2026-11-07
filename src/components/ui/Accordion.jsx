import { useId, useState } from 'react';
import { cn } from '@/utils/cn';

/* One panel open at a time; closed panels are `invisible`, so their text is out of the tab order */
export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const uid = useId();

  return (
    <ul className="border-t border-line">
      {items.map((it, i) => {
        const open = openIndex === i;
        const btnId = uid + '-btn' + i;
        const panelId = uid + '-panel' + i;
        return (
          <li key={it.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={btnId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
                className="flex w-full cursor-pointer items-center justify-between gap-6 px-2 py-6 text-left text-question font-normal uppercase transition-colors duration-250 ease-out-expo hover:bg-primary/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
              >
                <span>{it.q}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'relative size-8 flex-none text-accent-ink transition-transform duration-600 ease-spring',
                    open && 'rotate-45',
                  )}
                >
                  <span className="absolute inset-x-1 top-[15px] h-0.5 bg-current" />
                  <span className="absolute inset-y-1 left-[15px] w-0.5 bg-current" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn(
                'grid transition-[grid-template-rows,opacity,visibility] duration-600 ease-out-expo',
                open ? 'visible grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-[72ch] px-2 pb-6 text-body text-text-muted">{it.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
