import { cn } from '../../utils/cn';

export const Grid = ({ children, cols = 3, gap = 'lg', className, ...props }) => {
  const colMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  };
  const gapMap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10',
  };

  return (
    <div className={cn('grid', colMap[cols], gapMap[gap], className)} {...props}>
      {children}
    </div>
  );
};

export default Grid;
