import { Box, styled } from '@mui/material';

export const VideoContainer = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',

    '.video-wrapper': {
      marginBlock: theme.spacing(24, 3),
      position: 'relative',
      marginInline: 'auto',
      width: 'min(100%, 1300px)',
      borderRadius: '20px',
      overflow: 'hidden',
      [theme.breakpoints.down('md')]: {
        borderRadius: 0,
      },
      [theme.breakpoints.down('sm')]: {
        marginBlock: 0,
      },
    },

    '.video': {
      aspectRatio: '16/9',
      margin: 'auto',
      width: '100%',
      [theme.breakpoints.up('xl')]: {
        minHeight: '732px',

        '& iframe': {
          minHeight: '732px',
        },
      },

      '& iframe': {
        overflow: 'hidden',
        height: '100%',
        width: '100%',
      },
    },
  };
});
