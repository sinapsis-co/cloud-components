import React, { FunctionComponent } from 'react';

import { styled, SxProps, Theme } from '@mui/material/styles';

import Box from '@mui/material/Box';

const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  marginInline: 'auto',
  display: 'flex',
  flexDirection: 'column',

  '& .content': {
    paddingBlock: theme.spacing(6, 6),

    [theme.breakpoints.down('md')]: {
      paddingBlock: theme.spacing(4, 4),
    },

    '&.center': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    [theme.breakpoints.down('lg')]: {
      paddingInline: theme.spacing(3),
    },
  },
}));

interface ContainerProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  centeredContent?: boolean;
  sx?: SxProps<Theme>;
}

const Container: FunctionComponent<ContainerProps> = ({ id, className, children, centeredContent, sx }) => {
  return (
    <Wrapper id={id || ''} className={className || ''} sx={{ ...sx }}>
      <div className={`content ${centeredContent ? 'center' : ''}`}>{children}</div>
    </Wrapper>
  );
};

export default Container;
