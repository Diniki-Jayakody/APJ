import { cn } from '../../utils/cn';
import Container from './Container';

export const Section = ({
  children,
  id,
  className,
  background = 'default',
  ...props
}) => {
  const backgrounds = {
    default: 'bg-white',
    soft: 'bg-soft',
    gradient: 'bg-gradient-to-b from-sky-50 to-white',
    navy: 'bg-navy-900 text-white',
  };

  return (
    <section
      id={id}
      className={cn('relative py-12 md:py-16 lg:py-20', backgrounds[background], className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
