import Eyebrow from '@/components/ui/Eyebrow';

/*
 * Dark photo header for inner pages (sits under the fixed navbar).
 * image: { src, srcSet?, width, height, position } · overlay: [top, middle] darkness
 */
export default function PageHero({ id, eyebrow, title, accent, image, overlay = [0.85, 0.55], children }) {
  return (
    <section aria-labelledby={id} className="relative isolate overflow-hidden bg-secondary-950 text-text-inverse">
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.srcSet ? '100vw' : undefined}
        width={image.width}
        height={image.height}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover"
        style={{ objectPosition: image.position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(180deg, rgb(14 10 4 / ${overlay[0]}) 0%, rgb(14 10 4 / ${overlay[1]}) 55%, #0e0a04 100%)`,
        }}
      />
      <div className="shell pb-16 pt-40 lg:pb-24">
        <div className="flex flex-wrap gap-x-4 gap-y-6">
          <p className="eyebrow-col flex self-start lg:pt-4">
            <Eyebrow>{eyebrow}</Eyebrow>
          </p>
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <h1 id={id} className="text-h1 font-normal uppercase">
              {title} <span className="block text-primary">{accent}</span>
            </h1>
            {children && <p className="max-w-[56ch] text-lead text-text-inverse-lead">{children}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
