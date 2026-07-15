import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { getCountryImage } from '../../data/countryImages';
import { theme } from '../../constants/theme';
import LazyImage from './LazyImage';
import Button from './Button';

export const CountryCard = ({ country, onViewDetails, className }) => {
  const image = getCountryImage(country.slug);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: theme.animation.duration.fast, ease: theme.animation.easing.smooth }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-line bg-white shadow-brand-sm',
        'transition-all duration-300 hover:border-secondary/50 hover:shadow-brand-lg',
        className,
      )}
    >
      <div className="relative overflow-hidden">
        <LazyImage
          src={image.src}
          alt={image.alt}
          aspectRatio={theme.assets.countryCardAspect}
          className="transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: theme.gradients.cardOverlay }}
        />
        {/* Flag accent */}
        <span
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/20 text-xl backdrop-blur-md"
          role="img"
          aria-label={`${country.name} flag`}
        >
          {country.flag}
        </span>
        {/* Content on image */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-xl font-semibold text-white">{country.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm font-normal text-white/85">{country.shortDescription}</p>
        </div>
      </div>

      <div className="p-4">
        <Button
          variant="outline"
          size="sm"
          className="w-full border-line group-hover:border-secondary group-hover:text-secondary"
          onClick={() => onViewDetails?.(country)}
        >
          View Details
        </Button>
      </div>
    </motion.article>
  );
};

export default CountryCard;
