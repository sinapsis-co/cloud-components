import { ContainerWrapper, HeaderContainer } from './styled';

import Button from '@mui/material/Button';
import { default as MuiLink } from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { useTheme } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import Logo from '../logo';

const Header: React.FC = () => {
  const theme = useTheme();
  const isLoggedIn = false;

  return (
    <ContainerWrapper>
      <HeaderContainer>
        <Logo className="header-logo" />
        {!isLoggedIn && (
          <Stack justifyContent="flex-end" alignItems="center" gap={2} direction="row">
            <MuiLink
              underline="hover"
              href="/pricing"
              sx={{
                fontWeight: '700 !important',
                fontSize: theme.typography.h5.fontSize,
                mr: 4,
                display: {
                  xs: 'none',
                  sm: 'block',
                },
              }}
            >
              <FormattedMessage id="COMMON.PRICING" />
            </MuiLink>
            <Button variant="outlined" color="info" size="small">
              <FormattedMessage id="COMMON.REGISTER" />
            </Button>
            <Button variant="contained" color="primary" size="small">
              <FormattedMessage id="COMMON.JOIN" />
            </Button>
          </Stack>
        )}
      </HeaderContainer>
    </ContainerWrapper>
  );
};

export default Header;
