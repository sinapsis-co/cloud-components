import { Container, IconButton, Stack, styled } from '@mui/material';

export const FooterContainer = styled(Stack)(({ theme }) => {
  return {
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '140px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    '& .logo-box': {
      position: 'absolute',
      transform: 'rotate(-12deg)',
      left: 'unset',
      right: '-4rem',
      top: '1rem',
      zIndex: 0,
    },
    '& .logo-box:first-of-type': {
      left: '-4rem !important',
      right: 'unset !important',
    },
    [theme.breakpoints.down('lg')]: {
      height: '160px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '190px',
      '& .logo-box': {
        right: '-11rem',
      },
      '& .logo-box:first-of-type': {
        left: '-9.5rem !important',
      },
    },

    '.footer-link': {
      '&:focus-visible': {
        outline: '4px auto var(--dark-green)',
      },
    },
  };
});

export const ContentContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  zIndex: 1,
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

export const SocialMediaButton = styled(IconButton)(() => ({
  color: '#000',
  backgroundColor: 'transparent',
  transition: '.5s',
  '&:hover': {
    transform: 'scale(1.1) ',
  },
  '&:active': {
    transform: 'scale(1) ',
  },
}));
