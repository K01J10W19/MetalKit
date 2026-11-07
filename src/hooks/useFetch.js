import { useEffect, useEffectEvent, useState } from 'react';

/*
 * Minimal data-fetching hook with abort + refetch. `key` identifies the request:
 * when it changes, the previous request is aborted and `loading` flips back on.
 * Swap for TanStack Query when the app grows.
 */
export function useFetch(fetcher, key) {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState({ id: null, data: null, error: null });
  const id = key + '#' + attempt;
  const load = useEffectEvent((signal) => fetcher(signal));

  useEffect(() => {
    const ctrl = new AbortController();
    load(ctrl.signal).then(
      (data) => setResult({ id, data, error: null }),
      (error) => {
        if (!ctrl.signal.aborted) setResult({ id, data: null, error });
      },
    );
    return () => ctrl.abort();
  }, [id]);

  // Derived instead of stored, so a new key shows the loading state on the same render
  const loading = result.id !== id;
  return {
    data: loading ? null : result.data,
    error: loading ? null : result.error,
    loading,
    refetch: () => setAttempt((n) => n + 1),
  };
}
