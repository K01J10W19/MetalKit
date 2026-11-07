/* Moves focus to <main> without touching the URL (a #main hash would look like a route change) */
export default function SkipLink() {
  const onClick = (e) => {
    e.preventDefault();
    document.getElementById('main')?.focus();
  };
  return (
    <a
      href="#main"
      onClick={onClick}
      className="fixed -top-20 left-4 z-100 bg-primary px-6 py-4 text-small font-medium uppercase tracking-[0.04em] text-secondary-950 transition-[top] duration-250 ease-out-expo focus:top-4 focus:outline-2 focus:outline-offset-2 focus:outline-secondary-950"
    >
      Skip to content
    </a>
  );
}
