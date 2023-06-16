import { Container, Stack, styled } from '@mui/material';

export const HeroBannerContainer = styled(Container)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '2rem 0 4rem 0',
    position: 'relative',
    zIndex: '10',
    overflow: 'hidden',
    paddingBlockStart: '120px',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 30px 3rem',
      paddingBlockStart: '124px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2rem .5rem 3rem',
      paddingBlockStart: '124px',
    },
    '.wrapper-hero-img': {
      position: 'relative',
      width: '100%',
      height: '650px',
      '& img': {
        objectFit: 'contain',
      },
      [theme.breakpoints.down(1100)]: {
        width: '50% ',
      },
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  };
});

export const ContentWrapper = styled(Stack)(({ theme }) => {
  return {
    gap: theme.spacing(1),
    width: '100%',
    '& h1': {
      fontWeight: '600',
      fontSize: '44px',
      lineHeight: '48px',
      color: theme.palette.primary.main,
    },
    '& p': {
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '28px',
    },
    [theme.breakpoints.up(1080)]: {
      marginRight: 'auto',
      maxWidth: '440px',
    },
    [theme.breakpoints.down('md')]: {
      gap: theme.spacing(3),
      flexDirection: 'row',
      '& h1': {
        fontSize: '38px',
      },
      '& p': {
        fontSize: '18px',
      },
    },
    [theme.breakpoints.down(800)]: {
      flexDirection: 'column',
    },
  };
});

export const TextWrapper = styled(Stack)(({ theme }) => {
  return {
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      gap: theme.spacing(3),
      width: '60%',
    },
    [theme.breakpoints.down(800)]: {
      margin: 'auto',
      maxWidth: '600px',
      width: '90%',
      '& h1': {
        fontSize: '40px',
      },
      '& p': {
        fontSize: '20px',
      },
    },
  };
});
