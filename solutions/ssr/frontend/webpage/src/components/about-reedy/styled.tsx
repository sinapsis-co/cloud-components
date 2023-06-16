import { Grid, styled } from '@mui/material';

export const AboutReedyContainer = styled(Grid)(({ theme }) => {
  return {
    margin: 'auto',
    maxWidth: '1100px',
    width: '90%',
    position: 'relative',
    [theme.breakpoints.down(720)]: {
      width: '85%',
      '& div.MuiGrid-item': {
        marginTop: theme.spacing(2),
        paddingLeft: '0',
      },
    },
  };
});

export const MainCard = styled(Grid)(({ theme }) => {
  return {
    backgroundColor: '#F45C44',
    color: '#fff',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.spacing(5),
    width: '100%',
    position: 'relative',
    '& .icon-box': {
      position: 'absolute',
      top: '0',
      left: '0',
      transform: 'translate(-50%, -50%)',
      height: '120px',
      width: '120px',
    },
    [theme.breakpoints.down('md')]: {
      '& h3': {
        fontSize: '30px',
      },
      '& p': {
        fontSize: '16px',
      },
    },
  };
});
