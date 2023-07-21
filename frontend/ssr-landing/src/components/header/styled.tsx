import { alpha, styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const ContainerWrapper = styled(Container)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.75),
  maxWidth: 'none !important',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: 100,
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  alignItems: 'center',
  padding: theme.spacing(1, 0),
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1, 2),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 0),
  },

  '& .header-logo': {
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.8)',
    },
  },
}));
