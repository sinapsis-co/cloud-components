import { FunctionComponent } from 'react';

import { motion, useReducedMotion } from 'framer-motion';

import { useTheme } from '@mui/material/styles';

interface IsologoProps {
  className?: string;
}

const Isologo: FunctionComponent<IsologoProps> = ({ className }) => {
  const theme = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const animation = {
    animate: shouldReduceMotion ? {} : { pathLength: 1, y: 5 },
    initial: shouldReduceMotion ? {} : { pathLength: 0, y: -5 },
  };

  return (
    <svg
      id="SinapsisIsologo"
      className={className || ''}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 216 216"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Sinapsis"
      style={{
        overflow: 'visible',
      }}
    >
      <motion.path
        initial="initial"
        animate="animate"
        transition={
          shouldReduceMotion ? {} : { duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
        }
        variants={animation}
        fill="none"
        stroke={theme.palette.text.primary}
        strokeMiterlimit={10}
        strokeLinecap={'round'}
        strokeWidth={24}
        d="m14.36,129.23L120.32,23.27c3.85-3.85,1.44-10.44-3.98-10.91-27.27-2.36-55.36,6.89-76.23,27.76C4.27,75.97,2.7,133.11,35.41,170.83c2.5,2.88,6.7,3.06,9.4.37l126.39-126.39c2.69-2.69,6.9-2.51,9.4.37,32.71,37.71,31.14,94.86-4.71,130.71-20.87,20.87-48.96,30.12-76.23,27.76-5.42-.47-7.82-7.06-3.98-10.91l105.95-105.96"
      />
    </svg>
  );
};

export default Isologo;
