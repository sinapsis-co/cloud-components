import { Stack, styled } from '@mui/material';

export const RegisterFormContainer = styled(Stack)(({ theme }) => {
  return {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    [theme.breakpoints.down(800)]: {
      margin: 'auto',
      maxWidth: '600px',
      width: '90%',
      '& h3': {
        fontSize: '22px',
      },
    },
  };
});
