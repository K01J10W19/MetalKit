import { useState } from 'react';
import Button from '@/components/ui/Button';
import Image from '@/components/ui/Image';
import Reveal from '@/components/ui/Reveal';
import Skeleton from '@/components/ui/Skeleton';
import Spinner from '@/components/ui/Spinner';
import { useFetch } from '@/hooks/useFetch';
import { getProjects } from '@/utils/api';
import { PROJECT_CATEGORIES, PROJECTS } from '@/data/content';
import { cn } from '@/utils/cn';

const LABELS = Object.fromEntries(PROJECT_CATEGORIES.map((c) => [c.id, c.label]));
const COUNTS = Object.fromEntries(
  PROJECT_CATEGORIES.map((c) => [c.id, c.id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.category === c.id).length]),
);

const grid = 'grid grid-cols-2 gap-4 lg:grid-cols-4';

/* Project grid backed by the (mock) API; `filterable` adds category chips with counts */
export default function ProjectsGallery({ filterable = false }) {
  const [category, setCategory] = useState('all');
  const { data, loading, error, refetch } = useFetch((signal) => getProjects({ category }, signal), category);

  return (
    <div>
      {filterable && (
        <div role="group" aria-label="Filter by category" className="mb-6 flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((c) => {
            const active = c.id === category;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(c.id)}
                className={cn(
                  'inline-flex min-h-12 cursor-pointer items-center gap-2 border border-line-strong px-6 text-small uppercase tracking-[0.04em]',
                  'transition-[background-color,color,border-color,transform] duration-250 ease-out-expo hover:border-secondary-950 active:scale-[0.97]',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                  active ? 'bg-secondary-950 text-text-inverse' : 'text-text',
                )}
              >
                {c.label}
                <span className="text-xs opacity-64">{COUNTS[c.id]}</span>
              </button>
            );
          })}
        </div>
      )}

      <div role="status" aria-live="polite" className="mb-2 flex min-h-6 items-center gap-2 text-caption text-text-subtle">
        {loading ? (
          <>
            <Spinner size="sm" className="size-3.5 text-primary" />
            <span>Loading projects…</span>
          </>
        ) : (
          <span className="sr-only">{error ? 'Couldn’t load projects' : 'Projects shown: ' + data.length}</span>
        )}
      </div>

      {error ? (
        <div className="flex flex-col items-start gap-4">
          <p className="text-body text-text-muted">Couldn’t load projects.</p>
          <Button variant="dark" onClick={refetch}>
            Retry
          </Button>
        </div>
      ) : loading ? (
        <div aria-hidden="true" className={grid}>
          {Array.from({ length: COUNTS[category] }, (_, i) => (
            <Skeleton key={i} className="aspect-[273/197]" />
          ))}
        </div>
      ) : (
        <ul className={grid}>
          {data.map((p, i) => (
            <Reveal as="li" key={p.id} delay={(i % 4) * 80}>
              <figure className="group relative overflow-hidden">
                <Image src={p.img} alt={p.title} width={273} height={197} tone="light" />
                <figcaption className="absolute inset-0 flex items-end justify-between gap-2 bg-linear-to-b from-secondary-950/0 from-35% to-secondary-950/88 p-4 text-caption leading-[1.3] uppercase tracking-[0.04em] text-text-inverse opacity-0 transition-opacity duration-400 ease-out-expo group-hover:opacity-100">
                  <span>{p.title}</span>
                  <span className="flex-none text-primary">{LABELS[p.category]}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  );
}
