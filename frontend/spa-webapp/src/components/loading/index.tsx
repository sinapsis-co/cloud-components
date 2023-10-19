import { FunctionComponent } from 'react';

import { motion, useReducedMotion } from 'framer-motion';
import { useIntl } from 'react-intl';

import { easing } from '@webapp/components/framer';

import { alpha, styled } from '@mui/material/styles';

import Isologo from '../isologo';

const Container = styled('div')(() => ({
  isolation: 'isolate',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100dvh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'wait',

  '& .wrapper-isologo': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 99999,
    '& .isologo': {
      width: 'max(5vw, 150px)',
      height: 'max(5vw, 150px)',
      aspectRatio: '1/1',
    },
  },
}));

const Backdrop = styled(motion.span)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  zIndex: theme.zIndex.modal,
  backdropFilter: `blur(${theme.spacing(0.5)})`,
  WebkitBackdropFilter: `blur(${theme.spacing(0.5)})`,
}));

// Define the properties for the FullscreenLoading component
interface FullscreenLoadingProps {
  className?: string;
  fullscreen?: boolean;
}

/**
 * `FullscreenLoading` is a component that displays a loading indicator with a backdrop.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {boolean} [props.fullscreen] - Determines whether the loading indicator is full-screen.
 */
const FullscreenLoading: FunctionComponent<FullscreenLoadingProps> = ({ className, fullscreen = true }) => {
  const shouldReduceMotion = useReducedMotion(); // Check for reduced motion preference
  const { formatMessage } = useIntl();

  return (
    <Container
      id="loading"
      className={className || ''}
      data-fullscreen={fullscreen}
      aria-busy="true" // Indicate that the page is loading
      role="status" // Add ARIA role to indicate a status message
      aria-label={formatMessage({ id: 'COMMON.LOADING' })} // Provide an ARIA label to describe the loading process
    >
      {/* This wrapper is used solely for positioning purposes, and it won't interfere with Framer Motion's transform animations. */}
      <div className="wrapper-isologo">
        <Isologo className="isologo" />
      </div>
      <Backdrop
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 0 }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ...easing,
                },
              }
        }
        exit={
          shouldReduceMotion
            ? {}
            : {
                opacity: 0,
                y: '-25%',
                transition: {
                  duration: 0.25,
                  ...easing,
                },
              }
        }
      />
    </Container>
  );
};

/**
 * Default props for the `FullscreenLoading` component.
 */
FullscreenLoading.defaultProps = {
  className: '',
  fullscreen: true,
};

export default FullscreenLoading;
