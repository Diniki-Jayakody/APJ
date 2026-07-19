import { theme } from '../constants/theme';

const { duration, easing } = theme.animation;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.smooth },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.normal, ease: easing.smooth } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.slow, ease: easing.smooth },
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: easing.smooth },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: easing.smooth },
  },
};

export const blurReveal = {
  hidden: { opacity: 0, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: duration.slower, ease: easing.smooth },
  },
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -8, scale: 0.95 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: duration.slow, ease: easing.bounce },
  },
};

export const maskReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: duration.slower, ease: easing.smooth },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const hoverLift = {
  rest: { y: 0, boxShadow: theme.shadows.sm },
  hover: {
    y: -6,
    boxShadow: theme.shadows.md,
    transition: { duration: duration.fast, ease: easing.smooth },
  },
};

export const iconRotate = {
  rest: { rotate: 0 },
  hover: { rotate: 12, transition: { duration: duration.fast } },
};
export const floatY = {
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const pulseGlow = {
  animate: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.05, 1],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};
