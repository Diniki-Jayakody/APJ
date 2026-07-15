import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import ApprovalStamp from '../ui/ApprovalStamp';
import { approvalStampImages } from '../../data/assets';

/**
 * Desktop: absolute stamps around the globe.
 * Mobile: horizontal/wrap row below the globe.
 */
export const HeroComposition = ({
  className,
  mouseOffset = { x: 0, y: 0 },
  layout = 'desktop',
}) => {
  if (layout === 'mobile') {
    return (
      <div className={cn('flex flex-wrap items-start justify-center gap-3 pt-2', className)}>
        {approvalStampImages.map((stamp, i) => (
          <ApprovalStamp
            key={stamp.id}
            src={stamp.src}
            alt={stamp.alt}
            rotate={stamp.rotate * 0.35}
            index={i}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn('pointer-events-none absolute inset-0 z-20', className)}>
      {approvalStampImages.map((stamp, i) => (
        <motion.div
          key={stamp.id}
          className="absolute"
          style={{
            left: stamp.desktop.left,
            top: stamp.desktop.top,
            x: mouseOffset.x * (i + 1) * 0.22,
            y: mouseOffset.y * (i + 1) * 0.22,
          }}
        >
          <ApprovalStamp
            src={stamp.src}
            alt={stamp.alt}
            rotate={stamp.rotate}
            index={i}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroComposition;
