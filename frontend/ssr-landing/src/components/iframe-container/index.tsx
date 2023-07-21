import { FunctionComponent } from 'react';

import { Box, Container, styled, Typography } from '@mui/material';

interface IframeCtrlProps {
  className?: string;
  title: React.ReactNode;
  url: string;
}

export const IframeContainer = styled(Box)(({ theme }) => {
  return {
    padding: `${theme.spacing(8)} 0`,
    minHeight: 'calc(100vh - 124px - 140px)',
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(4)} 0`,
      minHeight: 'calc(100vh - 124px - 190px)',
    },
  };
});

export const Iframe = styled('iframe')(({ theme }) => {
  return {
    marginTop: theme.spacing(3),
    border: 0,
    width: '100%',
    height: 'calc(100vh - 140px - 124px -  24px - 128px - 48px)',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      height: '70dvh',
    },
  };
});

const IframeCtrl: FunctionComponent<IframeCtrlProps> = ({ className, title, url }) => {
  return (
    <Container>
      <IframeContainer className={className || ''}>
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>
        <Iframe width="100%" src={url}>
          Browser not compatible.
        </Iframe>
      </IframeContainer>
    </Container>
  );
};

export default IframeCtrl;
