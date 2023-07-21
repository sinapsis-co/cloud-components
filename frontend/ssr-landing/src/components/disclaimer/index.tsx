import { FunctionComponent } from 'react';

import { alpha, styled } from '@mui/material/styles';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { FormattedMessage } from 'react-intl';
import CheckItem from '../check-item';

const DisclaimerWrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.dark, 0.15),
  padding: theme.spacing(4),
  border: `1px solid ${theme.palette.primary.dark}`,
  filter: `drop-shadow(${theme.spacing(0, 0, 1)} ${alpha(theme.palette.primary.light, 0.25)})`,
  '&.small': {
    padding: theme.spacing(2.5),
  },
}));

interface DisclaimerProps {
  className?: string;
  isSmall?: boolean;
}

const CheckItems = ['PLAN.DISCLAIMER.ITEM.1', 'PLAN.DISCLAIMER.ITEM.2', 'PLAN.DISCLAIMER.ITEM.3'];

const Disclaimer: FunctionComponent<DisclaimerProps> = ({ className, isSmall }) => {
  return (
    <DisclaimerWrapper className={`${className || ''} ${isSmall ? 'small' : ''}`}>
      <Typography variant={isSmall ? 'h5' : 'h4'} component="h2" fontWeight={600} sx={{ mb: 1 }}>
        <FormattedMessage id="PLAN.DISCLAIMER.TITLE" />
      </Typography>
      <Typography variant="body1" component="p" sx={{ mb: 3 }}>
        <FormattedMessage id="PLAN.DISCLAIMER.SUBTITLE" />
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={3}>
        {CheckItems.map((item, index) => (
          <CheckItem key={index}>
            <FormattedMessage id={item} />
          </CheckItem>
        ))}
      </Stack>
    </DisclaimerWrapper>
  );
};

export default Disclaimer;
