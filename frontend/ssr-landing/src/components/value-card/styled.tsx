import { Stack, styled } from '@mui/material';

export const ValueCardContainer = styled(Stack)(({ theme }) => {
  return {
    backgroundColor: '#fff',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    alignItems: 'flex-start',
    padding: theme.spacing(4),
    minHeight: 'auto',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      minHeight: '370px',
      padding: theme.spacing(4),
    },
    [theme.breakpoints.up(1000)]: {
      minHeight: '100%',
    },
    [theme.breakpoints.between(900, 'lg')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      h3: {
        fontSize: '30px',
      },
    },
  };
});

export const CardHeader = styled(Stack)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    '& .value-card-title': {
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  };
});
