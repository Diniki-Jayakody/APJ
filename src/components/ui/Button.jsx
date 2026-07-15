import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const variants = {
  primary:
    'bg-gradient-to-br from-navy-900 to-primary-light text-white shadow-brand-button hover:shadow-brand-md',
  secondary:
    'bg-gradient-to-br from-secondary to-secondary-light text-white shadow-brand-button hover:shadow-brand-md',
  outline:
    'bg-white text-navy-900 border border-line shadow-none hover:border-secondary/60 hover:text-secondary',
  ghost: 'bg-transparent text-navy-900 hover:bg-sky-100/80',
  success: 'bg-success text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-sm',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className,
  icon: Icon,
  type = 'button',
  ...props
}) => {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2',
    'disabled:opacity-60 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {Icon && <Icon className="text-lg shrink-0" aria-hidden />}
      {children}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
