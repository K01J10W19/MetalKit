import Button from '@/components/ui/Button';
import FeatureStrip from './FeatureStrip';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[min(100svh,55rem)] flex-col overflow-hidden bg-secondary-950 text-text-inverse"
    >
      {/* LCP image — preloaded in index.html */}
      <img
        src="/images/hero-1200.webp"
        srcSet="/images/hero-640.webp 640w, /images/hero-1200.webp 1200w"
        sizes="100vw"
        width="1200"
        height="648"
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover object-[62%_50%]"
      />
      <div aria-hidden="true" className="fade-hero absolute inset-0 -z-10" />

      <div className="shell flex flex-1 flex-col items-center gap-4 pb-16 pt-32 text-center">
        <h1 id="hero-title" className="max-w-[22ch] text-h1 font-normal uppercase">
          Custom metal fabrication in Moscow and the region
        </h1>
        <p className="max-w-[60ch] text-tagline uppercase text-white">Carports, staircases, gazebos and hangars built to your design</p>
      </div>

      <div className="shell pb-10">
        <Button to="/#lead-1" size="xl" className="w-full hover:shadow-glow-lg active:scale-[0.99]">
          Request a quote
        </Button>
      </div>
      <FeatureStrip />
    </section>
  );
}
