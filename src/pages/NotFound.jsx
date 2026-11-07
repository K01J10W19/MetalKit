import Seo from '@/components/seo/Seo';
import Button from '@/components/ui/Button';
import { PAGE_META } from '@/data/content';

export default function NotFound() {
  return (
    <>
      <Seo {...PAGE_META.notFound} path="/404" noindex />
      <section className="flex min-h-[80svh] flex-col items-center justify-center gap-6 bg-secondary-950 px-4 pb-16 pt-32 text-center text-text-inverse">
        <p aria-hidden="true" className="hollow-primary font-display text-stat font-medium">
          404
        </p>
        <h1 className="text-h2 font-normal uppercase">Page not found</h1>
        <Button to="/">Back to home</Button>
      </section>
    </>
  );
}
