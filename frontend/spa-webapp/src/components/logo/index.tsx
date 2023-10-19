import React, { FunctionComponent } from 'react';

import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';

import { easing } from '@webapp/components/framer';

// Import necessary dependencies
import { styled, useTheme } from '@mui/material/styles';

/**
 * `Logo` is a component representing a custom SVG logo.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {LogoVariant} [props.variant] - The logo variant ('primary', 'normal', 'white', or 'dark').
 */

type LogoVariant = 'primary' | 'normal' | 'white' | 'dark';

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
}

const Logo: FunctionComponent<LogoProps> = ({ className, variant }) => {
  const theme = useTheme();
  const shouldReduceMotion = useReducedMotion(); // Check for reduced motion preference

  const controls = useAnimationControls();

  const [isAnimated, setIsAnimated] = React.useState(false);

  const getLogoColor = (variant: LogoVariant) => {
    switch (variant) {
      case 'primary':
        return theme.palette.primary.main;
      case 'normal':
        return theme.palette.text.primary;
      case 'white':
        return theme.palette.text.primary;
      case 'dark':
        return theme.palette.common.black;
      default:
        return theme.palette.text.primary;
    }
  };

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    if (isAnimated) {
      controls.start({ pathLength: [0, 1] });
      const timer = setTimeout(() => setIsAnimated(false), 2000);
      return () => clearTimeout(timer);
    } else {
      controls.start({ pathLength: 1 });
    }
  }, [controls, isAnimated]);

  return (
    <SVG
      className={className || ''}
      id="isologotipo"
      color={getLogoColor(variant || 'white')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 187.4 48.5"
      role="img"
      aria-label="Sinapsis Logo"
      onMouseEnter={() => setIsAnimated(true)}
      onAnimationEnd={() => setIsAnimated(false)}
      style={{
        pointerEvents: isAnimated ? 'none' : 'auto',
      }}
    >
      <motion.path
        className="isologo"
        animate={controls}
        transition={shouldReduceMotion ? {} : { duration: 2, ...easing }}
        d="M3.4 29L26.9 5.5c0.8-0.8 0.4-2.3-0.8-2.4C20 2.5 13.8 4.6 9.2 9.2c-8 8-8.2 20.6-1 29 0.6 0.7 1.5 0.8 2.1 0.1l28-28.1c0.7-0.7 1.5-0.6 2.1 0.1 7.3 8.4 6.9 21-1 29 -4.6 4.6-10.9 6.7-16.9 6.1 -1.2-0.1-1.8-1.6-0.8-2.4l23.5-23.5"
      />
      <path
        className="letters"
        d="M59.7 30.8l3.3-2.9c1.2 1.1 2.8 1.8 4.5 1.8 1.8 0 2.4-0.3 2.4-1.1 0-0.9-1.1-0.9-4-1.7 -2.4-0.6-5.2-1.9-5.2-5.7 0-3.9 3.1-5.6 7-5.6 2.9 0 5 0.9 6.5 2.4l-3 3.4c-0.8-0.7-2.1-1.3-3.4-1.3s-1.9 0.3-1.9 1c0 1 1.1 1.1 3.5 1.6 2.6 0.6 5.8 1.8 5.8 5.5 0 3.2-1.7 5.9-7.4 5.9C63.6 34.1 61.2 32.6 59.7 30.8z"
      />
      <path
        className="letters"
        d="M76.6 9.9c0-2 1.6-3.4 3.5-3.4 1.8 0 3.4 1.4 3.4 3.4S82 13.3 80 13.3C78.3 13.4 76.6 12 76.6 9.9zM77.2 34.1l0-17.2 5.5 0 0 17.2L77.2 34.1z"
      />
      <path
        className="letters"
        d="M86.3 16.1h5.5L91.7 19c1-2.1 3.1-3.3 5.5-3.3 3.8 0 6.6 2.8 6.6 8v10.4h-5.5v-10c0-2-0.9-3.1-2.9-3.1 -2.2 0-3.5 1.2-3.5 3.5v9.6h-5.5L86.3 16.1C86.4 16.1 86.3 16.1 86.3 16.1z"
      />
      <path
        className="letters"
        d="M113.5 20.4c-2.1 0-3.2 0.9-4 1.6l-3.1-3.3c1.6-1.6 3.5-2.9 7.7-2.9 4.6 0 8 2.4 8 8v10h-5.6l0.1-2.4c-1.3 2-2.9 2.8-5.2 2.8 -3.2 0-6.3-1.4-6.3-5.6 0-3.7 2.9-5.3 7.3-5.3h4.1C116.4 21.3 115.4 20.4 113.5 20.4zM112.7 26.6c-1.4 0-2.1 0.6-2.1 1.6s0.8 1.6 2.4 1.6c2.3 0 3.4-1 3.4-2.4v-0.7L112.7 26.6z"
      />
      <path
        className="letters"
        d="M124.6 16.3h5.5l-0.1 2.6c1-1.8 2.9-3 5.6-3 4.1 0 7.7 3.6 7.7 8.9s-3.6 9-7.9 9c-2.6 0-4.5-1.1-5.3-2.6V42h-5.5L124.6 16.3zM137.7 24.8c0-2.5-1.4-4.2-3.7-4.2 -2.4 0-3.9 1.6-3.9 4.2 0 2.7 1.5 4.3 3.9 4.3C136.2 29.1 137.7 27.6 137.7 24.8z"
      />
      <path
        className="letters"
        d="M145.4 30.8l3.3-2.9c1.2 1.1 2.8 1.8 4.5 1.8 1.8 0 2.4-0.3 2.4-1.1 0-0.9-1.1-0.9-4-1.7 -2.4-0.6-5.2-1.9-5.2-5.7 0-3.9 3.1-5.6 7-5.6 2.9 0 5 0.9 6.5 2.4l-3 3.1c-0.8-0.7-2.1-1.3-3.4-1.3s-1.9 0.3-1.9 1c0 1 1.1 1.1 3.5 1.6 2.6 0.6 5.8 1.8 5.8 5.5 0 3.2-1.7 5.9-7.4 5.9C149.3 34.1 147 32.6 145.4 30.8z"
      />
      <path
        className="letters"
        d="M171.9 30.8l3.3-2.9c1.2 1.1 2.8 1.8 4.5 1.8 1.8 0 2.4-0.3 2.4-1.1 0-0.9-1.1-0.9-4-1.7 -2.4-0.6-5.2-1.9-5.2-5.7 0-3.9 3.1-5.6 7-5.6 2.9 0 5 0.9 6.5 2.4l-3 3.1c-0.8-0.7-2.1-1.3-3.4-1.3 -1.3 0-1.9 0.3-1.9 1 0 1 1.1 1.1 3.5 1.6 2.6 0.6 5.8 1.8 5.8 5.5 0 3.2-1.7 5.9-7.4 5.9C175.8 34.1 173.4 32.6 171.9 30.8z"
      />
      <path
        className="letters"
        d="M163.2 9.9c0-2 1.6-3.4 3.5-3.4 1.8 0 3.4 1.4 3.4 3.4s-1.5 3.4-3.5 3.4C164.8 13.4 163.2 12 163.2 9.9zM163.8 34.1l0-17.2 5.5 0 0 17.2L163.8 34.1z"
      />
    </SVG>
  );
};

/**
 * Default props for the `Logo` component.
 */
Logo.defaultProps = {
  className: '',
  variant: 'white',
};

export default Logo;

const SVG = styled(motion.svg)<{ color?: string }>(({ theme, color }) => ({
  width: '100%',
  maxWidth: 192,
  fill: color,
  [theme.breakpoints.down('sm')]: {
    maxWidth: 128,
  },
  '& .isologo': {
    fill: 'none',
    stroke: color,
    strokeWidth: '5',
    strokeMiterlimit: '10',
    strokeLinecap: 'round',
  },
}));
