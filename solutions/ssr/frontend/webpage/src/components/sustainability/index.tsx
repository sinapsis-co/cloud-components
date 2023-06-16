import { FunctionComponent } from 'react';

import { Button, styled, useTheme } from '@mui/material';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Creature from '@components/icons/creature';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

interface SustainabilitySectionProps {
  className?: string;
}

const SustainabilitySection: FunctionComponent<SustainabilitySectionProps> = ({ className }) => {
  const theme = useTheme();
  return (
    <Container className={className || ''}>
      <div className="wrapper">
        <Stack
          gap={2}
          sx={{
            maxWidth: {
              xs: '100%',
              sm: '80%',
              md: '60%',
            },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            textAlign="left"
            color={theme.palette.background.default}
          >
            <FormattedMessage id="SUSTAINABILITY.TITLE" />
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            fontWeight="bold"
            textAlign="left"
            color={theme.palette.background.default}
          >
            <FormattedMessage id="SUSTAINABILITY.SUBTITLE" />
          </Typography>
          <Typography variant="body1" component="p" textAlign="left" color={theme.palette.background.default}>
            <FormattedMessage id="SUSTAINABILITY.TEXT" />
          </Typography>
          <Link href="/credits">
            <Button
              variant="outlined"
              color="white"
              sx={{
                width: {
                  xs: 'inherit',
                  md: 'fit-content',
                },
              }}
            >
              <FormattedMessage id="SUSTAINABILITY.BUTTON" />
            </Button>
          </Link>
        </Stack>
      </div>
      <Creature className="creature" />
    </Container>
  );
};

export default SustainabilitySection;

const Container = styled(Box)(({ theme }) => {
  return {
    position: 'relative',
    background: '#4C93B2',
    width: '100%',
    padding: '6rem 0 10rem',
    '.wrapper': {
      position: 'relative',
      zIndex: 1,
      margin: 'auto',
      maxWidth: '90%',
      [theme.breakpoints.up('lg')]: {
        maxWidth: '1200px',
      },
    },
    '.creature': {
      zIndex: 0,
      position: 'absolute',
      bottom: '0',
      right: '0',
      maxWidth: '600px',
    },
  };
});
