import { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

export const LazyImage = ({
  src,
  alt,
  className,
  wrapperClassName,
  aspectRatio = '4 / 3',
  objectFit = 'cover',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
  }, [src]);

  const handleImageRef = (node) => {
    if (!node) return;
    // Cached images often finish before onLoad is attached; detect ready state.
    if (node.complete && node.naturalWidth > 0) {
      setLoaded(true);
      setFailed(false);
    }
  };

  return (
    <div
      className={cn('relative overflow-hidden bg-sky-100', wrapperClassName)}
      style={{ aspectRatio }}
    >
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-sky-100 to-sky-50 transition-opacity duration-500',
          loaded || failed ? 'opacity-0' : 'opacity-100',
        )}
        aria-hidden
      />
      {!failed ? (
        <img
          key={src}
          ref={handleImageRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => {
            setLoaded(true);
            setFailed(false);
          }}
          onError={() => {
            setFailed(true);
            setLoaded(false);
          }}
          className={cn(
            'h-full w-full transition-all duration-700',
            objectFit === 'contain' ? 'object-contain' : 'object-cover',
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
            className,
          )}
          {...props}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-900 via-primary-light to-secondary px-4 text-center text-sm font-medium text-white/80"
          role="img"
          aria-label={alt}
        >
          {alt || 'Image unavailable'}
        </div>
      )}
    </div>
  );
};

export default LazyImage;
