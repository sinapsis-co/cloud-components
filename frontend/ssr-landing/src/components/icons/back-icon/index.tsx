import { FunctionComponent } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { styled } from '@mui/material';
import { motion } from 'framer-motion';

import { useRouter } from 'next/router';

import { easing } from '../../framer';

interface BackIconProps {
  className?: string;
}

const IconWrapper = styled(motion.div)(({ theme }) => {
  return {
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: theme.palette.grey[300],
    overflow: 'hidden',
  };
});

const BackIcon: FunctionComponent<BackIconProps> = ({ className }) => {
  const circleVariation = {
    intial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        ...easing,
      },
    },
    tap: {
      scale: 0.5,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  const arrowVariations = {
    initial: {
      x: 0,
      scale: 1,
    },
    hover: {
      x: -2,
      scale: 0.9,
      transition: {
        ...easing,
      },
    },
    tap: {
      x: -200,
      scale: 1.5,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <IconWrapper
      className={className || ''}
      variants={circleVariation}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      animate="initial"
      onClick={handleBack}
    >
      <motion.div variants={arrowVariations} style={{ display: 'flex' }}>
        <ArrowBackIcon />
      </motion.div>
    </IconWrapper>
  );
};

export default BackIcon;
