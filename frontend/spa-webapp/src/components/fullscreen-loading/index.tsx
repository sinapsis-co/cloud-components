import React, { FunctionComponent } from 'react';

import { motion, useReducedMotion } from 'framer-motion';
import { useIntl } from 'react-intl';

import { easing } from '@webapp/components/framer';

import { alpha, styled } from '@mui/material/styles';

import Isologo from '../isologo';

// Framer Motion configuration for the backdrop animation
const backdropMotionConfig = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: [0, 1],
    y: 0,
    transition: {
      duration: 0.5,
      ...easing,
    },
  },
  exit: {
    opacity: 0,
    y: '-25%',
    transition: {
      duration: 0.25,
      ...easing,
    },
  },
};

const Container = styled('div')(() => ({
  isolation: 'isolate',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'wait',
  zIndex: 1000,
  pointerEvents: 'none',

  '&[data-fullscreen="true"]': {
    position: 'fixed',
    width: '100vw',
    height: '100dvh',
    inset: 0,
    transform: 'none',
  },

  '& .wrapper-isologo': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3000,
    pointerEvents: 'none',
    '& .isologo': {
      width: 'max(5vw, 150px)',
      height: 'max(5vw, 150px)',
      aspectRatio: 1,
    },
  },
}));

const Backdrop = styled(motion.div)(({ theme }) => ({
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  zIndex: 2000,
  backdropFilter: `blur(${theme.spacing(0.5)})`,
  WebkitBackdropFilter: `blur(${theme.spacing(0.5)})`,
  pointerEvents: 'none',
}));

interface FullscreenLoadingProps {
  className?: string;
  isFullscreen?: boolean;
  hasBackdrop?: boolean;
}

/**
 * `FullscreenLoading` is a component that displays a loading indicator with a backdrop.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {boolean} [props.isFullscreen] - Determines whether the loading indicator is full-screen.
 * @param {boolean} [props.hasBackdrop] - Determines whether the loading indicator has a backdrop.
 */
const FullscreenLoading: FunctionComponent<FullscreenLoadingProps> = ({ className, isFullscreen, hasBackdrop }) => {
  const shouldReduceMotion = useReducedMotion();
  const { formatMessage } = useIntl();

  // disable pointer events on the whole document when loading
  React.useEffect(() => {
    if (!isFullscreen) {
      return;
    }
    if (document) {
      document.body.style.pointerEvents = 'none';
    }
    return () => {
      if (document) {
        document.body.style.pointerEvents = 'auto';
      }
    };
  }, []);

  return (
    <Container
      id="loading"
      className={className || ''}
      data-fullscreen={isFullscreen}
      aria-busy="true" // Indicates that the page is loading
      role="status" // Indicates a status message
      aria-label={formatMessage({ id: 'COMMON.LOADING' })} // Describes the loading process
      onClick={(event) => event.stopPropagation()}
    >
      <div className="wrapper-isologo">
        <Isologo className="isologo" />
      </div>
      {(isFullscreen || hasBackdrop) && (
        <Backdrop
          role="presentation" // Indicates a presentation
          aria-hidden="true" // Hides the backdrop from screen readers
          aria-label={formatMessage({ id: 'COMMON.LOADING' })} // Describes the loading process
          aria-describedby="loading" // References the loading indicator
          aria-atomic="true" // Indicates that the loading indicator is atomic
          aria-live="polite" // Indicates that the loading indicator is polite
          aria-busy="true" // Indicates that the page is loading
          onClick={(event) => event.stopPropagation()}
          {...(shouldReduceMotion ? {} : backdropMotionConfig)}
        />
      )}
    </Container>
  );
};

FullscreenLoading.defaultProps = {
  className: '',
  isFullscreen: true,
  hasBackdrop: true,
};

export default FullscreenLoading;
