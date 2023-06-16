export const easing = { ease: [0.0, 0.005, 0.2, 1.0] };

export const container = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
      staggerDirection: 1,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ...easing },
  },
};

export const fadeInBottom = {
  hidden: {
    opacity: 0,
    y: '5%',
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.25, duration: 1, ...easing },
    y: 0,
  },
};

export const fadeInLeft = {
  hidden: {
    scale: 0.9,
    opacity: 0,
    x: '-15%',
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ...easing },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: '5%',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ...easing },
  },
};
