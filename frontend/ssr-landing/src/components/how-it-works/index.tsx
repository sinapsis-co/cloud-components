import { FunctionComponent } from 'react';

import { useIntl } from 'react-intl';

import { alpha, styled, useTheme } from '@mui/material';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Image from 'next/image';

interface HowItWorksProps {
  className?: string;
}

const ITEMS = [
  {
    image: '/image/services/service-1.webp',
    title: 'HOW_IT_WORKS.STEP.1.TITLE',
    description: 'HOW_IT_WORKS.STEP.1.TEXT',
  },
  {
    image: '/image/services/service-2.webp',
    title: 'HOW_IT_WORKS.STEP.2.TITLE',
    description: 'HOW_IT_WORKS.STEP.2.TEXT',
  },
  {
    image: '/image/services/service-3.webp',
    title: 'HOW_IT_WORKS.STEP.3.TITLE',
    description: 'HOW_IT_WORKS.STEP.3.TEXT',
  },
  {
    image: '/image/services/service-4.webp',
    title: 'HOW_IT_WORKS.STEP.4.TITLE',
    description: 'HOW_IT_WORKS.STEP.4.TEXT',
  },
  {
    image: '/image/services/service-5.webp',
    title: 'HOW_IT_WORKS.STEP.5.TITLE',
    description: 'HOW_IT_WORKS.STEP.5.TEXT',
  },
  {
    image: '/image/services/service-6.webp',
    title: 'HOW_IT_WORKS.STEP.6.TITLE',
    description: 'HOW_IT_WORKS.STEP.6.TEXT',
  },
];

const HowItWorks: FunctionComponent<HowItWorksProps> = ({ className }) => {
  const theme = useTheme();
  const intl = useIntl();

  return (
    <Container className={className || ''}>
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        textAlign="left"
        color={theme.palette.secondary.main}
        sx={{
          position: 'relative',
          mb: {
            xs: theme.spacing(4),
            sm: theme.spacing(8),
          },
        }}
      >
        {intl.formatMessage({ id: 'HOW_IT_WORKS.TITLE' })}
      </Typography>
      <Grid
        container
        spacing={{
          xs: 2,
          sm: 4,
        }}
        sx={{ zIndex: 1 }}
      >
        {ITEMS.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems={{
                xs: 'center',
                md: 'flex-start',
              }}
              gap={2}
            >
              <div className="image-wrapper">
                <Image
                  src={item.image}
                  alt={intl.formatMessage({
                    id: item.title,
                  })}
                  fill
                />
              </div>
              <Typography variant="h3" component="h2" fontWeight="bold" textAlign="left">
                {intl.formatMessage({ id: item.title })}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign="left"
                sx={{
                  maxWidth: {
                    xs: '70%',
                    md: '100%',
                  },
                }}
              >
                {intl.formatMessage({ id: item.description })}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorks;

const Container = styled(Stack)(({ theme }) => {
  return {
    width: '100%',
    margin: 'auto',
    padding: '6rem 0 4rem',
    maxWidth: '1200px',
    '&:before': {
      zIndex: 0,
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      backgroundImage: `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0)} 0%, ${alpha(
        theme.palette.background.default,
        1
      )} 50%)`,
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
