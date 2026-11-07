import { useState } from 'react';
import Skeleton from './Skeleton';
import { cn } from '@/utils/cn';

/*
 * CLS-safe lazy image:
 *  - aspect-ratio box from `ratio` (a class) or width/height, plus explicit width/height attributes
 *  - shimmer placeholder until decoded, alt-text fallback on error
 * Above-the-fold photos (heroes) use a plain <img fetchPriority="high"> instead.
 */
export default function Image({ src, alt, width, height, ratio, tone = 'dark', className, imgClassName }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn('relative overflow-hidden', ratio, tone === 'dark' ? 'bg-surface-image' : 'bg-surface-image-light', className)}
      style={ratio ? undefined : { aspectRatio: width + ' / ' + height }}
    >
      {!loaded && !failed && <Skeleton tone={tone} className="absolute inset-0" />}
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <span className={cn('text-caption uppercase', tone === 'dark' ? 'text-text-inverse-muted' : 'text-text-subtle')}>
            {alt}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            'absolute inset-0 size-full object-cover transition-opacity duration-800 ease-out-expo',
            loaded ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      )}
    </div>
  );
}
