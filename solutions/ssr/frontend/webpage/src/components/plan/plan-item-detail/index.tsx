import { FunctionComponent } from 'react';

import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { FormattedMessage, useIntl } from 'react-intl';

import { SxProps, Theme, styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CheckItem from '@components/check-item';
import Slider from '@components/slider';

import { formatCurrency } from '@frontend/utils/format-currency';
import { PlanItemType } from '../plan-item';
import PlanPriceText from '../plan-item/plan-price-text';

import EcologyIcon from '@components/icons/ecology';
import BasketballIcon from '@components/icons/plan/basketball';
import C02Icon from '@components/icons/plan/c02';
import GearIcon from '@components/icons/plan/gear';
import MuscleIcon from '@components/icons/plan/muscle';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';

import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Wrapper = styled(Box)(({ theme }) => ({
  '.specs-item-title': {
    width: '100%',
    borderBottom: `2px dotted ${theme.palette.secondary.main}`,
  },
  '.benefit-icon': {
    height: theme.spacing(8),
  },
}));

interface PlanItemDetailProps {
  className?: string;
  plan?: PlanItemType;
  timeframe: string;
  sx?: SxProps<Theme>;
}

const PlanItemDetail: FunctionComponent<PlanItemDetailProps> = ({ className, plan, timeframe, sx }) => {
  const theme = useTheme();
  const intl = useIntl();
  const router = useRouter();

  const getButtonText = () => {
    if (!plan) return '';
    switch (plan.status) {
      case 'active':
        return 'COMMON.GET_STARTED';
      case 'recommended':
        return 'COMMON.GET_STARTED';
      case 'current':
        return 'PLAN.CURRENT_PLAN';
      case 'upgrade':
        return 'COMMON.UPGRADE';
      case 'downgrade':
        return 'COMMON.DOWNGRADE';
      case 'disabled':
        return 'COMMON.NOT_AVAILABLE';
      default:
        return 'COMMON.GET_STARTED';
    }
  };

  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BasketballIcon className="benefit-icon" />;
      case 1:
        return <GearIcon className="benefit-icon" />;
      case 2:
        return <MuscleIcon className="benefit-icon" />;
      case 3:
        return <C02Icon className="benefit-icon" />;
    }
  };

  return (
    <Wrapper className={className || ''} sx={sx}>
      <Grid sx={{ mb: { sm: 4, md: 9 } }} container columnSpacing={6}>
        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
          <Slider>
            {plan?.details?.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt="" style={{ borderRadius: theme.shape.borderRadius }} />
              </SwiperSlide>
            ))}
          </Slider>
          <EcologyIcon
            style={{
              width: 100,
              height: 100,
              position: 'absolute',
              bottom: 0,
              right: 0,
              zIndex: 999,
              transform: 'translate(15%, 15%)',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack gap={1} direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h1" component="h3" fontWeight={700} color={theme.palette.secondary.main}>
              <FormattedMessage id={plan?.name} />
            </Typography>
            {plan ? (
              <PlanPriceText
                yearly={timeframe === 'yearly'}
                disabled={plan.status === 'disabled'}
                variant="h3"
                align="center"
              >
                <span
                  style={
                    timeframe === 'yearly'
                      ? {
                          textDecoration: 'line-through',
                          marginBlockEnd: theme.spacing(0.25),
                          display: 'inline-block',
                          fontSize: theme.typography.h6.fontSize,
                          opacity: 0.75,
                        }
                      : undefined
                  }
                >
                  {formatCurrency(timeframe === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice + plan.monthlyPrice)}{' '}
                  {intl.formatMessage({
                    id: timeframe === 'monthly' ? 'PLAN.TIMEFRAME.MONTHLY' : 'PLAN.TIMEFRAME.YEARLY',
                  })}
                </span>
                <br />
                {timeframe === 'yearly' ? (
                  <>
                    {formatCurrency(plan.yearlyPrice)} {intl.formatMessage({ id: 'PLAN.TIMEFRAME.YEARLY' })}
                  </>
                ) : null}
              </PlanPriceText>
            ) : null}
            <Typography variant="body2" component="p" fontWeight={500}>
              <FormattedMessage id={plan?.details?.description} />
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={{ xs: 2, md: 4 }}
              sx={{
                mt: { xs: 2, md: 4 },
              }}
            >
              {plan?.details?.benefits.map((benefit, index) => (
                <Stack direction="column" justifyContent="center" alignItems="center" gap={0.5} key={index}>
                  {getBenefitIcon(index)}
                  <Typography variant="body1" fontWeight={600}>
                    {intl.formatMessage({ id: benefit })}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Button
              color="primary"
              disabled={plan?.status === 'disabled' || plan?.status === 'current'}
              variant="contained"
              fullWidth
              sx={{ mt: 4, maxWidth: { xs: '100%', md: '50%' }, mx: { xs: 0, md: 'auto' } }}
              // TODO: Temporal navigation to get access to payment screen.
              onClick={() => router.push('/payment')}
            >
              {intl.formatMessage({ id: getButtonText() })}
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={{ xs: 4, md: 8 }}
        rowSpacing={4}
        sx={{
          mt: {
            xs: 2,
            md: 0,
          },
        }}
      >
        <Grid item xs={12} md={4}>
          <Stack gap={1} direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Stack direction="row" gap={2} sx={{ width: '100%' }}>
              <Typography variant="h3" component="h4" fontWeight={600}>
                🔩
              </Typography>
              <Typography className="specs-item-title" variant="h3" component="h4" fontWeight={600}>
                <FormattedMessage id={plan?.details?.specs.title} />
              </Typography>
            </Stack>
            <Stack
              gap={0.5}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ width: '100%' }}
            >
              {plan?.details?.specs.items.map((item, index) => (
                <CheckItem key={index} hasDottedLine fullWidth>
                  <FormattedMessage id={item} />
                </CheckItem>
              ))}
              <Stack gap={2} direction="row" justifyContent="flex-start" alignItems="center" sx={{ mt: 2 }}>
                <RemoveRedEyeRoundedIcon />
                <Typography variant="caption" component="p" fontWeight={500} lineHeight={1}>
                  <FormattedMessage id={plan?.details?.note} />
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack gap={1} direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Stack direction="row" gap={2} sx={{ width: '100%' }}>
              <Typography variant="h3" component="h4" fontWeight={600}>
                💡
              </Typography>
              <Typography className="specs-item-title" variant="h3" component="h4" fontWeight={600}>
                <FormattedMessage id={plan?.details?.features.title} />
              </Typography>
            </Stack>
            <Stack
              gap={0.5}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ width: '100%' }}
            >
              {plan?.details?.features.items.map((item, index) => (
                <CheckItem key={index} hasDottedLine fullWidth>
                  <FormattedMessage id={item} />
                </CheckItem>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack gap={1} direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Stack direction="row" gap={2} sx={{ width: '100%' }}>
              <Typography variant="h3" component="h4" fontWeight={600}>
                📏
              </Typography>
              <Typography className="specs-item-title" variant="h3" component="h4" fontWeight={600}>
                <FormattedMessage id={plan?.details?.dimensions.title} />
              </Typography>
            </Stack>
            <Stack
              gap={0.5}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ width: '100%' }}
            >
              {plan?.details?.dimensions.items.map((item, index) => (
                <CheckItem key={index} hasDottedLine fullWidth>
                  <FormattedMessage id={item} />
                </CheckItem>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default PlanItemDetail;
