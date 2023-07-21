import { Stack, styled } from '@mui/material';

export const BenefitSectionContainer = styled(Stack)<{ accent: string }>(({ theme, accent }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'flex-start',
    padding: theme.spacing(1),
    width: '100%',
    userSelect: 'none',
    cursor: 'pointer',
    '& h3': {
      fontSize: '32px',
    },
    [theme.breakpoints.down('md')]: {
      '& h3': {
        fontSize: '30px',
      },
      '& p': {
        fontSize: '16px',
      },
    },
    [theme.breakpoints.up('md')]: {
      transition: '.25s',
      padding: theme.spacing(2),
      borderRadius: '10px',
      border: '3px solid transparent',
      '&:hover, &.active-key': {
        borderColor: accent,
      },
    },
  };
});
