/* Stroke icons from the design (decorative — the surrounding link/button carries the label) */

const arrowProps = { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.25, 'aria-hidden': true };

export function ArrowUpRight({ className }) {
  return (
    <svg {...arrowProps} className={className}>
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}

export function ArrowRight({ className }) {
  return (
    <svg {...arrowProps} className={className}>
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}

export function SocialIcon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
      {name === 'whatsapp' ? (
        <>
          <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1L4 20Z" />
          <path d="M9.2 8.6c.2-.4.6-.4.9-.3l.9 2c.1.3 0 .5-.2.7l-.5.6a5 5 0 0 0 2.3 2.3l.6-.5c.2-.2.4-.3.7-.2l2 .9c.3.1.3.5.1.9-.4.8-1.2 1.2-2 1-3-.6-5.4-3-6-6-.2-.6.4-1.1 1.2-1.4Z" />
        </>
      ) : (
        <>
          <path d="M21 4 3 11l6 2.2L11 20l3.4-4.2L19 19l2-15Z" />
          <path d="m9 13.2 8.5-6.4-6.3 7.6" />
        </>
      )}
    </svg>
  );
}
