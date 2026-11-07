import Spinner from './Spinner';

/* Suspense fallback — reserves viewport height so the footer doesn't jump (CLS) */
export default function PageLoader() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-secondary-950 text-primary">
      <Spinner size="lg" label="Loading page" />
    </div>
  );
}
