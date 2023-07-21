import { FunctionComponent, useState } from 'react';

import { useIntl } from 'react-intl';

import { useIsMobile } from '@frontend/hooks/is-mobile';
import { formatCurrency } from '@frontend/utils/format-currency';

import { keyframes, styled, SxProps, Theme, useTheme } from '@mui/material/styles';

import { AnimatePresence, motion } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CheckItem from '@components/check-item';
import { easing } from '@components/framer';
import AssistanceRemoteIcon from '@components/icons/plan/assistance-remote';
import AssistanceSiteIcon from '@components/icons/plan/assistance-site';
import BasketballIcon from '@components/icons/plan/basketball';
import BuzzIcon from '@components/icons/plan/buzz';
import ElloIcon from '@components/icons/plan/ello';
import GingerIcon from '@components/icons/plan/ginger';
import GraduateIcon from '@components/icons/plan/graduate';
import HelmetIcon from '@components/icons/plan/helmet';
import SpankIcon from '@components/icons/plan/spank';

import { useRouter } from 'next/router';
import PlanItemText from './plan-item-text';
import PlanPriceText from './plan-price-text';

export type PlanItemType = {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  image: string;
  secondImage?: string;
  description: string;
  recommendedFor: string;
  features: string[];
  assistanceText: string;
  guaranteeText: string;
  status: 'active' | 'recommended' | 'current' | 'upgrade' | 'downgrade' | 'disabled';
  details?: {
    description: string;
    images: string[];
    specs: {
      title: string;
      items: string[];
    };
    dimensions: {
      title: string;
      items: string[];
    };
    features: {
      title: string;
      items: string[];
    };
    benefits: string[];
    note?: string;
  };
};

interface PlanItemProps {
  className?: string;
  plan?: PlanItemType;
  timeframe: string;
  isSmall?: boolean;
  sx?: SxProps<Theme>;
}

const PlanItem: FunctionComponent<PlanItemProps> = ({ className, plan, timeframe, isSmall, sx }) => {
  const theme = useTheme();
  const intl = useIntl();
  const isMobile = useIsMobile();
  const router = useRouter();

  const [imageHovered, setImageHovered] = useState(false);

  const getAssistanceIcon = () => {
    switch (plan?.id) {
      case 'ello':
      case 'buzz':
        return <AssistanceRemoteIcon className="plan-icon-item" />;
      case 'ginger':
      case 'spank':
        return <AssistanceSiteIcon className="plan-icon-item" />;
    }
  };

  const getReccomendedIcon = () => {
    switch (plan?.id) {
      case 'ello':
      case 'buzz':
      case 'ginger':
      case 'spank':
        return <GraduateIcon className="plan-icon-item" />;
    }
  };

  const getPlanIcon = () => {
    switch (plan?.id) {
      case 'ello':
        return <ElloIcon className="plan-icon-item" />;
      case 'buzz':
        return <BuzzIcon className="plan-icon-item" />;
      case 'ginger':
        return <GingerIcon className="plan-icon-item" />;
      case 'spank':
        return <SpankIcon className="plan-icon-item" />;
    }
  };

  return plan ? (
    <Wrapper className={className || ''} sx={{ flexGrow: 1, ...sx }}>
      <PlanWrapper className={`${plan.status} ${isSmall ? 'small' : ''}`}>
        <Typography className="plan-title" variant="h3" component="h1" textTransform="uppercase">
          {plan.status === 'recommended' ? (
            <RecommendedBox>
              <Typography className="recommended-text" fontWeight={700}>
                {intl.formatMessage({ id: 'PLAN.RECOMMENDED' })}
              </Typography>
            </RecommendedBox>
          ) : null}
          {intl.formatMessage({ id: plan.name })}
          <svg preserveAspectRatio="none">
            <rect width="100%" height="100%" />
          </svg>
        </Typography>
        <Box
          sx={
            plan.status === 'disabled'
              ? {
                  pointerEvents: 'none',
                }
              : undefined
          }
          onMouseEnter={() => setImageHovered(true)}
          onMouseLeave={() => setImageHovered(false)}
        >
          <AnimatePresence mode="popLayout">
            <Image
              animate={imageHovered ? { opacity: [0, 1] } : { opacity: 1 }}
              transition={{ duration: 0.5, ...easing }}
              className={isMobile ? 'small' : ''}
              src={imageHovered ? plan.secondImage : plan.image}
              alt={intl.formatMessage({ id: plan.name })}
            />
          </AnimatePresence>
        </Box>
        <PlanPriceText
          yearly={timeframe === 'yearly'}
          disabled={plan.status === 'disabled'}
          variant="h3"
          align="center"
          sx={{ mt: { xs: 1, md: 3 }, mb: { xs: 2, md: 0 } }}
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
            {intl.formatMessage({ id: timeframe === 'monthly' ? 'PLAN.TIMEFRAME.MONTHLY' : 'PLAN.TIMEFRAME.YEARLY' })}
          </span>
          <br />
          {timeframe === 'yearly' ? (
            <>
              {formatCurrency(plan.yearlyPrice)} {intl.formatMessage({ id: 'PLAN.TIMEFRAME.YEARLY' })}
            </>
          ) : null}
        </PlanPriceText>
        {isSmall ? null : (
          <Link
            href={`/pricing/${plan.id}`}
            color={plan.status === 'disabled' || plan.status === 'current' ? theme.palette.text.secondary : 'secondary'}
            sx={{
              mt: 2,
              mb: 2,
              position: 'relative',
              pointerEvents: plan.status === 'disabled' || plan.status === 'current' ? 'none' : 'all',
            }}
          >
            {intl.formatMessage({ id: 'PLAN.SEE_DETAILS' })}
          </Link>
        )}
        <PlanItemText
          sx={{
            mb: 2,
            minHeight: {
              sm: 'none',
              md: 'calc(21px * 3)',
            },
          }}
          disabled={plan.status === 'disabled' || plan.status === 'current'}
          icon={getPlanIcon()}
        >
          {intl.formatMessage({ id: plan.description })}
        </PlanItemText>
        <PlanItemText
          sx={{
            mb: 2,
            minHeight: {
              sm: 'none',
              md: 'calc(21px * 3)',
            },
          }}
          disabled={plan.status === 'disabled' || plan.status === 'current'}
          icon={getReccomendedIcon()}
        >
          {intl.formatMessage({ id: plan.recommendedFor })}
        </PlanItemText>
        {isSmall ? null : (
          <Stack spacing={1} direction="row" sx={{ width: '100%' }}>
            <BasketballIcon className="plan-icon-item" />
            <Stack spacing={1} sx={{ position: 'relative', width: '100%' }}>
              <Typography variant="body2" fontWeight={600}>
                {intl.formatMessage({ id: 'PLAN.WHAT_IT_CAN_DO' })}
              </Typography>
              {plan.features.map((feature, index) => (
                <CheckItem
                  sx={{ width: '100%', textAlign: 'left' }}
                  key={index}
                  small
                  fullWidth
                  disabled={plan.status === 'disabled' || plan.status === 'current'}
                >
                  {intl.formatMessage({ id: feature })}
                </CheckItem>
              ))}
            </Stack>
          </Stack>
        )}
        <Stack
          gap={1}
          direction="row"
          alignItems="center"
          sx={{
            mt: 2,
            position: 'relative',
            width: '100%',
            minHeight: {
              sm: 'none',
              md: 'calc(21px * 2)',
            },
          }}
        >
          {getAssistanceIcon()}
          <Typography textAlign="left" variant="body2" fontWeight={600}>
            {intl.formatMessage({ id: plan.assistanceText })}
          </Typography>
        </Stack>
        <Stack gap={1} direction="row" alignItems="center" sx={{ mt: 2, position: 'relative', width: '100%' }}>
          <HelmetIcon className="plan-icon-item" />
          <Typography sx={{ width: '100%' }} textAlign="left" variant="body2" fontWeight={600}>
            {intl.formatMessage({ id: plan.guaranteeText })}
          </Typography>
        </Stack>
        <Button
          color="primary"
          disabled={plan.status === 'disabled' || plan.status === 'current'}
          variant="contained"
          fullWidth
          sx={{ mt: 4 }}
          // TODO: Temporal navigation to get access to payment screen.
          onClick={() => router.push('/payment')}
        >
          {intl.formatMessage({ id: 'COMMON.GET_STARTED' })}
        </Button>
      </PlanWrapper>
    </Wrapper>
  ) : null;
};

