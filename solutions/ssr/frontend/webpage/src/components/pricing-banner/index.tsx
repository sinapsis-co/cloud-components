import { FunctionComponent } from 'react';

import { FormattedMessage } from 'react-intl';

import { alpha, styled } from '@mui/material/styles';

import Container from '@components/layout/container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/router';

const BannerWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(90deg,${alpha(theme.palette.primary.main, 0.15)} 0%, ${alpha(
    theme.palette.primary.main,
    0.75
  )} 100%)`,
  borderRadius: theme.shape.borderRadius,
  marginBlockEnd: theme.spacing(10),
  [theme.breakpoints.down(1500)]: {
    overflow: 'hidden',
  },
  '& .banner-text': {
    color: theme.palette.text.primary,
    zIndex: 1,
  },
  '& .banner-image': {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(10%, -25%) scale(1.35)',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

interface PricingBannerProps {
  className?: string;
}

const PricingBanner: FunctionComponent<PricingBannerProps> = ({ className }) => {
  const router = useRouter();
  return (
    <Container className={className || ''}>
      <BannerWrapper
        sx={{
          px: {
            xs: 2,
            sm: 8,
          },
          py: {
            xs: 4,
            sm: 6,
          },
        }}
      >
        <Image className="banner-image" src="/image/logo/footer-logo.svg" alt="Reedy logo" width={574} height={316} />
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={2}
          justifyContent={{
            xs: 'center',
            sm: 'space-between',
          }}
        >
          <Stack direction="column">
            <Typography className="banner-text" variant="h2" fontWeight={600}>
              <FormattedMessage id="HOME.PRICING_BANNER.TITLE" />
            </Typography>
            <Typography className="banner-text" variant="subtitle1">
              <FormattedMessage id="HOME.PRICING_BANNER.TEXT" />
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push('/pricing')}
              sx={{ maxWidth: 'fit-content', mt: 3 }}
            >
              <FormattedMessage id="HOME.PRICING_BANNER.BUTTON" />
            </Button>
          </Stack>
        </Stack>
      </BannerWrapper>
    </Container>
  );
};

export default PricingBanner;
