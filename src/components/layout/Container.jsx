import { cn } from '../../utils/cn';

export const Container = ({ children, className, as: Tag = 'div', ...props }) => (
  <Tag className={cn('mx-auto w-full max-w-7xl px-5 md:px-8', className)} {...props}>
    {children}
  </Tag>
);

export default Container;
