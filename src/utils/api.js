import { PROJECTS } from '@/data/content';

/*
 * Mock API layer. Replace bodies with real fetch() calls —
 * signatures (signal in, Promise out) stay the same.
 */
const LATENCY = 900;

const wait = (ms, signal) =>
  new Promise((resolve, reject) => {
    const t = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(t);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });

export async function getProjects({ category = 'all', limit } = {}, signal) {
  await wait(LATENCY, signal);
  const list = category === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === category);
  return typeof limit === 'number' ? list.slice(0, limit) : list;
}

export async function submitLead(payload, signal) {
  await wait(LATENCY, signal);
  if (!payload.phone) throw new Error('Phone number is required');
  return { ok: true };
}
