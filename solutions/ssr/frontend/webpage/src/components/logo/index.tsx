import React, { FunctionComponent } from 'react';

import { styled } from '@mui/material/styles';

import LogoTypeSVG from './logotype';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

const LogoWrapper = styled(Box)(() => ({
  cursor: 'pointer',
  '&.hovered': {
    '& .isologo': {
      animation: 'logoAnimation 10s ease-in-out',
    },
  },
}));

const Isologo = styled(Typography)(({ theme }) => ({
  fontFamily: 'Reedy Variable Regular',
  fontSize: '80px',
  lineHeight: 1,
  fontVariationSettings: '"wdth" 100, "vrot" 70, "opsz" 0',
  color: theme.palette.primary.main,
  textAlign: 'center',
  userSelect: 'none',
  maxHeight: theme.spacing(9),
  marginBottom: theme.spacing(0.5),
}));

interface LogoProps {
  className?: string;
}

const Logo: FunctionComponent<LogoProps> = ({ className }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => setIsHovered(false), 10000); // Set timeout for 10 seconds
    return () => {
      clearTimeout(timer); // Clear the timeout
    };
  }, [isHovered]);

  const handleHome = () => {
    router.push('/');
  };

  return (
    <LogoWrapper
      className={`${className || ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onClick={handleHome}
    >
      <Isologo className="isologo">e</Isologo>
      <LogoTypeSVG />
    </LogoWrapper>
  );
};

export default Logo;