export default PlanItem;

const moveDots = keyframes`to { stroke-dashoffset: 0; }`;

const PlanWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: `2px solid ${theme.palette.grey[100]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  position: 'relative',
  '&:before': {
    pointerEvents: 'none',
    position: 'absolute',
    content: '""',
    height: '60%',
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: `radial-gradient(${theme.palette.grey[300]} 1px, transparent 0)`,
    backgroundSize: theme.spacing(2, 2),
  },
  '.plan-title': {
    color: theme.palette.secondary.main,
    padding: theme.spacing(2),
    textAlign: 'center',
    fontWeight: 700,
    position: 'relative',
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    svg: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      fill: 'transparent',
      overflow: 'visible',
      borderRadius: theme.shape.borderRadius,
      rect: {
        fill: 'transparent',
        stroke: theme.palette.secondary.main,
        strokeWidth: '2px',
        strokeDasharray: '0px 8px',
        strokeDashoffset: '8px',
        strokeLinecap: 'round',
        animation: `${moveDots} 0.5s linear infinite`,
      },
    },
  },
  '&.recommended': {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderWidth: '0 2px 2px 2px',
  },
  '&.disabled': {
    '& > *': {
      color: theme.palette.text.secondary,
      opacity: 0.5,
    },
    '.plan-title': {
      svg: {
        display: 'none',
      },
    },
  },
  '&.small': {
    borderWidth: '2px',
  },
}));

const RecommendedBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -50%)',

  zIndex: 1,
  textTransform: 'uppercase',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.spacing(5),
  color: theme.palette.common.white,
  padding: theme.spacing(0.25, 2),
  width: 'fit-content',
  marginLeft: 'auto',
  marginRight: 0,
  '.recommended-text': {
    fontSize: '10px',
  },
}));

const Image = styled(motion.img)(({ theme }) => ({
  height: '200px',
  marginInline: 'auto',
  marginBlockStart: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  '&.small': {
    marginBlockStart: theme.spacing(2),
    height: '140px',
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  '* > .plan-icon-item': {
    width: theme.spacing(4),
    height: theme.spacing(4),
    '& > path': {
      fill: theme.palette.text.primary,
    },
  },
}));
