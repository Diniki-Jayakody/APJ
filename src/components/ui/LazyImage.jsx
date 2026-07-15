import { useState } from 'react';
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

  return (
    <div
      className={cn('relative overflow-hidden bg-sky-100', wrapperClassName)}
      style={{ aspectRatio }}
    >
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-sky-100 to-sky-50 transition-opacity duration-500',
          loaded ? 'opacity-0' : 'opacity-100',
        )}
        aria-hidden
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          'h-full w-full transition-all duration-700',
          objectFit === 'contain' ? 'object-contain' : 'object-cover',
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
