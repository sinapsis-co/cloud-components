import { FunctionComponent } from 'react';

import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import Link from '@mui/material/Link';

interface GoBackLinkProps {
  className?: string;
}

const GoBackLink: FunctionComponent<GoBackLinkProps> = ({ className }) => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();
  return (
    <Link
      className={className || ''}
      onClick={() => navigate(-1)}
      underline="hover"
      sx={{
        display: 'block',
        mb: 2,
      }}
      role="link" // Added role for link
      tabIndex={0} // Added tabindex to make it focusable
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          navigate(-1);
        }
      }}
    >
      {formatMessage({ defaultMessage: 'Go back' }, { id: 'COMMON.GO_BACK' })}
    </Link>
  );
};

export default GoBackLink;
