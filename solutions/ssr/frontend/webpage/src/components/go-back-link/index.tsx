import { FunctionComponent } from 'react';

import { FormattedMessage } from 'react-intl';

import { default as MuiLink } from '@mui/material/Link';
import { useRouter } from 'next/router';

interface GoBackLinkProps {
  className?: string;
}

const GoBackLink: FunctionComponent<GoBackLinkProps> = ({ className }) => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <MuiLink
      className={className || ''}
      onClick={() => goBack()}
      underline="hover"
      sx={{ display: 'block', mb: 2, fontWeight: 600 }}
    >
      <FormattedMessage id="COMMON.GO_BACK" />
    </MuiLink>
  );
};

export default GoBackLink;
