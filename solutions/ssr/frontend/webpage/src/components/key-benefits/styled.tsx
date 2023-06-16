import { Stack, styled } from '@mui/material';

export const KeyBenefitsContainer = styled(Stack)(({ theme }) => {
  return {
    width: '100%',
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10rem 0 2rem',
    maxWidth: '1200px',
    [theme.breakpoints.down(1050)]: {
      flexDirection: 'column',
      gap: '32px',
    },
    '.image-wrapper': {
      position: 'relative',
      width: 'clamp(300px, 50%, 600px)',
      aspectRatio: '1/1',
      [theme.breakpoints.down(1050)]: {
        maxWidth: '500px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },
  };
});

export const ContentWrapper = styled(Stack)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.spacing(5),
    width: '100%',
    [theme.breakpoints.down('md')]: {
      gap: theme.spacing(4),
      padding: theme.spacing(0),
    },
  };
});
