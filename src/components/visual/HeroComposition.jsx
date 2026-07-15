import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import ApprovalStamp from '../ui/ApprovalStamp';
import { approvalStamps } from '../../data/siteContent';

/**
 * Desktop: absolute stamps around the globe.
 * Mobile: horizontal/wrap row below the globe (handled by parent via layout prop).
 */
export const HeroComposition = ({
  className,
  mouseOffset = { x: 0, y: 0 },
  layout = 'desktop',
}) => {
  if (layout === 'mobile') {
    return (
      <div className={cn('flex flex-wrap items-start justify-center gap-3 pt-2', className)}>
        {approvalStamps.map((stamp, i) => (
          <ApprovalStamp key={stamp.id} label={stamp.label} rotate={stamp.rotate * 0.4} index={i} />
        ))}
      </div>
    );
  }

  return (
    <div className={cn('pointer-events-none absolute inset-0 z-20', className)}>
      {approvalStamps.map((stamp, i) => (
        <motion.div
          key={stamp.id}
          className="absolute"
          style={{
            left: stamp.desktop.left,
            top: stamp.desktop.top,
            x: mouseOffset.x * (i + 1) * 0.25,
            y: mouseOffset.y * (i + 1) * 0.25,
          }}
        >
          <ApprovalStamp label={stamp.label} rotate={stamp.rotate} index={i} />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroComposition;
