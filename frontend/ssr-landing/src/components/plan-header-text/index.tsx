import { FunctionComponent } from 'react';

import { FormattedMessage } from 'react-intl';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import GoBackLink from '@components/go-back-link';

interface PlanHeaderTextProps {
  className?: string;
  hasLinkBack?: boolean;
}

const PlanHeaderText: FunctionComponent<PlanHeaderTextProps> = ({ className, hasLinkBack }) => {
  const theme = useTheme();
  return (
    <Box className={className || ''}>
      {hasLinkBack ? <GoBackLink /> : null}
      <Typography variant="h3" component="h1" color={theme.palette.grey[700]} sx={{ mb: 0.5 }}>
        <FormattedMessage id="PLAN.TITLE" />
      </Typography>
      <Typography variant="h6" component="h3" color={theme.palette.grey[600]}>
        <FormattedMessage id="PLAN.SUBTITLE" />
      </Typography>
    </Box>
  );
};

export default PlanHeaderText;
