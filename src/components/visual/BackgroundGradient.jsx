import { cn } from '../../utils/cn';
import AnimatedBlob from './AnimatedBlob';

export const BackgroundGradient = ({ className, children }) => (
  <div className={cn('relative overflow-hidden bg-hero-gradient', className)}>
    <AnimatedBlob color="sky" size="xl" className="-right-20 -top-20" />
    <AnimatedBlob color="navy" size="lg" className="-left-16 bottom-0" />
    <AnimatedBlob color="sky" size="md" className="right-1/4 top-1/3 opacity-60" />
    {children}
  </div>
);

export default BackgroundGradient;
